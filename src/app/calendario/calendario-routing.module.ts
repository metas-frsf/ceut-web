import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CalendarioComponent } from "@app/calendario/calendario.component";

const routes: Routes = [{ path: "", component: CalendarioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioRoutingModule {}
