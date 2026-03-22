import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./pages/login/login').then(m => m.LoginComponent) },
  { path: 'admin', loadComponent: () => import('./pages/admin/admin').then(m => m.AdminComponent), canActivate: [authGuard] },
  { path: 'admin/configuracoes', loadComponent: () => import('./pages/admin/configuracoes/configuracoes').then(m => m.ConfiguracoesComponent), canActivate: [authGuard] },
  { path: 'admin/tema/:id', loadComponent: () => import('./pages/admin/tema-detalhe/tema-detalhe').then(m => m.TemaDetalheComponent), canActivate: [authGuard] },
  { path: 't/:slug', loadComponent: () => import('./pages/tema-publico/tema-publico').then(m => m.TemaPublicoComponent) },
{ path: '**', redirectTo: 'login' }
];
