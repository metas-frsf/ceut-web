import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaAvisosComponent } from './tarjeta-avisos.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  declarations: [TarjetaAvisosComponent],
  exports: [TarjetaAvisosComponent]
})
export class TarjetaAvisosModule { }
