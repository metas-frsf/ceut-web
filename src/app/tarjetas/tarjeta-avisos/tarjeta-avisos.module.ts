import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TarjetaAvisosComponent} from './tarjeta-avisos.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule
  ],
  declarations: [TarjetaAvisosComponent],
  exports: [TarjetaAvisosComponent]
})
export class TarjetaAvisosModule { }
