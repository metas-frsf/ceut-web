/// <reference types="@angular/localize" />

import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from '@environments/environment';
import { CareerService } from '@app/_services/career.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app/app.routing';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      FormsModule,
      NgbDropdownModule,
      NgbModule,
      NgbTooltipModule,
      ReactiveFormsModule,
      routing,
    ),
    CareerService,
    provideHttpClient(withInterceptorsFromDi()),
  ],
}).catch((err) => console.error(err));
