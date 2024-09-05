import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscolhaCortePageRoutingModule } from './escolha-corte-routing.module';

import { EscolhaCortePage } from './escolha-corte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscolhaCortePageRoutingModule
  ],
  declarations: [EscolhaCortePage]
})
export class EscolhaCortePageModule {}
