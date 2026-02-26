import { Component, ViewEncapsulation, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MainHeaderComponent } from './_components/main-header/main-header.component';

@Component({
  selector: 'app-ceut-frsf',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [MainHeaderComponent, RouterOutlet],
})
export class AppComponent {
  private router = inject(Router);

  private paginaCeut = {
    name: 'CEUT',
    messenger: 'ceut.frsf',
    instagram: 'ceut.frsf',
    logo: 'logo-ceut.png',
  };

  private paginaMetas = {
    name: 'METAs',
    messenger: 'metas.frsf',
    instagram: 'metas.frsf',
    logo: 'logo-metas.png',
  };

  private rutasCeut = ['/home'];
  private rutasMetas = ['/electivas'];

  private _paginaActiva;

  constructor() {
    const router = this.router;

    router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        if (this.rutasMetas.includes(route.urlAfterRedirects)) {
          this.paginaActiva = this.paginaMetas;
        } else {
          this.paginaActiva = this.paginaCeut;
        }
      }
    });
  }

  get paginaActiva() {
    return this._paginaActiva;
  }

  set paginaActiva(value) {
    this._paginaActiva = value;
  }
}
