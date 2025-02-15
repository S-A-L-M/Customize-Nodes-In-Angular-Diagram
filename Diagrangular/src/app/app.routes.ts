import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'dashboard',  loadChildren: () => import('./dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule)},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: '**', component: PagenotfoundComponent }
];
