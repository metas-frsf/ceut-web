import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: '[tarjeta-avisos]',
  templateUrl: './tarjeta-avisos.component.html',
  styleUrls: ['../tarjetas.component.scss'],
})
export class TarjetaAvisosComponent implements OnInit {

  // baseUrl = '/ceut-frsf';
  baseUrl = '';

  constructor() { }

  ngOnInit() {
  }

}
