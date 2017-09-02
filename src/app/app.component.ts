import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'CEUT FRSF';

  constructor(private router: Router) { }

  private goToRoute(routeParameter) {
    this.router.navigate(['./' + routeParameter]);
  }
}
