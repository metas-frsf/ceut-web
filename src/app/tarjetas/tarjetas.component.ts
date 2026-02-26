import { CardService } from '@app/_services/card.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss'],
})
export class TarjetasComponent {
  barraDeBusqueda: string = '';

  constructor(public cardService: CardService) {}
}
