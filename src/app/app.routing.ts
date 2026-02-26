import type { Routes } from '@angular/router';
import { CardService } from '@app/_services/card.service';

export const appRoutes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./tarjetas/tarjetas.component').then((m) => m.TarjetasComponent),
    providers: [CardService],
  },
  {
    path: 'electivas',
    loadComponent: () => import('./electivas/electivas.component').then((m) => m.ElectivasComponent),
  },
  {
    path: 'manual-ingresante',
    loadComponent: () =>
      import('./manual-ingresante/manual-ingresante.component').then((m) => m.ManualIngresanteComponent),
  },
  {
    path: 'calendario',
    loadComponent: () => import('./calendario/calendario.component').then((m) => m.CalendarioComponent),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
