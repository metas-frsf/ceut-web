import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DeportesComponent} from '@app/deportes/deportes.component';

const routes: Routes = [
  { path: '', component: DeportesComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeportesRoutingModule { }
