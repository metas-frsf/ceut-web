/// <reference types="@angular/localize" />

import { enableProdMode, provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routing';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [provideZoneChangeDetection(), provideRouter(appRoutes), provideHttpClient()],
}).catch((err) => console.error(err));
