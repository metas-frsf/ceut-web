import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Card} from '@app/_models/card';
import { environment } from '../../environments/environment';

// TODO: Hacer globales los headers
const headers = new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded'});

@Injectable()
export class CardService {

  private fixedCardListIds = [3, 2]; // Cartas fijadas en la parte superior

  constructor(public http: HttpClient) {
  }

  /**
   * Obtiene todas las tarjetas desde el servidor y las devuelve para su procesamiento
   */
  getAll() {
    return this.http.get<Card[]>(`${environment.apiUrl}/cards/getAll`);
  }

  getById(id: number) {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.http.get<Card>(`${environment.apiUrl}/cards/getById`, {headers: headers, params: params});
  }

  /**
   * Obtiene todas las tarjetas no fijadas, para mostrar en el cuerpo principal de la página
   */
  getAssortedCardList(cardList: Card[]) {
    return cardList.slice(0).filter(Card => this.fixedCardListIds.indexOf(Card.id) === -1);
  }

  /**
   * Obtiene las tarjetas fijadas para ubicar en la parte superior de la vista principal
   */
  getFixedCards(cardList: Card[]) {
    return cardList.filter(Card => this.fixedCardListIds.indexOf(Card.id) !== -1);
  }

  /**
   * Obtener los IDs de las tarjetas fijadas
   */
  getFixedCardListIds(): number[] {
    return this.fixedCardListIds;
  }

  filtrarTarjetas(cardList: Card[], textToSearch: string) {
    const textoToSearchLowerCase = textToSearch.toLowerCase();

    const filterByTitle = cardList.filter(Card => Card.title.toLowerCase().indexOf(textoToSearchLowerCase) !== -1);

    const filterByContent = cardList.filter(Card => Card.content.filter(ContentLine => {
      const inTitle = ContentLine.title.toLowerCase().indexOf(textoToSearchLowerCase) !== -1;
      const inDescription = ContentLine.description.toLowerCase().indexOf(textoToSearchLowerCase) !== -1;
      return inTitle || inDescription;
    }).length);

    const filterByFooter = cardList.filter(Card => {
      if (Card.footer && Card.footer.content) {
        return Card.footer.content.toLowerCase().indexOf(textoToSearchLowerCase) !== -1;
      }
    });

    // Lista sin duplicados
    return this.removeDuplicates(filterByTitle.concat(filterByContent).concat(filterByFooter), 'id');
  }

  removeDuplicates(arrayWithDuplicates, propertyToCheck) {
    return arrayWithDuplicates.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[propertyToCheck]).indexOf(obj[propertyToCheck]) === pos;
    });
  }

}
