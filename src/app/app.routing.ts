import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./tarjetas/tarjetas.module").then((m) => m.TarjetasModule),
  },
  {
    path: "electivas",
    loadChildren: () =>
      import("./electivas/electivas.module").then((m) => m.ElectivasModule),
  },
  {
    path: "manual-ingresante",
    loadChildren: () =>
      import("./manual-ingresante/manual-ingresante.module").then(
        (m) => m.ManualIngresanteModule
      ),
  },
  {
    path: "calendario",
    loadChildren: () =>
      import("./calendario/calendario.module").then((m) => m.CalendarioModule),
  },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", redirectTo: "home" },
];

export const routing = RouterModule.forRoot(appRoutes);
