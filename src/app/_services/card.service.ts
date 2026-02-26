import { Card } from '@app/_models/card';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filterCardsBySearchText, sortCardsByTitleAsc } from '@app/_functions/card.functions';

// TODO: Hacer globales los headers
const headers = new HttpHeaders({
  'Content-Type': 'application/x-www-form-urlencoded',
});

const apiPrefix: string = 'api/cards';

@Injectable()
export class CardService {
  // TODO: Extraer manejo de las tarjetas hacia otro service. Este debería sólo proveer de la funcionalidad para CRUD.
  // TODO: Extraer las tarjetas ordenadas hacia otro service.
  get sortedCards(): any[] {
    return this._sortedCards;
  }

  get fixedCards(): any[] {
    return this._fixedCards;
  }

  get assortedCards(): any[] {
    return this._assortedCards;
  }

  private _rawCards: ICardCollections = { fixed: [], default: [] };
  private _sortedCards = [];
  private _fixedCards = [];
  private _assortedCards = [];
  cargando: boolean = false;

  constructor(public http: HttpClient) {
    this.getAll();
  }

  /**
   * Obtiene todas las tarjetas desde el servidor y las devuelve para su procesamiento
   */
  public getAll() {
    this.cargando = true;
    this.http.get<ICardCollections>(`${apiPrefix}/active`).subscribe(
      (x) => {
        this._rawCards = x;
        this.assignLists(this._rawCards);
        this.cargando = false;
      },
      () => {
        this.cargando = false;
      },
    );
  }

  /** Envía una tarjeta al servidor para actualizar sus datos
   * @param card - Tarjeta a actualizar
   */
  public update(card: Card) {
    return this.http.put<Card>(`${apiPrefix}/update`, card);
  }

  public getById(id: number): Observable<Card> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get<Card>(`${apiPrefix}/getById`, {
      headers: headers,
      params: params,
    });
  }
  /**
   * Obtiene una lista de tarjetas filtrada acorde a la palabra dada como parámetro, buscando
   * en el título y el contenido de cada tarjeta a la hora de filtrar
   * @param textToSearch substring del texto que se desea buscar en títulos o contenido de tarjetas
   */
  public applyFilter(textToSearch: string): void {
    this._sortedCards = [].concat(filterCardsBySearchText(getDefaultCards(this._rawCards), textToSearch));

    this._assortedCards = [].concat(filterCardsBySearchText(getDefaultCards(this._rawCards), textToSearch));

    this._fixedCards = [].concat(filterCardsBySearchText(getFixedCards(this._rawCards), textToSearch));
  }

  private assignLists(cardCollections: ICardCollections) {
    this._sortedCards = [].concat(cardCollections.default).sort(sortCardsByTitleAsc);
    this._fixedCards = getFixedCards(cardCollections);
    this._assortedCards = getDefaultCards(cardCollections);
  }
}

/**
 * Define las distintas colecciones de cards a ser mostradas en las secciones de la vista de la landing page.
 * - Fixed: define las cards que se mostrarán fijas, en un momento determinado, al tope del contenido.
 * - Default: define las cards que se mostrarán, sin orden específico, en el cuerpo de contenido..
 */
export interface ICardCollections {
  fixed: Card[];
  default: Card[];
}

/**
 * Obtiene todas las tarjetas no fijadas, para mostrar en el cuerpo principal de la página
 */
export function getDefaultCards(cards: ICardCollections): Card[] {
  return cards.default;
}

/**
 * Obtiene las tarjetas fijadas para ubicar en la parte superior de la vista principal
 */
export function getFixedCards(cards: ICardCollections): Card[] {
  return cards.fixed;
}
