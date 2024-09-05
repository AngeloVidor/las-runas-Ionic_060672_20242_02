import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscolherDataHoraPageRoutingModule } from './escolher-data-hora-routing.module';

import { EscolherDataHoraPage } from './escolher-data-hora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscolherDataHoraPageRoutingModule
  ],
  declarations: [EscolherDataHoraPage]
})
export class EscolherDataHoraPageModule {}
