import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage {
  registrarForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.registrarForm = this.formBuilder.group({
      nome: ['', [Validators.required]], 
      telefone: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10,11}$')], 
      ],
    });
  }

  onSubmit() {
    if (this.registrarForm.valid) {
      const nome = this.registrarForm.value.nome;
      const telefone = this.registrarForm.value.telefone;

      this.saveData(nome, telefone);

      this.router.navigate(['/welcome']);
    } else {
      console.log('Formulário inválido');
    }
  }

  saveData(nome: string, telefone: string) {
    const usuario = { nome, telefone };
    localStorage.setItem('usuario', JSON.stringify(usuario)); 
  }
}
