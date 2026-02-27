# Code Review: Branch `176-migrate-serverless-functions-to-typescript`

**Date:** 2026-02-27
**Reviewer:** code-reviewer agent (Claude Sonnet 4.6)
**Scope:** Migration of Vercel serverless functions from JavaScript to TypeScript

---

## Summary

This branch migrates six Vercel serverless API functions from JavaScript to TypeScript. The migration
adds a standalone `api/tsconfig.json`, introduces typed interfaces for Sanity data shapes and Vercel
handler signatures, replaces two runtime bugs in the original JS (`active.js` crashed with `.pop().cards`
on an empty array; `[id].js` returned `undefined` instead of `null`), and extracts the mapping function
in `elective.ts` into a named function following SRP.

The new files are: `api/_helpers/environment.ts`, `api/_helpers/sanity-connector.ts`,
`api/cards/fixed.ts`, `api/cards/active.ts`, `api/cards/[id].ts`, `api/courses/elective.ts`,
and `api/tsconfig.json`. Six `.js` files were deleted. `@vercel/node` was added as a devDependency.

Lint and build pass. No test scripts exist in this project (consistent with existing codebase state).

---

## Critical Issues (Must Fix)

| #   | File                                                                                        | Line         | Issue                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Fix                                                                                                                                                                                                                                                                                                                                                                                                                                              | Addressed  |
| --- | ------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| 1   | `api/cards/fixed.ts`, `api/cards/active.ts`, `api/cards/[id].ts`, `api/courses/elective.ts` | 4, 14, 8, 84 | **Handler return type is `Promise<VercelResponse>` but `VercelApiHandler` expects `void \| Promise<void>`.** The `VercelApiHandler` type from `@vercel/node` is defined as `(req, res) => void \| Promise<void>`. Returning `Promise<VercelResponse>` deviates from the contract. TypeScript does not catch this because the default export is not constrained to satisfy `VercelApiHandler`, but it signals incorrect intent and may cause issues with Vercel's type-checking tooling. | Change the return type annotation to `Promise<void>` on all four handler functions, and drop the `return` keyword before `res.json(...)` calls (since `void` functions in async context simply await the statement). Alternatively, type the export as `satisfies VercelApiHandler`. Example: `export default async function getFixed(req: VercelRequest, res: VercelResponse): Promise<void> { ... await client.fetch(...); res.json(cards); }` | Discovered |

---

## Warnings (Should Fix)

