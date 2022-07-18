﻿import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "@auth0/auth0-angular";
import { AuthorityGuard } from "@app/_guards";

const appRoutes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./tarjetas/tarjetas.module").then((m) => m.TarjetasModule),
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
    canActivate: [AuthGuard, AuthorityGuard],
  },
  //TODO: Volver funcional nuevamente cuando se planifique #117 o ante la necesidad de una nueva JEUT
  // {
  //   path: "deportes",
  //   loadChildren: () =>
  //     import("./deportes/deportes.module").then((m) => m.DeportesModule),
  // },
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
  // otherwise redirect to dashboard
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", redirectTo: "home" },
];

export const routing = RouterModule.forRoot(appRoutes);
