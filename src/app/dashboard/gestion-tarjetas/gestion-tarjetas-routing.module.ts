import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GestionTarjetasComponent} from '@app/dashboard/gestion-tarjetas/gestion-tarjetas.component';

const routes: Routes = [
  { path: "", component: GestionTarjetasComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionTarjetasRoutingModule {}
