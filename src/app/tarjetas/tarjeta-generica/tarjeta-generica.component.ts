import {Component, Inject, Input, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {Card} from '@app/_models/card';

@Component({
  selector: '[tarjeta-generica]',
  templateUrl: './tarjeta-generica.component.html',
  styleUrls: ['../tarjetas.component.scss', '../../../assets/scss/colors.scss', '../../../assets/scss/fonts.scss'],
})
export class TarjetaGenericaComponent implements OnInit {

  @Input() card: Card;

  // baseUrl = '/ceut-frsf';
  baseUrl = '';

  constructor(@Inject(DOCUMENT) private document: any) {
  }

  ngOnInit() {
  }

  navigateToCard(url: string) {
    if (url) {
      this.document.location.href = url;
    }
  }

}
