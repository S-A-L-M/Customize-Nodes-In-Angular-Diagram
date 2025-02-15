import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: "", component: DashboardComponent,
    children: [
      { path: "admin", component: AdminComponent, title:"Administración" },
      // { path: 'administracion', loadChildren: () => import('./administracion/administracion.module').then(m => m.AdministracionModule)},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
