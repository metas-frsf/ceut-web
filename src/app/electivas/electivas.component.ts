import { Component, HostListener, OnInit, inject } from '@angular/core';
import { ElectivasService } from '@app/_services/electivas.service';
import { GlobalService } from '@app/_services/global.service';
import { Carrera, Electiva, Periodo } from '@app/electivas/electivas.model';
import { CareerService } from '@app/_services/career.service';
import { NgIf, NgClass, NgTemplateOutlet, NgFor } from '@angular/common';
import { LoadingSpinnerComponent } from '../_components/loading-spinner/loading-spinner.component';
import { NgbDropdown, NgbDropdownToggle, NgbDropdownMenu } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ectivas',
  templateUrl: './electivas.component.html',
  styleUrls: ['./electivas.component.scss'],
  imports: [
    NgIf,
    NgClass,
    NgTemplateOutlet,
    LoadingSpinnerComponent,
    NgFor,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
    FormsModule,
  ],
})
export class ElectivasComponent implements OnInit {
  private careerService = inject(CareerService);
  private electivasService = inject(ElectivasService);
  private globalService = inject(GlobalService);

  anchoDelDisplay: any;

  filtroCuatrimestre: Periodo;
  electivas = [];
  electivasFiltradas = [];
  carreraElegida: Carrera;
  carreras: Carrera[] = [];
  frases = [];

  cargando: boolean = false;
  contadorCursadas: number = 0;
  contadorAprobadas: number = 0;

  ayudaVisible: boolean = true;
  calculadoraVisible: boolean = true;
  bienvenidaVisible: boolean = true;
  recomendacionPantalla: boolean = true;

  fraseSeleccionada: string = ''; // Frase motivacional mostrada en displays grandes (mayores a 992px)

  constructor() {
    this.carreras = this.careerService.get();
    this.frases = this.electivasService.getFrasesMotivacionales();
    this.filtroCuatrimestre = this.electivasService.inicializarFiltroCuatrimestre();
    // Inicializamos cargando la carrera de Civil, por default.
    // TODO: Hacer que se guarde en localStorage la última carrera visitada
    this.seleccionarCarrera('civil');
  }

  ngOnInit() {
    this.anchoDelDisplay = window.innerWidth;
    if (this.anchoDelDisplay < 768) {
      this.ayudaVisible = false;
      this.calculadoraVisible = false;
      this.bienvenidaVisible = true;
    }
  }

  @HostListener('window:resize', ['$event'])
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

  seleccionarCarrera(idCarrera: string) {
    this.contadorAprobadas = 0;
    this.contadorCursadas = 0;
    this.carreraElegida = this.carreras.filter((carrera) => carrera.id === idCarrera).pop();
    this.electivas = [];
    this.electivasFiltradas = [];
    this.cargando = true;
    this.electivasService.getByCarrera(this.carreraElegida.carrera).subscribe({
      next: (response) => {
        this.electivas = response;
        this.filtrarPorCuatrimestre(this.filtroCuatrimestre);
        this.cargando = false;
      },
      error: (error) => {
        console.error(error);
        this.cargando = false;
      },
    });
    this.fraseSeleccionada = this.frases.sort(this.globalService.shuffleOrder).pop();
  }

  estilosDeCarrera(idCarrera: string, element?: string) {
    return 'bg-' + idCarrera;
  }

  estilosDeElectiva(idCarrera: string, electiva: Electiva) {
    if (!electiva.cursada && !electiva.aprobada) {
      return 'bg-' + idCarrera;
    }
    if (electiva.cursada && !electiva.aprobada) {
      return 'bg-primary text-white';
    }
    if (electiva.cursada && electiva.aprobada) {
      return 'bg-success text-white';
    }
  }

  navegarInstagram(id?: string) {
    window.open(`https://instagram.com/${this.carreraElegida.contacto.instagram}`, '_blank');
  }

  navegarMessenger(id?: string) {
    window.open(`https://m.me/${this.carreraElegida.contacto.messenger}`, '_blank');
  }

  navegarWhatsapp(numero?: string) {
    window.open(`"https://api.whatsapp.com/send?phone="${this.carreraElegida.contacto.whatsapp}`, '_blank');
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
      .filter((electiva) => electiva.cursada)
      .map((electiva) => electiva.creditos);
    this.contadorCursadas = horasElectivasCursadas.length
      ? horasElectivasCursadas.reduce((Suma, Horas) => Suma + Horas)
      : 0;
  }

  calcularAprobadas() {
    const horasElectivasAprobadas = this.electivas
      .filter((electiva) => electiva.aprobada)
      .map((electiva) => electiva.creditos);
    this.contadorAprobadas = horasElectivasAprobadas.length
      ? horasElectivasAprobadas.reduce((Suma, Horas) => Suma + Horas)
      : 0;
  }

  filtrarPorCuatrimestre(filtro: Periodo) {
    this.electivasFiltradas = [];

    if (filtro.primero) {
      this.electivasFiltradas = this.electivasFiltradas.concat(
        this.electivas.filter((card) => card.cuatrimestre === '1er Cuatrimestre'),
      );
    }
    if (filtro.segundo) {
      this.electivasFiltradas = this.electivasFiltradas.concat(
        this.electivas.filter((card) => card.cuatrimestre === '2do Cuatrimestre'),
      );
    }
    if (filtro.anual) {
      this.electivasFiltradas = this.electivasFiltradas.concat(
        this.electivas.filter((card) => card.cuatrimestre === 'Anual'),
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
    this.bienvenidaVisible = !this.calculadoraVisible;
  }

  toggleAyuda() {
    this.ayudaVisible = !this.ayudaVisible;
    this.calculadoraVisible = false;
    this.bienvenidaVisible = !this.ayudaVisible;
  }

  verVistaPrincipal() {
    this.ayudaVisible = false;
    this.calculadoraVisible = false;
    this.bienvenidaVisible = true;
  }

  cerrarRecomendacion() {
    this.recomendacionPantalla = false;
  }
}
