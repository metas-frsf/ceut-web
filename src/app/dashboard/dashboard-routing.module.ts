import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "@app/dashboard/dashboard.component";

const routes: Routes = [
  { path: "", component: DashboardComponent, pathMatch: "full" },
  {
    path: "gestion-tarjetas",
    loadChildren: () =>
      import("./gestion-tarjetas/gestion-tarjetas.module").then(
        m => m.GestionTarjetasModule
      )
  },
  {
    path: "calculadora",
    loadChildren: () =>
      import("./copies-calculator/copies-calculator.module").then(
        m => m.CopiesCalculatorModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
