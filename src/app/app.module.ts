import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // FormsModule para o uso de formulários
import { IonicStorageModule } from '@ionic/storage-angular'; // Ionic Storage para persistência de dados
import { HttpClientModule } from '@angular/common/http'; // HTTP para requisições

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule, // Adiciona o FormsModule para trabalhar com formulários
    HttpClientModule, // Opcional, para requisições HTTP
    IonicStorageModule.forRoot() // Adiciona o IonicStorageModule para armazenamento local
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
