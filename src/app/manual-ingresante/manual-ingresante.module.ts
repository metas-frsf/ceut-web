import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManualIngresanteRoutingModule } from './manual-ingresante-routing.module';
import { ManualIngresanteComponent } from './manual-ingresante.component';

@NgModule({
  imports: [CommonModule, ManualIngresanteRoutingModule, ManualIngresanteComponent],
})
export class ManualIngresanteModule {}
