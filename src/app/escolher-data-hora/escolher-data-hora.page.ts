import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-escolher-data-hora',
  templateUrl: './escolher-data-hora.page.html',
  styleUrls: ['./escolher-data-hora.page.scss'],
})
export class EscolherDataHoraPage implements OnInit {
  nomeServico: string = ''; 
  precoServico: number = 0; 
  barbeiro: string = ''; 
  data: string = ''; 
  hora: string = ''; 

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.nomeServico = params['nomeServico'] || '';
      this.precoServico = +params['precoServico'] || 0;
      this.barbeiro = params['barbeiro'] || '';
    });
  }

  confirmarAgendamento() {
    console.log(`Serviço: ${this.nomeServico}`);
    console.log(`Preço: R$ ${this.precoServico}`);
    console.log(`Barbeiro: ${this.barbeiro}`);
    console.log(`Data: ${this.data}`);
    console.log(`Hora: ${this.hora}`);
  }
}
