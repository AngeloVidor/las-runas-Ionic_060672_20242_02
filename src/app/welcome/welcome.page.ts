import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  nomeUsuario: string = '';
  temAgendamento: boolean = false; 

  constructor(private router: Router) {}

  ngOnInit() {
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

    console.log('Usuário recuperado do localStorage:', usuario);

    if (usuario && usuario.nome) {
      this.nomeUsuario = usuario.nome;
    } else {
      this.nomeUsuario = 'Usuário';
    }

    const agendamento = JSON.parse(localStorage.getItem('agendamento') || '{}');
    this.temAgendamento = !!agendamento;
  }

  novoAgendamento() {
    this.router.navigate(['/agendamento']);
  }

  verAgendamentos() {
    this.router.navigate(['/meus-agendamentos']);
  }
}
