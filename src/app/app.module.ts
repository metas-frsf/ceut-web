import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
// used to create fake backend
import { ErrorInterceptor, JwtInterceptor } from "./_helpers";
import { AppComponent } from "./app.component";
import { routing } from "./app.routing";
import { AlertComponent } from "./_components";
import { LoginComponent } from "./login";
import {
  NgbDropdownModule,
  NgbTooltipModule
} from "@ng-bootstrap/ng-bootstrap";
import { RegisterComponent } from "@app/register";
import { MainHeaderComponent } from "@app/_components/main-header/main-header.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbDropdownModule,
    NgbTooltipModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    AlertComponent,
    AppComponent,
    MainHeaderComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
