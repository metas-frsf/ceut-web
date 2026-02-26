import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { NgbDropdownModule, NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { MainHeaderComponent } from '@app/_components/main-header/main-header.component';
import { CareerService } from '@app/_services/career.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbDropdownModule,
    NgbModule,
    NgbTooltipModule,
    ReactiveFormsModule,
    routing,
  ],
  declarations: [AppComponent, MainHeaderComponent],
  providers: [CareerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
