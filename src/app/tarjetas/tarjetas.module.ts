import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetasComponent } from './tarjetas.component';
import { FormsModule } from '@angular/forms';
import { TarjetaGenericaModule } from './tarjeta-generica/tarjeta-generica.module';
import { CardService } from '@app/_services/card.service';
import { TarjetasRoutingModule } from '@app/tarjetas/tarjetas-routing.module';
import { LoadingSpinnerModule } from '@app/_components/loading-spinner/loading-spinner.module';

@NgModule({
  declarations: [TarjetasComponent],
  imports: [CommonModule, FormsModule, TarjetaGenericaModule, TarjetasRoutingModule, LoadingSpinnerModule],
  providers: [CardService],
})
export class TarjetasModule {}
