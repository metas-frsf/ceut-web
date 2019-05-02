import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import {TarjetasComponent} from '@app/tarjetas/tarjetas.component';
import {DeportesComponent} from '@app/deportes/deportes.component';
import {ElectivasComponent} from '@app/electivas/electivas.component';

const appRoutes: Routes = [
  { path: '', component: TarjetasComponent, pathMatch: 'full'},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'deportes', component: DeportesComponent },
  { path: 'electivas', component: ElectivasComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
