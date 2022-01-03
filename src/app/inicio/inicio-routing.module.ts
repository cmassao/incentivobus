import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: "novousuario",
        component: NovoUsuarioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
