import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import {TarjetasComponent} from '@app/tarjetas/tarjetas.component';
import {ElectivasComponent} from '@app/electivas/electivas.component';

const appRoutes: Routes = [
  // TODO: Corregir rutas habituales
  // { path: '', component: TarjetasComponent, pathMatch: 'full'},
  // { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  // { path: 'login', component: LoginComponent },
  // { path: 'electivas', component: ElectivasComponent },
  // // otherwise redirect to home
  // { path: '**', redirectTo: '' }

  { path: '', component: ElectivasComponent, pathMatch: 'full'},
  { path: 'electivas', component: ElectivasComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
