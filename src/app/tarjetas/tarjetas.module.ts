import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetasComponent } from './tarjetas.component';
import { FormsModule } from '@angular/forms';

import { CardService } from '@app/_services/card.service';
import { TarjetasRoutingModule } from '@app/tarjetas/tarjetas-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, TarjetasRoutingModule, TarjetasComponent],
  providers: [CardService],
})
export class TarjetasModule {}
