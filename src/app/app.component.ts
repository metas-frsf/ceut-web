import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { AuthenticationService } from "./_services";
import { User } from "./_models";

import * as wjcCore from "wijmo/wijmo";

@Component({
  selector: "app-ceut-frsf",
  templateUrl: "app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  currentUser: User;

  private paginaCeut = {
    nombre: "CEUT",
    messenger: "ceut.frsf",
    instagram: "ceut.frsf",
    logo: "logo-ceut.png"
  };

  private paginaMetas = {
    nombre: "METAs",
    messenger: "metas.frsf",
    instagram: "metas.frsf",
    logo: "logo-metas.png"
  };

  private rutasCeut = ["/home", "/dashboard", "/deportes", "/login"];
  private rutasMetas = ["/electivas"];

  private paginaActiva;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );

    this.paginaActiva = { nombre: "", messenger: "", instagram: "", logo: "" };

    router.events.subscribe(route => {
      if (route instanceof NavigationEnd) {
        if (this.rutasMetas.includes(route.urlAfterRedirects)) {
          this.paginaActiva = this.paginaMetas;
        } else {
          this.paginaActiva = this.paginaCeut;
        }
      }
    });
  }

  ngOnInit() {
    this.authenticationService
      .getKeys("wijmo")
      .subscribe(Key => wjcCore.setLicenseKey(Key));
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }

  get nombreDeBienvenida() {
    return `${this.currentUser.avatar} ${this.currentUser.firstName}`;
  }
}
