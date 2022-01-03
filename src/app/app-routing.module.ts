import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then((m) => m.InicioModule),
  },
  {
    path: 'consumos',
    loadChildren: () => import('./consumos/consumos.module').then((m) => m.ConsumosModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
