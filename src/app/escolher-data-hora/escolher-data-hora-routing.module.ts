import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscolherDataHoraPage } from './escolher-data-hora.page';

const routes: Routes = [
  {
    path: '',
    component: EscolherDataHoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscolherDataHoraPageRoutingModule {}
