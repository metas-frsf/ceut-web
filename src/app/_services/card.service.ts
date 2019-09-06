import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Card } from "@app/_models/card";
import { environment } from "../../environments/environment";

// TODO: Hacer globales los headers
const headers = new HttpHeaders({
  "Content-Type": "application/x-www-form-urlencoded"
});

@Injectable()
export class CardService {
  private fixedCardListIds = [35, 3, 32]; // Cartas fijadas en la parte superior

  constructor(public http: HttpClient) {}

  /**
   * Obtiene todas las tarjetas desde el servidor y las devuelve para su procesamiento
   */
  getAll() {
    return this.http.get<Card[]>(`${environment.apiUrl}/cards/getAll`);
  }

  getById(id: number) {
    const params = new HttpParams().set("id", id.toString());
    return this.http.get<Card>(`${environment.apiUrl}/cards/getById`, {
      headers: headers,
      params: params
    });
  }

  /**
   * Obtiene todas las tarjetas no fijadas, para mostrar en el cuerpo principal de la página
   */
  getAssortedCardList(cardList: Card[]) {
    return cardList
      .slice(0)
      .filter(card => this.fixedCardListIds.indexOf(card.id) === -1);
  }

  /**
   * Obtiene las tarjetas fijadas para ubicar en la parte superior de la vista principal
   */
  getFixedCards(cardList: Card[]) {
    return cardList.filter(
      card => this.fixedCardListIds.indexOf(card.id) !== -1
    );
  }

  /**
   * Obtener los IDs de las tarjetas fijadas
   */
  getFixedCardListIds(): number[] {
    return this.fixedCardListIds;
  }

  filtrarTarjetas(cardList: Card[], textToSearch: string) {
    const textoToSearchLowerCase = textToSearch.toLowerCase();

    const filterByTitle = cardList.filter(
      card => card.title.toLowerCase().indexOf(textoToSearchLowerCase) !== -1
    );

    const filterByContent = cardList.filter(
      card =>
        card.content.filter(ContentLine => {
          const inTitle =
            ContentLine.title.toLowerCase().indexOf(textoToSearchLowerCase) !==
            -1;
          const inDescription =
            ContentLine.description
              .toLowerCase()
              .indexOf(textoToSearchLowerCase) !== -1;
          return inTitle || inDescription;
        }).length
    );

    const filterByFooter = cardList.filter(card => {
      if (card.footer && card.footer.content) {
        return (
          card.footer.content.toLowerCase().indexOf(textoToSearchLowerCase) !==
          -1
        );
      }
    });

    // Lista sin duplicados
    return this.removeDuplicates(
      filterByTitle.concat(filterByContent).concat(filterByFooter),
      "id"
    );
  }

  removeDuplicates(arrayWithDuplicates, propertyToCheck) {
    return arrayWithDuplicates.filter((obj, pos, arr) => {
      return (
        arr
          .map(mapObj => mapObj[propertyToCheck])
          .indexOf(obj[propertyToCheck]) === pos
      );
    });
  }
}
