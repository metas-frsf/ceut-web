import { Component, ViewEncapsulation } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { AuthenticationService } from "./_services";
import { User } from "./_models";

@Component({
  selector: "app-ceut-frsf",
  templateUrl: "app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  currentUser: User;

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

  private rutasCeut = ["/home", "/dashboard", "/login"];
  private rutasMetas = ["/electivas"];

  private _paginaActiva;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );

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

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }

  get nombreDeBienvenida() {
    return `${this.currentUser.avatar} ${this.currentUser.firstName}`;
  }

  get paginaActiva() {
    return this._paginaActiva;
  }

  set paginaActiva(value) {
    this._paginaActiva = value;
  }
}
