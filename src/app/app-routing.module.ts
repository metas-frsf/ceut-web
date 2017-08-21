import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {EstudiantesComponent} from './estudiantes/estudiantes.component';
import {PrestamosComponent} from './prestamos/prestamos.component';
import {UsuariosComponent} from './usuarios/usuarios.component';

import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},

  { path: 'dashboard', component: DashboardComponent },
  { path: 'estudiantes', component: EstudiantesComponent },
  { path: 'prestamos',  component: PrestamosComponent },
  { path: 'usuarios', component: UsuariosComponent },

  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({

  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
