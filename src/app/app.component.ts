import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
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

  routingLinks = [
    { label: "Inicio", link: "inicio", enabled: true },
    { label: "Clientes", link: "clientes", enabled: false },
    { label: "Reparaciones", link: "reparaciones", enabled: true },
    { label: "Caja", link: "caja", enabled: false },
    { label: "Stock", link: "stock", enabled: false }
  ];

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
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

  get welcomeName() {
    return `${this.currentUser.avatar} ${this.currentUser.firstName}`;
  }
}
