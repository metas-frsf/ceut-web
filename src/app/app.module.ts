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
  NgbTooltipModule,
} from "@ng-bootstrap/ng-bootstrap";
import { RegisterComponent } from "@app/register";
import { MainHeaderComponent } from "@app/_components/main-header/main-header.component";
import { CareerService } from "@app/_services/career.service";
import { AuthModule } from "@auth0/auth0-angular";
import { environment } from "@environments/environment";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbDropdownModule,
    NgbTooltipModule,
    ReactiveFormsModule,
    routing,
    AuthModule.forRoot({
      domain: environment.auth0.domain,
      clientId: environment.auth0.clientId,
    }),
  ],
  declarations: [
    AlertComponent,
    AppComponent,
    MainHeaderComponent,
    LoginComponent,
    RegisterComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    CareerService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
