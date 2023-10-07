import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PadronRoutingModule } from './padron-routing.module';
import { PadronComponent } from './padron.component';

@NgModule({
  declarations: [PadronComponent],
  imports: [
    CommonModule,
    PadronRoutingModule
  ]
})
export class PadronModule { }
