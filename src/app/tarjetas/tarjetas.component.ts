import { CardService } from '@app/_services/card.service';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoadingSpinnerComponent } from '../_components/loading-spinner/loading-spinner.component';
import { TarjetaGenericaComponent } from './tarjeta-generica/tarjeta-generica.component';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss'],
  imports: [FormsModule, LoadingSpinnerComponent, TarjetaGenericaComponent],
})
export class TarjetasComponent {
  cardService = inject(CardService);

  barraDeBusqueda: string = '';
}
