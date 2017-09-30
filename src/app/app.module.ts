import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { RoutingModule } from './app-routing.module';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstudiantesComponent} from './estudiantes/estudiantes.component';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './not-found.component';

import { MdAutocompleteModule, MdButtonModule, MdButtonToggleModule, MdCardModule, MdCellDef, MdCheckboxModule, MdColumnDef,
  MdGridList, MdGridTile, MdHeaderCellDef, MdHeaderRowDef, MdRowDef, MdTable, MdToolbarModule, MdChipsModule,
  MdTableModule, MdDatepickerModule, MdNativeDateModule, MdTooltipModule, MdTabsModule, MdSortModule,
  MdSnackBarModule, MdDialogModule, MdExpansionModule, MdGridListModule, MdIconModule, MdInputModule, MdListModule,
  MdMenuModule, MdPaginatorModule, MdProgressBarModule, MdProgressSpinnerModule, MdRadioModule, MdSelectModule,
  MdRippleModule, MdSidenavModule, MdSlideToggleModule, MdSliderModule,
  MatCheckboxModule} from '@angular/material';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import {AgregarEstudianteComponent} from "./estudiantes/agregar-estudiante.component";

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
    'swipe': {velocity: 0.4, threshold: 20} // override default settings
  };
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MatCheckboxModule,
    MdChipsModule,
    MdTableModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSlideToggleModule,
    MdSliderModule,
    MdSnackBarModule,
    MdSortModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    MdNativeDateModule,
    CdkTableModule,
    RoutingModule
  ],
  declarations: [
    AppComponent,
    AgregarEstudianteComponent,
    DashboardComponent,
    LoginComponent,
    EstudiantesComponent,
    PageNotFoundComponent,
    PrestamosComponent,
    UsuariosComponent
  ],
  bootstrap: [AppComponent, AgregarEstudianteComponent],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig
  }]
})
export class AppModule { }
