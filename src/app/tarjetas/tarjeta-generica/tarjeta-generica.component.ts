import { Component, Inject, Input, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Card, Link } from '@app/_models/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-generica',
  templateUrl: './tarjeta-generica.component.html',
  styleUrls: [
    '../tarjetas.component.scss',
    '../../../assets/scss/colors.scss',
    '../../../assets/scss/fonts.scss',
    './tarjeta-generica.component.scss',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class TarjetaGenericaComponent {
  @Input() card: Card;
  baseUrl = '';

  constructor(
    @Inject(DOCUMENT) private document: any,
    private router: Router,
  ) {}

  navigate(link: string | Link) {
    if (link) {
      if (typeof link === 'object') {
        if (link.type === 'internal') {
          this.router.navigate([link.url]);
        } else if (link.type === 'external') {
          this.document.location.href = link.url;
        }
      }
      //Deprecated: Fallback case, where only a string was defined in the link attribute
      else if (typeof link === 'string') {
        this.document.location.href = link;
      }
    }
  }
}
