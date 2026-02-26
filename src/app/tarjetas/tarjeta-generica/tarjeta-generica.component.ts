import { Component, ViewEncapsulation, DOCUMENT, inject, input } from '@angular/core';
import { NgClass } from '@angular/common';
import type { Card, Link } from '@app/_models/card';
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
  imports: [NgClass],
})
export class TarjetaGenericaComponent {
  private document = inject(DOCUMENT);
  private router = inject(Router);

  card = input.required<Card>();
  baseUrl = '';

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
