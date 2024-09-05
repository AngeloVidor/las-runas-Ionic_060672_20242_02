import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-meus-agendamentos',
  templateUrl: './meus-agendamentos.page.html',
  styleUrls: ['./meus-agendamentos.page.scss'],
})
export class MeusAgendamentosPage implements OnInit {
  agendamento: any;

  constructor(private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
    this.agendamento = await this.storage.get('agendamento');
  }
}
