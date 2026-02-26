import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

lista_compras: any = [
  {nome:"12GB RAM", preco:659.99, marca:"AMD", promocao: false},
  {nome: "Monitor 120hz 1488x1288", preco: 349.99, marca:"LG", promocao: true},
  {nome: "Wireless Mouse", preco: 59.99, marca: "HP", promocao: false},
  {nome: "Teclado Mecanico", preco: 129.99, marca: "HP", promocao: true}
]
}
