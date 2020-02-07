import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login";
import { AuthGuard } from "./_guards";

const appRoutes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./tarjetas/tarjetas.module").then(m => m.TarjetasModule)
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  { path: "login", component: LoginComponent },
  {
    path: "jeut",
    loadChildren: () =>
      import("./deportes/deportes.module").then(m => m.DeportesModule)
  },
  {
    path: "electivas",
    loadChildren: () =>
      import("./electivas/electivas.module").then(m => m.ElectivasModule)
  },
  // otherwise redirect to dashboard
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", redirectTo: "home" }
];

export const routing = RouterModule.forRoot(appRoutes);
