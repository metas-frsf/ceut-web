import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DeportesComponent implements OnInit {

  listaDeportes: Deporte[] = [
    {
      icono: 'futbol.png',
      nombre: 'Fútbol 5',
      horario: 'Miércoles 15/5 - 13:00 a 16:00',
      equipos: 'El torneo constará de 8 equipos de 7 jugadores (5 + 2 suplentes).',
      reglas: 'Se jugarán 8 partidos de 2 tiempos de 6 minutos cada uno.',
      descripcion: []
    },
    {
      icono: 'basket.png',
      nombre: 'Básquet',
      horario: 'Viernes 17/5 - 16:00 a 17:30',
      equipos: 'El torneo constará de 8 equipos de 3 jugadores (5 + 2 suplentes).',
      reglas: 'Se jugarán 6 partidos de 7 minutos cada uno.',
      descripcion: []
    },
    {
      icono: 'truco.png',
      nombre: 'Truco',
      horario: 'Viernes 17/5 - Desde las 10:00',
      equipos: '',
      reglas: '',
      descripcion: ['Cada equipo contará con dos jugadores']
    },
    {
      icono: 'lol.png',
      nombre: 'League of Legends',
      horario: 'Semana del 13/5 al 17/5 - Horarios a convenir',
      equipos: '',
      reglas: '',
      descripcion: ['League ', 'League ']
    },
    {
      icono: 'cs.png',
      nombre: 'Counter-Strike 1.6',
      horario: 'Viernes 17/5 - Horarios a definir',
      descripcion: ['Counter', 'Counter']
    },
    {
      icono: 'volleyball.png',
      nombre: 'Volley',
      horario: 'Miércoles 15/5 - 16:00 a 17:30',
      descripcion: ['Se jugarán 6 partidos de 2 tiempos de 5 minutos cada uno.', 'El torneo constará de 6 equipos de 6 jugadores.']
    },
    {
      icono: 'handball.png',
      nombre: 'Handball',
      horario: 'Viernes',
      descripcion: ['Handball', 'Handball']
    },
    {
      icono: 'ping-pong.png',
      nombre: 'Ping Pong',
      horario: 'Viernes',
      descripcion: ['Ping ', 'Ping ']
    },
    {
      icono: 'ajedrez.png',
      nombre: 'Ajedrez',
      horario: 'Viernes',
      descripcion: ['Ajedrez', 'Ajedrez']
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

export class Deporte {
  icono: string;
  nombre: string;
  horario: string;
  equipos?: string;
  reglas?: string;
  descripcion: string[];
}
