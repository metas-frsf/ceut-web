import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PadronComponent } from "@app/padron/padron.component";

const routes: Routes = [{ path: "", component: PadronComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PadronRoutingModule {}
