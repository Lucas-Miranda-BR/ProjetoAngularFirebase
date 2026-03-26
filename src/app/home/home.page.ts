import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { ILivro } from './acervo.interface';
import { IProduto } from './produtos.interface';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

livros: ILivro[] = [
  {
    isbn: '9780141439518',
    titulo: 'Orgulho e Preconceito',
    categoria: [{ nome: 'Romance' }, { nome: 'Clássico' }]
  },
  {
    isbn: '9780439139601',
    titulo: 'Harry Potter e o Cálice de Fogo',
    categoria: [{ nome: 'Fantasia' }, { nome: 'Aventura' }]
  },
  {
    isbn: '9780061120084',
    titulo: 'O Sol é para Todos',
    categoria: [{ nome: 'Drama' }, { nome: 'Clássico' }]
  },
  {
    isbn: '9780451524935',
    titulo: '1984',
    categoria: [{ nome: 'Distopia' }, { nome: 'Ficção Científica' }]
  },
  {
    isbn: '9780544003415',
    titulo: 'O Hobbit',
    categoria: [{ nome: 'Fantasia' }, { nome: 'Aventura' }]
  },
  {
    isbn: '9780307277671',
    titulo: 'O Código Da Vinci',
    categoria: [{ nome: 'Suspense' }, { nome: 'Mistério' }]
  },
  {
    isbn: '9780307387899',
    titulo: 'A Menina que Roubava Livros',
    categoria: [{ nome: 'Drama' }, { nome: 'Histórico' }]
  },
  {
    isbn: '9780062316097',
    titulo: 'Sapiens: Uma Breve História da Humanidade',
    categoria: [{ nome: 'História' }, { nome: 'Ciência' }]
  },
  {
    isbn: '9788535914849',
    titulo: 'Dom Casmurro',
    categoria: [{ nome: 'Romance' }, { nome: 'Clássico Brasileiro' }]
  },
  {
    isbn: '9788532530780',
    titulo: 'O Pequeno Príncipe',
    categoria: [{ nome: 'Fábula' }, { nome: 'Filosofia' }]
  },
  {
    isbn: '9780060850524',
    titulo: 'Admirável Mundo Novo',
    categoria: [{ nome: 'Distopia' }, { nome: 'Ficção Científica' }]
  },
  {
    isbn: '9780140449266',
    titulo: 'Crime e Castigo',
    categoria: [{ nome: 'Drama' }, { nome: 'Filosofia' }]
  },
  {
    isbn: '9781594633669',
    titulo: 'A Garota no Trem',
    categoria: [{ nome: 'Suspense' }, { nome: 'Mistério' }]
  },
  {
    isbn: '9780307743657',
    titulo: 'A Culpa é das Estrelas',
    categoria: [{ nome: 'Romance' }, { nome: 'Drama' }]
  },
  {
    isbn: '9781451673319',
    titulo: 'Fahrenheit 451',
    categoria: [{ nome: 'Distopia' }, { nome: 'Ficção Científica' }]
  },
  {
    isbn: '9788535929843',
    titulo: 'Memórias Póstumas de Brás Cubas',
    categoria: [{ nome: 'Clássico Brasileiro' }, { nome: 'Filosofia' }]
  },
  {
    isbn: '9780062472106',
    titulo: 'O Alquimista',
    categoria: [{ nome: 'Ficção' }, { nome: 'Filosofia' }]
  },
  {
    isbn: '9780553386790',
    titulo: 'Pai Rico, Pai Pobre',
    categoria: [{ nome: 'Finanças' }, { nome: 'Negócios' }]
  },
  {
    isbn: '9780345803481',
    titulo: 'Cinquenta Tons de Cinza',
    categoria: [{ nome: 'Romance' }, { nome: 'Drama' }]
  },
  {
    isbn: '9788576082675',
    titulo: 'Capitães da Areia',
    categoria: [{ nome: 'Romance' }, { nome: 'Clássico Brasileiro' }]
  }
];

produtos: IProduto[] = [
  {
    nome: "Smartphone Galaxy S23",
    preco: 3999.99,
    estoque: 10,
    marca: [{ nome: "Samsung" }]
  },
  {
    nome: "iPhone 14",
    preco: 4999.99,
    estoque: 8,
    marca: [{ nome: "Apple" }]
  },
  {
    nome: "Notebook Inspiron 15",
    preco: 3599.90,
    estoque: 5,
    marca: [{ nome: "Dell" }]
  },
  {
    nome: "Notebook IdeaPad 3",
    preco: 2799.90,
    estoque: 7,
    marca: [{ nome: "Lenovo" }]
  },
  {
    nome: "Smart TV 50 4K",
    preco: 2499.00,
    estoque: 6,
    marca: [{ nome: "LG" }]
  },
  {
    nome: "Smart TV 55 Crystal UHD",
    preco: 2899.00,
    estoque: 4,
    marca: [{ nome: "Samsung" }]
  },
  {
    nome: "Headphone WH-1000XM5",
    preco: 1999.90,
    estoque: 12,
    marca: [{ nome: "Sony" }]
  },
  {
    nome: "Caixa de Som JBL Flip 6",
    preco: 699.90,
    estoque: 15,
    marca: [{ nome: "JBL" }]
  },
  {
    nome: "Mouse MX Master 3S",
    preco: 499.90,
    estoque: 20,
    marca: [{ nome: "Logitech" }]
  },
  {
    nome: "Teclado Mecânico Alloy Core",
    preco: 349.90,
    estoque: 18,
    marca: [{ nome: "HyperX" }]
  },
  {
    nome: "Monitor 27 UltraWide",
    preco: 1799.90,
    estoque: 9,
    marca: [{ nome: "LG" }]
  },
  {
    nome: "Impressora EcoTank L3250",
    preco: 1199.90,
    estoque: 11,
    marca: [{ nome: "Epson" }]
  },
  {
    nome: "Console PlayStation 5",
    preco: 4499.90,
    estoque: 3,
    marca: [{ nome: "Sony" }]
  },
  {
    nome: "Console Xbox Series X",
    preco: 4299.90,
    estoque: 4,
    marca: [{ nome: "Microsoft" }]
  },
  {
    nome: "Smartwatch Galaxy Watch 5",
    preco: 1299.90,
    estoque: 13,
    marca: [{ nome: "Samsung" }]
  },
  {
    nome: "Apple Watch Series 8",
    preco: 2999.90,
    estoque: 6,
    marca: [{ nome: "Apple" }]
  },
  {
    nome: "Tablet iPad 10ª geração",
    preco: 3799.90,
    estoque: 5,
    marca: [{ nome: "Apple" }]
  },
  {
    nome: "Kindle Paperwhite",
    preco: 699.00,
    estoque: 14,
    marca: [{ nome: "Amazon" }]
  },
  {
    nome: "Câmera EOS Rebel T7",
    preco: 2999.00,
    estoque: 2,
    marca: [{ nome: "Canon" }]
  },
  {
    nome: "GoPro Hero 11",
    preco: 2499.00,
    estoque: 7,
    marca: [{ nome: "GoPro" }]
  }
];

}
