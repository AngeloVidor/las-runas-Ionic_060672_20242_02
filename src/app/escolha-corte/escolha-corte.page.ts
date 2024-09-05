import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-escolha-corte',
  templateUrl: './escolha-corte.page.html',
  styleUrls: ['./escolha-corte.page.scss'],
})
export class EscolhaCortePage implements OnInit {
  barbeiro: string = ''; 
  servicoSelecionado: string = ''; 
  precoServico: number = 0; 

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.barbeiro = params['barbeiro'] || 'Barbeiro';
    });
  }

  agendarServico(nome: string, preco: number) {
    this.router.navigate(['/escolher-data-hora'], {
      queryParams: { nomeServico: nome, precoServico: preco, barbeiro: this.barbeiro }
    });
  }
}
