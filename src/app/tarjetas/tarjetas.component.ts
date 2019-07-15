import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { CardService } from "@app/_services/card.service";
import { Card } from "@app/_models/card";
import { GlobalService } from "@app/_services/global.service";

@Component({
  selector: "app-tarjetas",
  templateUrl: "./tarjetas.component.html",
  styleUrls: ["./tarjetas.component.scss"]
})
export class TarjetasComponent implements OnInit {
  listaTarjetas: Card[] = [];
  listaTarjetasFijas: Card[] = [];
  tarjetasMoviles: Card[] = [];

  barraDeBusqueda: string = "";

  constructor(
    private cardService: CardService,
    private globalService: GlobalService
  ) {}

  ngOnInit() {
    this.getInformacionTarjetas();
  }

  /**
   * Obtiene toda la información de las tarjetas desde el servidor
   */
  getInformacionTarjetas() {
    // const observableTarjetas = this.cardService.getCardsFromJson(); // Observable de cards desde fuente externa (JSON)
    const observableTarjetas = this.cardService.getAll(); // Observable de cards desde servidor (JSON)
    const suscripcionTarjetas = observableTarjetas.subscribe(
      // Suscripción al observable
      result => {
        this.listaTarjetas = result;
      },
      error => {
        console.log(<any>error);
        suscripcionTarjetas.unsubscribe();
      },
      () => {
        this.listaTarjetas.sort(this.globalService.shuffleOrder);

        //Obtenemos las tarjetas del cuerpo y las fijadas en el header, si existen
        this.tarjetasMoviles = this.cardService.getAssortedCardList(
          this.listaTarjetas
        );
        this.listaTarjetasFijas = this.cardService.getFixedCards(
          this.listaTarjetas
        );

        suscripcionTarjetas.unsubscribe();
      }
    );
  }

  /**
   * Obtiene una lista de tarjetas filtrada acorde a la palabra dada como parámetro, buscando
   * en el título y el contenido de cada tarjeta a la hora de filtrar
   * @param textToSearch substring del texto que se desea buscar en títulos o contenido de tarjetas
   */
  filtrarTarjetas(textToSearch: string) {
    const listaFiltrada = this.cardService.filtrarTarjetas(
      this.listaTarjetas,
      textToSearch
    );

    this.tarjetasMoviles = listaFiltrada.filter(
      card => !this.cardService.getFixedCardListIds().includes(card.id)
    );

    this.listaTarjetasFijas = listaFiltrada.filter(card =>
      this.cardService.getFixedCardListIds().includes(card.id)
    );
  }
}
