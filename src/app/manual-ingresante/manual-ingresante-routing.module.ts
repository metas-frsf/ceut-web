import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManualIngresanteComponent } from '@app/manual-ingresante/manual-ingresante.component';

const routes: Routes = [{ path: '', component: ManualIngresanteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManualIngresanteRoutingModule {}
