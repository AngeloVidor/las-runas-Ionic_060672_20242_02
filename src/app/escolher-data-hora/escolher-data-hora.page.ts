import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

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

  constructor(private route: ActivatedRoute, private router: Router, private storage: Storage) {}

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.nomeServico = params['nomeServico'] || '';
      this.precoServico = +params['precoServico'] || 0;
      this.barbeiro = params['barbeiro'] || '';
    });

    await this.storage.create();
  }

  async confirmarAgendamento() {
    await this.storage.set('agendamento', {
      barbeiro: this.barbeiro,
      servico: this.nomeServico,
      data: this.data,
      hora: this.hora
    });

    this.router.navigate(['/welcome']);
  }
}