| #   | File                          | Line  | Issue                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Recommendation                                                                                                                                                                                                                                                                                                                                       | Addressed  |
| --- | ----------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| 2   | `api/cards/fixed.ts`          | 4     | **Unused `req` parameter.** The `req: VercelRequest` parameter is declared but never used inside `getFixed`. In TypeScript strict mode this does not error by default unless `noUnusedParameters` is enabled, but it is misleading to readers.                                                                                                                                                                                                                                                                                                                                                                                                                                            | Prefix with underscore to signal intent: `_req: VercelRequest`, or omit if the handler signature allows it (Vercel's runtime passes both arguments regardless).                                                                                                                                                                                      | Discovered |
| 3   | `api/cards/active.ts`         | 4     | **Unused `req` parameter.** Same as issue #2 — `req` is declared but never used inside `getActive`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Prefix with underscore: `_req: VercelRequest`.                                                                                                                                                                                                                                                                                                       | Discovered |
| 4   | `api/tsconfig.json`           | 5     | **`moduleResolution: "bundler"` is inappropriate for a Node.js runtime environment.** The `bundler` resolution mode was introduced in TypeScript 5.0 for projects processed by a bundler (e.g., esbuild, webpack, Vite). Vercel Node.js serverless functions are executed directly by the Node.js runtime, not through a bundler pipeline. The correct resolution mode for ESM Node.js (as indicated by `"module": "ES2022"` and `"type": "module"` in `package.json`) is `"node16"` or `"nodenext"`. Using `bundler` means TypeScript's module resolution rules will not match Node.js's actual module resolution, creating a mismatch that could surface at runtime.                    | Change `"moduleResolution"` from `"bundler"` to `"nodenext"` and change `"module"` from `"ES2022"` to `"nodenext"` to align with Node.js ESM module resolution semantics. The `.js` extension imports already used in the files are correct for `nodenext`.                                                                                          | Discovered |
| 5   | `api/cards/active.ts`         | 9–11  | **`SanityCard._type: string` overlaps with `SanityFixedCards._type: 'fixedCards'`**, making the union type `(SanityFixedCards \| SanityCard)[]` imprecise. Any `SanityFixedCards` object also satisfies `SanityCard`, so the type guard on line 17 (`card._type === 'fixedCards'`) is not as narrowing as intended at the type level.                                                                                                                                                                                                                                                                                                                                                     | Add a discriminant to `SanityCard` to exclude the `fixedCards` type: `_type: Exclude<string, 'fixedCards'>`. This ensures the union is truly discriminated and TypeScript understands that after the type guard, the non-`SanityFixedCards` items are narrowed correctly.                                                                            | Discovered |
| 6   | `api/courses/elective.ts`     | 45    | **`ELECTIVE_QUERY` constant is declared at module scope but is used only inside `getElectives`.** Per CLAUDE.md scope rules: _"Local constants: Keep inside the function scope when used by a single function."_ The GROQ query string is only consumed in one function, so it should live inside `getElectives` or, at most, immediately above it as a module-level constant adjacent to its sole usage site.                                                                                                                                                                                                                                                                            | Move `ELECTIVE_QUERY` to be declared directly before or inside `getElectives`. If extracting for readability, declare it immediately above the function definition (not at the top of the file).                                                                                                                                                     | Discovered |
| 7   | `api/_helpers/environment.ts` | 5–12  | **`SanityConfig` and `Environment` interfaces are private implementation details not exported but also not needed as named interfaces.** The interfaces are used only once as the type annotation for the `environment` constant. Giving them named types for single-use inline shapes is over-engineering per YAGNI/KISS. Additionally, `SanityConfig.projectId` and `SanityConfig.dataset` are typed as `string \| undefined`, which propagates `undefined` into `createClient()` in `sanity-connector.ts` — `@sanity/client` accepts optional `string` here so this is compatible, but it means the type does not express the runtime requirement that these values should be present. | The interfaces are acceptable as documentation of shape, but consider whether the runtime contract should be enforced with a guard. If keeping the interfaces, they should remain unexported (they already are). If simplifying, the inline type `{ sanity: { projectId: string \| undefined; dataset: string \| undefined } }` would also be clear. | Discovered |
| 8   | `api/cards/active.ts`         | 20–21 | **`'id' in card` narrowing is used as a filter, but TypeScript does not narrow the type inside `.filter()` callbacks.** The `'id' in card` check correctly narrows type at the expression level but the result type of `fixedCards` and `defaultCards` remains `(SanityFixedCards \| SanityCard)[]` rather than `SanityCard[]`. The response will include `SanityFixedCards` entries if they happen to also have an `id` field (which they do not per the interface, but the runtime data may differ).                                                                                                                                                                                    | Use a type predicate to properly narrow: `cards.filter((card): card is SanityCard => card._type !== 'fixedCards')` for a semantically correct filter. This is also more readable — it expresses business intent ("cards that are not the fixedCards config entry") rather than structural shape.                                                     | Discovered |

---

## Suggestions (Nice to Have)

| #   | File                                       | Line      | Issue                                                                                                                                                                                                                                                                                                                                                                    | Recommendation                                                                                                                                                                                                                                                                                                                                                                                   | Addressed  |
| --- | ------------------------------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| 9   | `api/cards/active.ts`, `api/cards/[id].ts` | 9–11, 4–6 | **`SanityCard` interface is duplicated across two files.** Both `active.ts` and `[id].ts` independently define `interface SanityCard { id: string }` (and `active.ts` adds `_type`). This is duplication that could drift over time.                                                                                                                                     | Extract shared Sanity data interfaces into `api/_helpers/sanity-types.ts` and import from there. This gives a single source of truth for all Sanity document shapes across the API endpoints.                                                                                                                                                                                                    | Discovered |
| 10  | `api/courses/elective.ts`                  | 62        | **`e.tipoDeAprobacion as keyof typeof TIPO_APROBACION_LABELS` is an unsafe cast.** If the Sanity field returns a value not in the frozen object's keys, TypeScript accepts it silently and `TIPO_APROBACION_LABELS[labelKey]` would be `undefined`. The `?? e.tipoDeAprobacion` fallback handles the runtime case, but the cast itself bypasses TypeScript's protection. | Remove the cast and handle the lookup differently: `const label = (TIPO_APROBACION_LABELS as Record<string, string>)[e.tipoDeAprobacion] ?? e.tipoDeAprobacion`. This avoids the unsafe cast while preserving the fallback behavior. Alternatively, validate `e.tipoDeAprobacion` with a Zod schema at the function boundary as per domain model guidelines.                                     | Discovered |
| 11  | `api/_helpers/environment.ts`              | 1–3       | **`dotenv.config()` is called as a module-level side effect.** This means every `import` of the module triggers dotenv loading, and the result (success or failure) is silently discarded. The original JS at least checked `result.error` and branched.                                                                                                                 | While the simplified version is cleaner and Vercel injects env vars natively (making dotenv a local-dev-only concern), add a brief comment explaining why the result is discarded: `// In Vercel, environment variables are injected by the runtime; dotenv is only used locally.` This aligns with the Predictable principle — code should do what it looks like, including the silent discard. | Discovered |
| 12  | `api/tsconfig.json`                        | 8         | **`"isolatedModules": true` is specified but the `api/` files do not use type-only imports in a way that requires it.** `isolatedModules` is useful for bundler setups that process files independently (like esbuild or Babel). For a Node.js serverless environment where `tsc` compiles the project, it is not required and adds an unnecessary constraint.           | This is a minor point and fine to keep for consistency with the main `tsconfig.json`. No action required unless the project moves to a full `tsc` build pipeline for the API.                                                                                                                                                                                                                    | Discovered |

---

## Addressed Column Statuses

| Status                 | Meaning                                                                              |
| ---------------------- | ------------------------------------------------------------------------------------ |
| Discovered             | Initial state — issue identified but not yet acted on                                |
| In Progress            | Actively being worked on                                                             |
| Fixed                  | Resolved and verified                                                                |
| Discarded              | Not a real issue — irrelevant, incorrect finding, or user decided it does not apply  |
| Deferred               | Acknowledged as valid but postponed — a new GitHub issue must be created to track it |
| Won't Fix              | Valid issue but intentionally accepted (e.g., design trade-off, accepted tech debt)  |
| Needs Integration Test | Cannot be verified at the unit test level — requires a real database or E2E test     |

---

## Verification Results

| Command         | Result |
| --------------- | ------ |
| `npm run lint`  | PASS   |
| `npm run build` | PASS   |

Note: This project does not define `npm run ci`, `npm run test`, `npm run stylelint`, or
`npm run storybook:build` scripts. Only `lint` and `build` are available. Both pass with exit code 0.

---

## Test Coverage

- New files with tests: 0/6

Note: No test files exist anywhere in this project. This is consistent with the current state of the
codebase and is not a regression introduced by this branch. Adding tests for serverless handlers
(which depend on live Sanity CMS data) would require integration test infrastructure. This is
tracked as issue #8 above under "Needs Integration Test" status if desired.

---

## Behavioral Improvements Over the Original JS

The TypeScript migration also fixed two runtime bugs present in the original JS files:

1. **`active.js` crash on empty fixedCards** — The original code used `.pop().cards` on a filtered
   array, which would throw `TypeError: Cannot read properties of undefined` if no `fixedCards`
   document existed in Sanity. The new version uses optional chaining (`?.cards ?? []`).

2. **`[id].js` returned `undefined` for not-found cards** — The original used `.filter(...).pop()`
   which returns `undefined` for no matches, serialized inconsistently by `res.json()`. The new
   version explicitly returns `null`.

These are not issues; they are improvements worth acknowledging.

---

## Verdict

**CHANGES REQUESTED**

One critical issue must be addressed before merging:

- **Issue #1**: The handler return type `Promise<VercelResponse>` conflicts with Vercel's
  `VercelApiHandler` contract (`void | Promise<void>`).

Additionally, issues #2, #3, #4, and #8 are significant enough to address in this branch:

- **#2, #3**: Unused `req` parameters in `fixed.ts` and `active.ts`
- **#4**: `moduleResolution: "bundler"` should be `"nodenext"` for Node.js runtime compatibility
- **#8**: The `'id' in card` filter does not narrow types correctly; a type predicate is cleaner

Issues #5, #6, #7 are best-practice warnings. Issue #9 (shared interfaces) is a suggestion for
follow-up. Issues #10, #11, #12 are nice-to-have.
