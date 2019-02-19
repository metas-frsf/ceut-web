﻿import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
// used to create fake backend
import {ErrorInterceptor, JwtInterceptor} from './_helpers';
import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {AlertComponent} from './_components';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RegisterComponent} from './register';
import {RepairService} from '@app/_services/repair.service';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';
import {TarjetasComponent} from '@app/tarjetas/tarjetas.component';
import {TarjetasModule} from '@app/tarjetas/tarjetas.module';
import {CardService} from '@app/_services/card.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    TarjetasModule,
    WjInputModule,
    WjGridModule,
    WjGridFilterModule,
    routing
  ],
  declarations: [
    AlertComponent,
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    CardService

    // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
