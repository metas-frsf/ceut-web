import { Component, HostListener, Inject, OnInit } from "@angular/core";
import { ElectivasService } from "@app/_services/electivas.service";
import { DOCUMENT } from "@angular/common";
import { GlobalService } from "@app/_services/global.service";
import { Moment } from "moment";
import * as moment from "moment";

@Component({
  selector: "app-electivas",
  templateUrl: "./electivas.component.html",
  styleUrls: ["./electivas.component.scss"]
})
export class ElectivasComponent implements OnInit {
  anchoDelDisplay: any;

  filtroCuatrimestre: Periodo = this.inicializarFiltroCuatrimestre();
  electivas = [];
  electivasFiltradas = [];
  carreraElegida: Carrera;
  carreras: Carrera[] = [
    {
      id: "basicas",
      iconClass: "fa-book",
      nombreCompleto: "Materias Básicas",
      nombreCorto: "Mat. Básicas",
      horasTotales: 0,
      airTable: "Básicas",
      contacto: {
        instagram: "metas.frsf",
        messenger: "metas.frsf",
        whatsapp: ""
      }
    },
    {
      id: "civil",
      iconClass: "fa-building",
      nombreCompleto: "Ingeniería Civil",
      nombreCorto: "Ing. Civil",
      horasTotales: 14,
      airTable: "Civil",
      contacto: {
        instagram: "consejerosdecivil",
        messenger: "consejeros.civil",
        whatsapp: ""
      }
    },
    {
      id: "electrica",
      iconClass: "fa-bolt",
      nombreCompleto: "Ingeniería Eléctrica",
      nombreCorto: "Ing. Eléctrica",
      horasTotales: 20,
      airTable: "Eléctrica",
      contacto: {
        instagram: "consejeroselectrica",
        messenger: "consejeroselectrica.metas",
        whatsapp: ""
      }
    },
    {
      id: "industrial",
      iconClass: "fa-industry",
      nombreCompleto: "Ingeniería Industrial",
      nombreCorto: "Ing. Industrial",
      horasTotales: 10,
      airTable: "Industrial",
      contacto: {
        instagram: "industrialconsejeros",
        messenger: "consejeroselectrica.metas",
        whatsapp: ""
      }
    },
    {
      id: "mecanica",
      iconClass: "fa-cogs",
      nombreCompleto: "Ingeniería Mecánica",
      nombreCorto: "Ing. Mecánica",
      horasTotales: 10,
      airTable: "Mecánica",
      contacto: {
        instagram: "mecanicametas",
        messenger: "metas.mecanica.frsf",
        whatsapp: ""
      }
    },
    {
      id: "sistemas",
      iconClass: "fa-laptop",
      nombreCompleto: "Ingeniería en Sistemas",
      nombreCorto: "Ing. en Sistemas",
      horasTotales: 44,
      airTable: "Sistemas",
      contacto: {
        instagram: "ps_metas.frsf",
        messenger: "psutnfrsf",
        whatsapp: ""
      }
    }
  ];

  frases = [
    "La educación es un acto de amor, por tanto, un acto de valor. - Paulo Freire",
    "La imaginación es la facultad del descubrimiento, preeminentemente. Es lo que penetra en los mundos nunca vistos a nuestro alrededor, los mundos de la ciencia. - Ada Lovelace",
    "Educar es impregnar de sentido todo lo que hacemos en cada momento. - Paulo Freire",
    "Lo más importante que podemos legar a las nuevas generaciones es la mejor educación para prepararlos para el futuro y lo que va a venir. - Manuel Sadosky",
    "Sólo podemos ver poco del futuro, pero lo suficiente para darnos cuenta de que hay mucho que hacer. - Alan Turing",
    "Un ser humano debe convertir la información en inteligencia o en conocimiento. Aquí hemos tendido a olvidar que ningún ordenador formulará nunca una pregunta nueva. - Grace Hopper",
    "Nunca debes tener miedo de lo que estás haciendo cuando es correcto. - Marie Curie",
    "El peor enemigo del conocimiento no es la ignorancia, es la ilusión del conocimiento. - Stephen Hawking",
    "En algún lugar algo increíble está esperando ser descubierto. - Carl Sagan"
  ];

