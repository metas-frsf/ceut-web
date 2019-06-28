import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TarjetasComponent} from './tarjetas.component';
import {FormsModule} from '@angular/forms';
import {TarjetaAvisosModule} from './tarjeta-avisos/tarjeta-avisos.module';
import {TarjetaGenericaModule} from './tarjeta-generica/tarjeta-generica.module';
import {CardService} from '@app/_services/card.service';
import {TarjetasRoutingModule} from '@app/tarjetas/tarjetas-routing.module';

@NgModule({
  declarations: [TarjetasComponent],
  imports: [
    CommonModule,
    FormsModule,
    TarjetaAvisosModule,
    TarjetaGenericaModule,
    TarjetasRoutingModule
  ],
  providers: [
    CardService
  ],
})
export class TarjetasModule { }
