import { Component, ViewEncapsulation } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-ceut-frsf",
  templateUrl: "app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  private paginaCeut = {
    name: "CEUT",
    messenger: "ceut.frsf",
    instagram: "ceut.frsf",
    logo: "logo-ceut.png",
  };

  private paginaMetas = {
    name: "METAs",
    messenger: "metas.frsf",
    instagram: "metas.frsf",
    logo: "logo-metas.png",
  };

  private rutasCeut = ["/home", "/dashboard", "/deportes"];
  private rutasMetas = ["/electivas"];

  private _paginaActiva;

  constructor(private router: Router) {
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