  contadorCursadas: number = 0;
  contadorAprobadas: number = 0;

  ayudaVisible: boolean = true;
  calculadoraVisible: boolean = true;
  bienvenidaVisible: boolean = true;
  recomendacionPantalla: boolean = true;

  fraseSeleccionada: string = ""; // Frase motivacional mostrada en displays grandes (mayores a 992px)

  constructor(
    @Inject(DOCUMENT) private document: any,
    private electivasService: ElectivasService,
    private globalService: GlobalService
  ) {
    this.seleccionarCarrera("basicas"); // Inicializamos cargando las materias básicas, comunes a las carreras
  }

  ngOnInit() {
    this.anchoDelDisplay = window.innerWidth;
    if (this.anchoDelDisplay < 768) {
      this.ayudaVisible = false;
      this.calculadoraVisible = false;
      this.bienvenidaVisible = true;
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.anchoDelDisplay = window.innerWidth;

    if (window.innerWidth >= 768) {
      this.ayudaVisible = true;
      this.calculadoraVisible = true;
      this.bienvenidaVisible = true;
    } else {
      this.ayudaVisible = false;
      this.calculadoraVisible = false;
      this.bienvenidaVisible = true;
    }
  }

  /**
   * Devuelve el filtro inicial para el cuatrimestre o la modalidad anual de las electivas
   * En caso de la fecha actual encontrarse en el primer semestre (antes del 1ro de julio del año), filtra las electivas anuales y del primer cuatrimestre
   * En caso de que la fecha actual sea del segundo semestre, filtra las electivas del segundo cuatrimestre
   */
  inicializarFiltroCuatrimestre(): Periodo {
    const fechaDeHoy: Moment = moment();
    // fechaBisagra representa el primero de julio del año actual, pivote para saber si estamos en el primer o segundo cuatrimestre
    const fechaBisagra: Moment = moment(`07/01/${fechaDeHoy.year()}`);
    const estamosEnPrimerSemestre: boolean = fechaDeHoy.isSameOrBefore(
      fechaBisagra
    );
    const filtroInicial: Periodo = {
      anual: false,
      primero: false,
      segundo: false
    };

    if (estamosEnPrimerSemestre) {
      filtroInicial.anual = true;
      filtroInicial.primero = true;
    } else {
      filtroInicial.segundo = true;
    }

    return filtroInicial;
  }

  seleccionarCarrera(idCarrera: string) {
    this.contadorAprobadas = 0;
    this.contadorCursadas = 0;
    this.carreraElegida = this.carreras
      .filter(carrera => carrera.id === idCarrera)
      .pop();
    this.electivas = [];
    this.electivasFiltradas = [];
    this.electivasService.getByCarrera(this.carreraElegida.airTable).subscribe(
      response => {
        this.electivas = response;
        this.filtrarPorCuatrimestre(this.filtroCuatrimestre);
      },
      error => console.error(error)
    );
    this.fraseSeleccionada = this.frases
      .sort(this.globalService.shuffleOrder)
      .pop();
  }

  estilosDeCarrera(idCarrera: string) {
    return "bg-" + idCarrera;
  }

  estilosDeElectiva(idCarrera: string, electiva: Electiva) {
    if (!electiva.cursada && !electiva.aprobada) {
      return "bg-" + idCarrera;
    }
    if (electiva.cursada && !electiva.aprobada) {
      return "bg-primary text-white";
    }
    if (electiva.cursada && electiva.aprobada) {
      return "bg-success text-white";
    }
  }

  navegarInstagram() {
    window.open(
      `https://instagram.com/${this.carreraElegida.contacto.instagram}`,
      "_blank"
    );
  }

  navegarMessenger() {
    window.open(
      `https://m.me/${this.carreraElegida.contacto.messenger}`,
      "_blank"
    );
  }

  navegarWhatsapp() {
    window.open(
      `"https://api.whatsapp.com/send?phone="${this.carreraElegida.contacto.whatsapp}`,
      "_blank"
    );
  }

  limpiarEstado(electiva: Electiva) {
    electiva.cursada = false;
    electiva.aprobada = false;
    this.calcularCursadas();
    this.calcularAprobadas();
  }

  marcarCursada(electiva: Electiva) {
    electiva.cursada = true;
    electiva.aprobada = false;
    this.calcularCursadas();
    this.calcularAprobadas();
  }

  marcarAprobada(electiva: Electiva) {
    electiva.cursada = true;
    electiva.aprobada = true;
    this.calcularCursadas();
    this.calcularAprobadas();
  }

  calcularCursadas() {
    const horasElectivasCursadas = this.electivas
      .filter(electiva => electiva.cursada)
      .map(electiva => electiva.creditos);
    this.contadorCursadas = horasElectivasCursadas.length
      ? horasElectivasCursadas.reduce((Suma, Horas) => Suma + Horas)
      : 0;
  }

  calcularAprobadas() {
    const horasElectivasAprobadas = this.electivas
      .filter(electiva => electiva.aprobada)
      .map(electiva => electiva.creditos);
    this.contadorAprobadas = horasElectivasAprobadas.length
      ? horasElectivasAprobadas.reduce((Suma, Horas) => Suma + Horas)
      : 0;
  }

  filtrarPorCuatrimestre(filtro: Periodo) {
    this.electivasFiltradas = [];

    if (filtro.primero) {
      this.electivasFiltradas = this.electivasFiltradas.concat(
        this.electivas.filter(card => card.cuatrimestre === "1er Cuatrimestre")
      );
    }
    if (filtro.segundo) {
      this.electivasFiltradas = this.electivasFiltradas.concat(
        this.electivas.filter(card => card.cuatrimestre === "2do Cuatrimestre")
      );
    }
    if (filtro.anual) {
      this.electivasFiltradas = this.electivasFiltradas.concat(
        this.electivas.filter(card => card.cuatrimestre === "Anual")
      );
    }

    // Ordeno alfabéticamente según el nombre de la electiva
    this.electivasFiltradas.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }

  cambiarVista(electiva: Electiva) {
    electiva.vistaCompleta = !electiva.vistaCompleta;
  }

  toggleCalculadora() {
    this.calculadoraVisible = !this.calculadoraVisible;
    this.ayudaVisible = false;

    if (this.calculadoraVisible) {
      this.bienvenidaVisible = false;
    } else {
      this.bienvenidaVisible = true;
    }
  }

  toggleAyuda() {
    this.ayudaVisible = !this.ayudaVisible;
    this.calculadoraVisible = false;

    if (this.ayudaVisible) {
      this.bienvenidaVisible = false;
    } else {
      this.bienvenidaVisible = true;
    }
  }

  cerrarRecomendacion() {
    this.recomendacionPantalla = false;
  }
}

export class Periodo {
  primero: boolean;
  segundo: boolean;
  anual: boolean;
}

export class Carrera {
  id: string;
  iconClass: string;
  nombreCompleto: string;
  nombreCorto: string;
  horasTotales: number;
  airTable: string;
  contacto?: Contacto;
}

export class Contacto {
  instagram: string;
  messenger: string;
  whatsapp?: string;
}

export class Electiva {
  vistaCompleta: boolean;
  cursada: boolean;
  aprobada: boolean;
  nombre: string;
  nivel: string;
  area: string;
  creditos: number;
  cuatrimestre: string;
  horarios: string[];
  docentes: string[];
  actividades: string;
  tipoDeAprobacion: string;
  cursadasParaCursar: string[];
  aprobadasParaRendir: string[];
  aprobadasParaCursar: string[];
  comentarios: string[];
}
