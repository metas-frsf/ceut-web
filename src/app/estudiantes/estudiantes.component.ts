import {Component, OnInit, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import {MdDialog} from "@angular/material";
import {AgregarEstudianteComponent} from "./agregar-estudiante.component";
import {BaseDeDatosEstudiantes, OrigenDeDatosEstudiantes} from "../../shared/classes";
import {EstudianteService} from "../../shared/services";

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss'],
  providers: [EstudianteService],
  encapsulation: ViewEncapsulation.None
})
export class EstudiantesComponent implements OnInit {

  displayedColumns = ['selection', 'lu', 'nombre', 'carrera'];
  exampleDatabase = new BaseDeDatosEstudiantes();
  dataSource: OrigenDeDatosEstudiantes | null;

  animal: string = 'León';
  name: string = 'Santillán';

  @ViewChild('filter') filter: ElementRef;

  constructor(public modalAgregarEstudiante: MdDialog, public estudianteService:EstudianteService){}

  ngOnInit() {
    this.dataSource = new OrigenDeDatosEstudiantes(this.exampleDatabase);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }

  abrirModal(){
    let referenciaModal = this.modalAgregarEstudiante.open(AgregarEstudianteComponent, {
      width: '400px',
      data: { name: this.name, animal: this.animal }
    });

    referenciaModal.afterClosed().subscribe(result => {
      console.log('The modalAgregarEstudiante was closed');
      this.animal = result;
    });
  }


}
