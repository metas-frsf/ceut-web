import { Card } from "@app/_models/card";
import { environment } from "@environments/environment";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

// TODO: Hacer globales los headers
const headers = new HttpHeaders({
  "Content-Type": "application/x-www-form-urlencoded"
});

@Injectable()
export class CardService {
  get fixedCards(): any[] {
    return this._fixedCards;
  }

  set fixedCards(value: any[]) {
    this._fixedCards = value;
  }
  get assortedCards(): any[] {
    return this._assortedCards;
  }

  set assortedCards(value: any[]) {
    this._assortedCards = value;
  }

  get cards(): any[] {
    return this._cards;
  }

  set cards(value: any[]) {
    this._cards = value;
  }

  private fixedCardListIds = [2, 3, 18]; // Cartas fijadas en la parte superior

  private _cards = [];
  private _fixedCards = [];
  private _assortedCards = [];

  constructor(public http: HttpClient) {
    this.getAll();
  }

  /**
   * Obtiene todas las tarjetas desde el servidor y las devuelve para su procesamiento
   */
  async getAll() {
    const cardDatabase = await this.http
      .get<Card[]>(`${environment.apiUrl}/cards/getAll`)
      .toPromise();
    this.cards = this.toArray(cardDatabase);
    this.fixedCards = this.getFixedCards(this.cards);
    this.assortedCards = this.getAssortedCardList(this.cards);
  }

  toArray(cards: Object) {
    let cardArray = [];
    for (const card in cards) {
      if (cards.hasOwnProperty(card)) {
        cardArray = cardArray.concat(cards[card]);
      }
    }
    return cardArray;
  }

  //FIXME: Remove this method after finishing migration
  migrate() {
    return this.http.get<Card[]>(`${environment.apiUrl}/cards/migrate`);
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
  getAssortedCardList(cards: Card[]) {
    return cards
      .slice(0)
      .filter(card => this.fixedCardListIds.indexOf(card.id) === -1);
  }

  /**
   * Obtiene las tarjetas fijadas para ubicar en la parte superior de la vista principal
   */
  getFixedCards(cards: Card[]) {
    return cards.filter(card => this.fixedCardListIds.indexOf(card.id) !== -1);
  }

  /**
   * Obtener los IDs de las tarjetas fijadas
   */
  getFixedCardListIds(): number[] {
    return this.fixedCardListIds;
  }

  filter(cards: Card[], textToSearch: string) {
    const textoToSearchLowerCase = textToSearch.toLowerCase();

    const filterByTitle = cards.filter(
      card => card.title.toLowerCase().indexOf(textoToSearchLowerCase) !== -1
    );

    const filterByContent = cards.filter(
      card =>
        card.content &&
        card.content.filter(ContentLine => {
          const inTitle =
            ContentLine.title &&
            ContentLine.title.toLowerCase().indexOf(textoToSearchLowerCase) !==
              -1;

          const inDescription =
            ContentLine.description &&
            ContentLine.description
              .toLowerCase()
              .indexOf(textoToSearchLowerCase) !== -1;

          return inTitle || inDescription;
        }).length
    );

    const filterByFooter = cards.filter(card => {
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

  /**
   * Obtiene una lista de tarjetas filtrada acorde a la palabra dada como parámetro, buscando
   * en el título y el contenido de cada tarjeta a la hora de filtrar
   * @param textToSearch substring del texto que se desea buscar en títulos o contenido de tarjetas
   */
  applyFilter(textToSearch: string) {
    const filteredList = this.filter(this.cards, textToSearch);

    this.assortedCards = filteredList.filter(
      card => !this.getFixedCardListIds().includes(card.id)
    );

    this.fixedCards = filteredList.filter(card =>
      this.getFixedCardListIds().includes(card.id)
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
