import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "@app/dashboard/dashboard.component";

const routes: Routes = [
  { path: "", component: DashboardComponent, pathMatch: "full" },
  {
    path: "gestion-tarjetas",
    loadChildren:
      "./gestion-tarjetas/gestion-tarjetas.module#GestionTarjetasModule"
  },
  {
    path: "calculadora",
    loadChildren:
      "./copies-calculator/copies-calculator.module#CopiesCalculatorModule"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
