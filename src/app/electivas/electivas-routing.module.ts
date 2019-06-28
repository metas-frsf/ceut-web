import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ElectivasComponent} from '@app/electivas/electivas.component';

const routes: Routes = [
  { path: '', component: ElectivasComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectivasRoutingModule { }
