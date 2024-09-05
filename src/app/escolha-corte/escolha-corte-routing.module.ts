import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscolhaCortePage } from './escolha-corte.page';

const routes: Routes = [
  {
    path: '',
    component: EscolhaCortePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscolhaCortePageRoutingModule {}
