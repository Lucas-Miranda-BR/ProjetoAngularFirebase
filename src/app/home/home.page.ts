import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { IUsuario } from './usuario.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario: IUsuario = {
    nome: '',
    email: '',
    senha: '',
    senha_confirmada: ''
  }

  usuarios: IUsuario[] = [];

  cadastrar(){
    if(this.usuario.senha === this.usuario.senha_confirmada){
      this.usuarios.push(this.usuario)
    }
    else{
      alert('Confirme sua senha antes de cadastrar!');
    }
  }
}
