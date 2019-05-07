import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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
      horario: 'Miércoles 15/5 - 13:00 a 16:00 / Viernes 17/5 - 12:00 a 13:30',
      equipos:
        'El torneo constará de 8 equipos de 7 jugadores (5 + 2 suplentes).',
      premios:
        '1er Puesto: Llaveros y 4 packs de cervezas. 2do puesto: Llaveros y 2 packs de cervezas. 3er puesto: Llaveros y 1 pack de cervezas.',
      reglas: 'Se jugarán 8 partidos de 2 tiempos de 6 minutos cada uno.',
      descripcion: [
        'El día viernes se jugarán las semifinales y la final con los equipos que hayan accedido a estas fases.'
      ]
    },
    {
      icono: 'volleyball.png',
      nombre: 'Volley',
      horario: 'Miércoles 15/5 - 16:00 a 17:30 / Viernes 17/5 - 13:30 a 16:00',
      equipos: 'Los equipos estarán compuestos por 6 personas.',
      premios:
        '1er Puesto: Llaveros y 4 packs de cervezas. 2do puesto: Llaveros y 2 packs de cervezas. 3er puesto: Llaveros y 1 pack de cervezas.',
      reglas:
        'Habrá 2 grupos de 3 equipos cada uno en el que competirán todos contra todos, pasando a la final el mejor equipo de cada grupo, jugándose el tercer puesto entre los equipos que queden en segunda posición en cada grupo. El día viernes se jugarán la final y el tercer puesto. Los partidos serán de dos tiempos de 5 minutos cada uno',
      descripcion: ['']
    },
    {
      icono: 'handball.png',
      nombre: 'Handball',
      horario: 'Viernes 17/5 - 9:30 a 12:00',
      equipos: 'Los equipos estarán compuestos por 7 personas.',
      premios:
        '1er Puesto: Llaveros y 4 packs de cervezas. 2do puesto: Llaveros y 2 packs de cervezas. 3er puesto: Llaveros y 1 pack de cervezas.',
      reglas:
        'Habrá 2 grupos de 3 equipos cada uno en el que competirán todos contra todos, pasando a la final el mejor equipo de cada grupo, jugándose el tercer puesto entre los equipos que quedaran en segunda posición en cada grupo. Los partidos serán de dos tiempos de 5 minutos cada uno',
      descripcion: ['']
    },
    {
      icono: 'basket.png',
      nombre: 'Básquet',
      horario: 'Viernes 17/5 - 16:00 a 17:30',
      equipos:
        'El torneo constará de 8 equipos de 3 jugadores (5 + 2 suplentes).',
      premios:
        '1er Puesto: Llaveros y 4 packs de cervezas. 2do puesto: Llaveros y 2 packs de cervezas. 3er puesto: Llaveros y 1 pack de cervezas.',
      reglas: 'Se jugarán 6 partidos de 7 minutos cada uno.',
      descripcion: []
    },
    {
      icono: 'ajedrez.png',
      nombre: 'Ajedrez',
      horario: 'Viernes 17/5 - 9:30 a 12:00',
      equipos: 'Cada estudiante competirá individualmente.',
      premios:
        '1er Puesto: Llavero y 3 packs de cervezas. 2do puesto: Llavero y 2 packs de cervezas. 3er puesto: Llavero.',
      reglas: 'El formato del torneo será de eliminación directa.',
      descripcion: ['']
    },
    {
      icono: 'truco.png',
      nombre: 'Truco',
      horario: 'Viernes 17/5 - Desde las 10:00',
      equipos: 'Habrá 16 equipos y Los equipos estarán compuestos por 2 personas.',
      premios:
        '1er Puesto: Llaveros y 3 packs de cervezas. 2do puesto: Llaveros y 2 packs de cervezas. 3er puesto: Llaveros.',
      reglas:
        'Habrá 4 grupos de 4 equipos cada uno que competirán en formato todos contra todos, pasando a cuartos de final de fase eliminatoria los 2 mejores de cada grupo.',
      descripcion: ['']
    },
    {
      icono: 'ping-pong.png',
      nombre: 'Ping Pong',
      horario: 'Viernes 17/5 - 11:00 a 16:00',
      equipos: 'Los equipos estarán compuestos por 2 personas y se jugará en modalidad eliminatoria.',
      premios:
        '1er Puesto: Llaveros y 3 packs de cervezas. 2do puesto: Llaveros y 2 packs de cervezas. 3er puesto: Llaveros.',
      reglas:
        'Habrá 4 grupos de 4 equipos cada uno que competirán en formato todos contra todos, pasando a cuartos de final los 2 mejores de cada grupo',
      descripcion: ['']
    },
    {
      icono: 'lol.png',
      nombre: 'League of Legends',
      horario: 'Semana del 14/5 al 17/5 - Fixture con partidas desde las 22:00',
      equipos:
        'Cada equipo estará compuesto por 5 personas, pudiendo ser a los sumo 3 de cada equipo externos a la facultad, Se jugarán las partidas en el mapa Grieta del Invocador. Se jugarán de forma remota todas las partidas, a excepción de la final que se jugará el día viernes 17/5 en horario a convenir por los dos equipos.',
      premios:
        '1er Puesto: Llaveros, 4 packs de cervezas y 2000 RPs. 2do puesto: Llaveros y 2 packs de cervezas y 1000 RPs. 3er puesto: Llaveros y 1 pack de cervezas.',
            reglas:
        'Se jugará en dos zonas de 4 equipos cada una. Cada equipo jugará contra los 3 restantes de su zona',
      descripcion: [
        'Todos los partidos excepto la final se disputarán fuera de la facultad, en la semana desde el 14/5 al 17/5, comenzando desde las 22:00 en un fixture que se adjuntará a la brevedad.'
      ]
    },
    {
      icono: 'cs.png',
      nombre: 'Counter-Strike 1.6',
      horario: 'Viernes 17/5 - Comenzando desde las 10:00',
      equipos:
        'Se jugará en equipos de 3 personas cada uno, con PCs de la facultad o bien con notebooks propias de los participantes.',
      premios:
        '1er Puesto: Llaveros, 4 packs de cervezas y 3 pases premium cortesía de Nostalgia Gamers. 2do puesto: Llaveros y 2 packs de cervezas y 3 pases premium cortesía de Nostalgia Gamers. 3er puesto: Llaveros y 1 pack de cervezas.',
      reglas:
        'El torneo constará de 8 equipos con dos zonas de 4 cada una. En cada zona los equipos jugarán entre sí, clasificando los dos mejores a la semifinal.',
      descripcion: [
        'Se jugarán al mejor de 3 partidas de 5, en cinco mapas ya predefinidos de modalidad deathmatch. Cada partida constará de 9 rondas de un minuto y medio, siendo ganador el equipo que gane 5 rondas de 9',
        'Mapas del torneo: fy_iceworld2k, de_dust2_largo, aim_map, awp_map, fy_pool_day, fy_snow y mini_dust_pro.'
      ]
    },
    {
      icono: 'jigsaw.png',
      nombre: 'Actividades libres',
      horario: 'Miércoles 15/5 y Viernes 17/5, todo el día',
      equipos:
        'Dependiendo de la actividad, se podrá jugar individualmente o en equipos',
      premios:
        '',
      reglas:
        '',
      descripcion: [
        'Durante la JEUT, se podrán realizar diversas actividades libres, consistentes en juegos variados. Entre las actividades disponibles, estarán el Delegado, el Twister, Carreras de Bolsas, Fútbol-Tenis, Metegol, Carrera de Cascos, Tesoro Escondido, Pictionary, Jack, Uno, Chancho, Apilar Vasos y ¡un Jenga Gigante!'
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}
}

export class Deporte {
  icono: string;
  nombre: string;
  horario: string;
  equipos?: string;
  premios: string;
  reglas?: string;
  descripcion: string[];
}
