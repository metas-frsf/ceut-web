import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GlobalService } from '@app/_services/global.service';
import { Periodo } from '@app/electivas/electivas.model';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

const apiPrefix: string = 'api/courses';

@Injectable({
  providedIn: 'root',
})
export class ElectivasService {
  private http = inject(HttpClient);
  private global = inject(GlobalService);

  getByCarrera(carrera: string) {
    const headers = this.global.httpHeaders;
    const params = new HttpParams().append('carrera', carrera);

    return this.http.get<any[]>(`${apiPrefix}/elective`, {
      headers,
      params,
    });
  }

  getFrasesMotivacionales(): string[] {
    return [
      'La educación es un acto de amor, por tanto, un acto de valor. - Paulo Freire',
      'La imaginación es la facultad del descubrimiento, preeminentemente. Es lo que penetra en los mundos nunca vistos a nuestro alrededor, los mundos de la ciencia. - Ada Lovelace',
      'Educar es impregnar de sentido todo lo que hacemos en cada momento. - Paulo Freire',
      'Lo más importante que podemos legar a las nuevas generaciones es la mejor educación para prepararlos para el futuro y lo que va a venir. - Manuel Sadosky',
      'Sólo podemos ver poco del futuro, pero lo suficiente para darnos cuenta de que hay mucho que hacer. - Alan Turing',
      'Un ser humano debe convertir la información en inteligencia o en conocimiento. Aquí hemos tendido a olvidar que ningún ordenador formulará nunca una pregunta nueva. - Grace Hopper',
      'Nunca debes tener miedo de lo que estás haciendo cuando es correcto. - Marie Curie',
      'El peor enemigo del conocimiento no es la ignorancia, es la ilusión del conocimiento. - Stephen Hawking',
      'En algún lugar algo increíble está esperando ser descubierto. - Carl Sagan',
    ];
  }

  /**
   * Devuelve el filtro inicial para el cuatrimestre o la modalidad anual de las electivas
   * En caso de la fecha actual encontrarse en el primer semestre (antes del 1ro de julio del año), filtra las electivas anuales y del primer cuatrimestre
   * En caso de que la fecha actual sea del segundo semestre, filtra las electivas del segundo cuatrimestre
   */
  inicializarFiltroCuatrimestre(): Periodo {
    const fechaDeHoy: Dayjs = dayjs();

    // fechaBisagra representa el primero de julio del año actual, pivote para saber si estamos en el primer o segundo cuatrimestre
    const fechaBisagra: Dayjs = dayjs(`07/01/${fechaDeHoy.year()}`);
    const estamosEnPrimerSemestre: boolean = fechaDeHoy.isBefore(fechaBisagra);

    const filtroInicial: Periodo = {
      anual: false,
      primero: false,
      segundo: false,
    };

    if (estamosEnPrimerSemestre) {
      filtroInicial.anual = true;
      filtroInicial.primero = true;
    } else {
      filtroInicial.segundo = true;
    }

    return filtroInicial;
  }
}
