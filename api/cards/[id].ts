import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { SanityCard } from '../_helpers/sanity-types.js';
import { client } from '../_helpers/sanity-connector.js';

export default async function getById(req: VercelRequest, res: VercelResponse): Promise<void> {
  const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;
  const cards = await client.fetch<SanityCard[]>('*', {});

  const result = cards.find((card) => card.id === id);
  res.json(result ?? null);
}
