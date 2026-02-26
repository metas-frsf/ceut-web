import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { NgbDropdownModule, NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { MainHeaderComponent } from '@app/_components/main-header/main-header.component';
import { CareerService } from '@app/_services/career.service';

@NgModule({
  declarations: [AppComponent, MainHeaderComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, NgbDropdownModule, NgbModule, NgbTooltipModule, ReactiveFormsModule, routing],
  providers: [CareerService, provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
