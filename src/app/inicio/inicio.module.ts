import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';


@NgModule({
  declarations: [
    InicioComponent,
    LoginComponent,
    NovoUsuarioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    FormsModule,
    MensagemModule,
    ReactiveFormsModule
  ],
  exports: [
    InicioComponent
  ]
})
export class InicioModule { }
