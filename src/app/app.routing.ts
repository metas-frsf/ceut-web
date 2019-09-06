import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login";
import { AuthGuard } from "./_guards";

const appRoutes: Routes = [
  { path: "home", loadChildren: "./tarjetas/tarjetas.module#TarjetasModule" },
  {
    path: "dashboard",
    loadChildren: "./dashboard/dashboard.module#DashboardModule",
    canActivate: [AuthGuard]
  },
  { path: "login", component: LoginComponent },
  { path: "jeut", loadChildren: "./deportes/deportes.module#DeportesModule" },
  {
    path: "electivas",
    loadChildren: "./electivas/electivas.module#ElectivasModule"
  },
  // otherwise redirect to dashboard
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", redirectTo: "home" }
];

export const routing = RouterModule.forRoot(appRoutes);
