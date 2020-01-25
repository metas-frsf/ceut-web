import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CopiesCalculatorComponent } from "@app/dashboard/copies-calculator/copies-calculator.component";

const routes: Routes = [
  { path: "", component: CopiesCalculatorComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CopiesCalculatorRoutingModule {}
