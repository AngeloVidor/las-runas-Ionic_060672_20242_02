import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
})
export class AgendamentoPage implements OnInit {
  barbeiros = [
    { nome: 'Barbeiro 1', foto: 'assets/imgs/barbeiro1.jpg' },
    { nome: 'Barbeiro 2', foto: 'assets/imgs/barbeiro2.jpg' },
    { nome: 'Barbeiro 3', foto: 'assets/imgs/barbeiro3.jpg' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  selecionarBarbeiro(barbeiro: any) {
    this.router.navigate(['/escolha-corte'], {
      queryParams: { barbeiro: barbeiro.nome }
    });
  }
}
