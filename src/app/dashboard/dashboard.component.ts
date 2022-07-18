import { Component, OnInit, OnDestroy } from "@angular/core";
import { first } from "rxjs/operators";

import { User } from "@app/_models";
import { UserService, AlertService } from "@app/_services";
import { Router } from "@angular/router";

@Component({
  templateUrl: "dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  users: User[] = [];

  constructor(
    private alertService: AlertService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(id: number) {
    this.userService
      .delete(id)
      .pipe(first())
      .subscribe(() => {
        this.loadAllUsers();
      });
  }

  private loadAllUsers() {
    this.userService
      .getAll()
      .pipe(first())
      .subscribe((users) => {
        this.users = users;
      });
  }

  goTo(route: string) {
    this.router.navigate([`/${route}`]);
  }

  notImplemented(route: string) {
    this.alertService.error("Módulo no implementado.", true);
  }
}
