import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'registrar',
    pathMatch: 'full'
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then(m => m.RegistrarPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'agendamento',
    loadChildren: () => import('./agendamento/agendamento.module').then(m => m.AgendamentoPageModule)
  },
  {
    path: 'escolha-corte',
    loadChildren: () => import('./escolha-corte/escolha-corte.module').then(m => m.EscolhaCortePageModule)
  },
  {
    path: 'escolher-data-hora',
    loadChildren: () => import('./escolher-data-hora/escolher-data-hora.module').then(m => m.EscolherDataHoraPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
