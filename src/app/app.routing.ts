import type { Routes } from '@angular/router';
import { CardService } from '@app/_services/card.service';

export const appRoutes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('@app/pages/tarjetas/tarjetas.component').then((m) => m.TarjetasComponent),
    providers: [CardService],
  },
  {
    path: 'electivas',
    loadComponent: () => import('@app/pages/electivas/electivas.component').then((m) => m.ElectivasComponent),
  },
  {
    path: 'manual-ingresante',
    loadComponent: () =>
      import('@app/pages/manual-ingresante/manual-ingresante.component').then((m) => m.ManualIngresanteComponent),
  },
  {
    path: 'calendario',
    loadComponent: () => import('@app/pages/calendario/calendario.component').then((m) => m.CalendarioComponent),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
