import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TarjetasComponent} from '@app/tarjetas/tarjetas.component';

const routes: Routes = [
  { path: '', component: TarjetasComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarjetasRoutingModule { }
