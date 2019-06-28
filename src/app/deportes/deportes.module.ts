import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeportesRoutingModule} from './deportes-routing.module';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {DeportesComponent} from '@app/deportes/deportes.component';

@NgModule({
  declarations: [DeportesComponent],
  imports: [
    CommonModule,
    DeportesRoutingModule,
    NgbTabsetModule
  ]
})
export class DeportesModule { }
