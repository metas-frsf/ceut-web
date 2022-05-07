import { Card } from "@app/_models/card";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

// TODO: Hacer globales los headers
const headers = new HttpHeaders({
  "Content-Type": "application/x-www-form-urlencoded",
});

const apiPrefix: string = "api/cards";

@Injectable()
export class CardService {
  get sortedCards(): any[] {
    return this._sortedCards;
  }

  set sortedCards(value: any[]) {
    this._sortedCards = value;
  }

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

  get rawCards(): Object {
    return this._rawCards;
  }

  set rawCards(value: Object) {
    this._rawCards = value;
  }

  private fixedCardListIds = [31, 3, 4]; // Cartas fijadas en la parte superior // TODO: #62 - Migrar a Sanity

  private _rawCards: Object = {};
  private _sortedCards = [];
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
      .get<Card[]>(`${apiPrefix}/active`)
      .toPromise();

    this.rawCards = cardDatabase;
    this.sortedCards = [].concat(cardDatabase).sort(sortByTitleAsc);
    this.fixedCards = this.getFixedCards(cardDatabase);
    this.assortedCards = this.getAssortedCardList(cardDatabase);
  }

  /** Envía una tarjeta al servidor para actualizar sus datos
   * @param card - Tarjeta a actualizar
   */
  async update(card: Card) {
    const result = await this.http
      .put<Card>(`${apiPrefix}/update`, card)
      .toPromise();
  }

  public getById(id: number): Observable<Card> {
    const params = new HttpParams().set("id", id.toString());
    return this.http.get<Card>(`${apiPrefix}/getById`, {
      headers: headers,
      params: params,
    });
  }

  /**
   * Obtiene todas las tarjetas no fijadas, para mostrar en el cuerpo principal de la página
   */
  private getAssortedCardList(cards: Card[]) {
    return cards
      .slice(0)
      .filter((card) => this.fixedCardListIds.indexOf(card.id) === -1);
  }

  /**
   * Obtiene las tarjetas fijadas para ubicar en la parte superior de la vista principal
   */
  private getFixedCards(cards: Card[]) {
    return cards.filter(
      (card) => this.fixedCardListIds.indexOf(card.id) !== -1
    );
  }

  /**
   * Obtener los IDs de las tarjetas fijadas
   */
  private getFixedCardListIds(): number[] {
    return this.fixedCardListIds;
  }

  private filter(cards: Card[], textToSearch: string) {
    const textoToSearchLowerCase = textToSearch.toLowerCase();

    const filterByTitle = cards.filter(
      (card) =>
        card.title &&
        card.title.toLowerCase().indexOf(textoToSearchLowerCase) !== -1
    );

    const filterByContent = cards.filter(
      (card) =>
        card.content &&
        card.content.filter((ContentLine) => {
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

    const filterByFooter = cards.filter((card) => {
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
    const filteredList = this.filter(toArray(this.rawCards), textToSearch);

    this.sortedCards = [].concat(filteredList).sort(sortByTitleAsc);

    this.assortedCards = filteredList.filter(
      (card) => !this.getFixedCardListIds().includes(card.id)
    );

    this.fixedCards = filteredList.filter((card) =>
      this.getFixedCardListIds().includes(card.id)
    );
  }

  private removeDuplicates(arrayWithDuplicates, propertyToCheck) {
    return arrayWithDuplicates.filter((obj, pos, arr) => {
      return (
        arr

          .map((mapObj) => mapObj[propertyToCheck])
          .indexOf(obj[propertyToCheck]) === pos
      );
    });
  }
}

function toArray(cards: Object): Card[] {
  let cardArray = [];
  for (const card in cards) {
    if (cards.hasOwnProperty(card)) {
      cards[card].key = card;
      cardArray = cardArray.concat(cards[card]);
    }
  }
  return cardArray;
}

function sortByTitleAsc(a: Card, b: Card): number {
  if (a.title > b.title) {
    return 1;
  } else if (a.title < b.title) {
    return -1;
  } else {
    return 0;
  }
}
