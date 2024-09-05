import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  nomeUsuario: string = '';  

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.nomeUsuario = this.route.snapshot.paramMap.get('nome') || 'Usuário';
  }

  novoAgendamento() {
    this.router.navigate(['/agendamento']);
  }
}
