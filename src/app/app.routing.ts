import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import {TarjetasComponent} from '@app/tarjetas/tarjetas.component';
import {DeportesComponent} from '@app/deportes/deportes.component';
import {ElectivasComponent} from '@app/electivas/electivas.component';

const appRoutes: Routes = [
  { path: 'tarjetas', loadChildren: './tarjetas/tarjetas.module#TarjetasModule'},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'deportes', loadChildren: './deportes/deportes.module#DeportesModule' },
  { path: 'electivas', loadChildren: './electivas/electivas.module#ElectivasModule' },
  // otherwise redirect to dashboard
  { path: '', redirectTo: 'tarjetas', pathMatch: 'full' },
  { path: '**', redirectTo: 'tarjetas' }
];

export const routing = RouterModule.forRoot(appRoutes);
