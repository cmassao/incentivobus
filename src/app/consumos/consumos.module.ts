import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumosRoutingModule } from './consumos-routing.module';
import { ListaConsumosComponent } from './lista-consumos/lista-consumos.component';
import { ConsumoComponent } from './consumo/consumo.component';


@NgModule({
  declarations: [
    ListaConsumosComponent,
    ConsumoComponent
  ],
  imports: [
    CommonModule,
    ConsumosRoutingModule
  ]
})
export class ConsumosModule { }
