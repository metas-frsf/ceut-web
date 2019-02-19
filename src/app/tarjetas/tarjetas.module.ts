import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TarjetasComponent} from './tarjetas.component';
import {FormsModule} from "@angular/forms";
import {TarjetaAvisosModule} from "./tarjeta-avisos/tarjeta-avisos.module";
import {TarjetaGenericaModule} from "./tarjeta-generica/tarjeta-generica.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TarjetaAvisosModule,
    TarjetaGenericaModule
  ],
  exports: [TarjetasComponent],
  declarations: [TarjetasComponent]
})
export class TarjetasModule { }
