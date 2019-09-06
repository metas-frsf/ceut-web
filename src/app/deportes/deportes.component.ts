import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-deportes",
  templateUrl: "./deportes.component.html",
  styleUrls: ["./deportes.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class DeportesComponent implements OnInit {
  listaDeportes: Deporte[] = [
    {
      icono: "futbol.png",
      nombre: "Futsal 5",
      horario: "Jueves 19/9 desde las 13:00 y Viernes 20/9 desde las 13:30",
      equipos:
        "El torneo constará de 8 equipos de 7 jugadores (5 + 2 suplentes).",
      premios: "",
      reglas: "Se jugarán 8 partidos de 2 tiempos de 6 minutos cada uno.",
      descripcion: [
        "El día viernes se jugarán las semifinales y la final con los equipos que hayan accedido a estas fases."
      ]
    },
    {
      icono: "volleyball.png",
      nombre: "Volley",
      horario: "Viernes 20/9 - Desde las 15:30",
      equipos: "Los equipos estarán compuestos por 6 personas.",
      premios: "",
      reglas:
        "Habrá 2 grupos de 3 equipos cada uno en el que competirán todos contra todos, pasando a la final el mejor equipo de cada grupo, jugándose el tercer puesto entre los equipos que queden en segunda posición en cada grupo. El día viernes se jugarán la final y el tercer puesto. Los partidos serán de dos tiempos de 5 minutos cada uno",
      descripcion: [""]
    },
    {
      icono: "handball.png",
      nombre: "Handball",
      horario: "Viernes 20/9 - Desde las 9:00",
      equipos: "Los equipos estarán compuestos por 7 personas.",
      premios: "",
      reglas:
        "Habrá 2 grupos de 3 equipos cada uno en el que competirán todos contra todos, pasando a la final el mejor equipo de cada grupo, jugándose el tercer puesto entre los equipos que quedaran en segunda posición en cada grupo. Los partidos serán de dos tiempos de 5 minutos cada uno",
      descripcion: [""]
    },
    {
      icono: "basket.png",
      nombre: "Básquet",
      horario: "Viernes 20/9 - Desde las 11:30",
      equipos:
        "El torneo constará de 8 equipos de 3 jugadores (5 + 2 suplentes).",
      premios: "",
      reglas: "Se jugarán 6 partidos de 7 minutos cada uno.",
      descripcion: []
    },
    {
      icono: "ajedrez.png",
      nombre: "Ajedrez",
      horario: "Viernes 20/9 - Desde las 11:00",
      equipos: "Cada estudiante competirá individualmente.",
      premios: "",
      reglas: "El formato del torneo será de eliminación directa.",
      descripcion: [""]
    },
    {
      icono: "truco.png",
      nombre: "Truco",
      horario: "Viernes 20/9 - Desde las 11:00",
      equipos:
        "Habrá 16 equipos y Los equipos estarán compuestos por 2 personas.",
      premios: "",
      reglas:
        "Habrá 4 grupos de 4 equipos cada uno que competirán en formato todos contra todos, pasando a cuartos de final de fase eliminatoria los 2 mejores de cada grupo.",
      descripcion: [""]
    },
    {
      icono: "ping-pong.png",
      nombre: "Ping Pong",
      horario: "Viernes 20/9 - Desde las 11:00",
      equipos:
        "Los equipos estarán compuestos por 2 personas y se jugará en modalidad eliminatoria.",
      premios: "",
      reglas:
        "Habrá 4 grupos de 4 equipos cada uno que competirán en formato todos contra todos, pasando a cuartos de final los 2 mejores de cada grupo",
      descripcion: [""]
    },
    {
      icono: "lol.png",
      nombre: "League of Legends",
      horario: "Semana del 14/9 al 29/9 - Fixture con partidas desde las 20:00",
      equipos:
        "Cada equipo estará compuesto por 5 personas, pudiendo ser a los sumo 3 de cada equipo externos a la facultad, pudiendo incluirse un suplente por equipo. Se jugarán las partidas en el mapa Grieta del Invocador. Se jugarán de forma remota todas las partidas, tanto las de fases de grupo como las eliminatorias.",
      premios: "",
      reglas:
        "Se jugará en dos zonas de 4 equipos cada una. Cada equipo jugará contra los 3 restantes de su zona",
      descripcion: [
        "Todos los partidos excepto la final se disputarán fuera de la facultad, en la semana desde el 14/9 al 29/9, comenzando desde las 20:00.",
        "Podés consultar las reglas de torneo y el fixture en el link adjunto más abajo."
      ],
      link:
        "https://battlefy.com/ceut-frsf/torneo-5vs5-jeut-2019-2do-cuatrimestre/5d6e948697939e35bb9eb01e/info?infoTab=rules"
    },
    // {
    //   icono: 'cs.png',
    //   nombre: 'Counter-Strike 1.6',
    //   horario: 'Viernes 17/5 - Comenzando desde las 10:00',
    //   equipos:
    //     'Se jugará en equipos de 3 personas cada uno, con PCs de la facultad o bien con notebooks propias de los participantes.',
    //   premios:
    //     '1er Puesto: Llaveros, 4 packs de cervezas y 3 pases premium cortesía de Nostalgia Gamers. 2do puesto: Llaveros y 2 packs de cervezas y 3 pases premium cortesía de Nostalgia Gamers. 3er puesto: Llaveros y 1 pack de cervezas.',
    //   reglas:
    //     'El torneo constará de 8 equipos con dos zonas de 4 cada una. En cada zona los equipos jugarán entre sí, clasificando los dos mejores a la semifinal.',
    //   descripcion: [
    //     'Se jugarán al mejor de 3 partidas de 5, en cinco mapas ya predefinidos de modalidad deathmatch. Cada partida constará de 9 rondas de un minuto y medio, siendo ganador el equipo que gane 5 rondas de 9',
    //     'Mapas del torneo: fy_iceworld2k, de_dust2_largo, aim_map, awp_map, fy_pool_day, fy_snow y mini_dust_pro.'
    //   ]
    // },
    {
      icono: "jigsaw.png",
      nombre: "Actividades libres",
      horario: "Jueves 19/9 y Viernes 20/9, desde las 11:00",
      equipos:
        "Dependiendo de la actividad, se podrá jugar individualmente o en equipos",
      premios: "",
      reglas: "",
      descripcion: [
        "Durante la JEUT, se podrán realizar diversas actividades libres, consistentes en juegos variados. Entre las actividades disponibles, estarán el Delegado, el Twister, Carreras de Bolsas, Fútbol-Tenis, Metegol, Carrera de Cascos, Tesoro Escondido, Pictionary, Jack, Uno, Chancho, Apilar Vasos y ¡un Jenga Gigante!"
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
  link?: string;
}
