import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { Livro } from './biblioteca.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
livros: Livro[] = [
    {
      isbn: "9780451524935",
      titulo: "1984",
      sinopse: "Um futuro distópico onde o Estado controla totalmente a sociedade através de vigilância extrema.",
      paginas: "328",
      data_lancamento: "1949-06-08",
      autor: [{ nome: "George Orwell", email: "N/A" }],
      editora: { nome: "Secker & Warburg", site: "N/A" },
      categoria: [{ nome: "Ficção Distópica" }]
    },
    {
      isbn: "9780451526342",
      titulo: "A Revolução dos Bichos",
      sinopse: "Uma sátira política onde animais se rebelam contra seus donos humanos.",
      paginas: "152",
      data_lancamento: "1945-08-17",
      autor: [{ nome: "George Orwell", email: "N/A" }],
      editora: { nome: "Secker & Warburg", site: "N/A" },
      categoria: [{ nome: "Sátira" }]
    },
    {
      isbn: "9780061120084",
      titulo: "O Sol é Para Todos",
      sinopse: "Uma história sobre racismo e justiça no sul dos Estados Unidos.",
      paginas: "336",
      data_lancamento: "1960-07-11",
      autor: [{ nome: "Harper Lee", email: "N/A" }],
      editora: { nome: "J.B. Lippincott & Co.", site: "N/A" },
      categoria: [{ nome: "Ficção" }]
    },
    {
      isbn: "9780140449136",
      titulo: "A Odisseia",
      sinopse: "A jornada épica de Odisseu tentando voltar para casa após a Guerra de Troia.",
      paginas: "560",
      data_lancamento: "N/A",
      autor: [{ nome: "Homero", email: "N/A" }],
      editora: { nome: "Penguin Classics", site: "https://www.penguin.com" },
      categoria: [{ nome: "Clássico" }]
    },
    {
      isbn: "9780439708180",
      titulo: "Harry Potter e a Pedra Filosofal",
      sinopse: "Um garoto descobre que é um bruxo e entra para a escola de magia Hogwarts.",
      paginas: "309",
      data_lancamento: "1997-06-26",
      autor: [{ nome: "J.K. Rowling", email: "N/A" }],
      editora: { nome: "Bloomsbury", site: "https://www.bloomsbury.com" },
      categoria: [{ nome: "Fantasia" }]
    },
    {
      isbn: "9780439064873",
      titulo: "Harry Potter e a Câmara Secreta",
      sinopse: "Harry retorna a Hogwarts e enfrenta um mistério envolvendo uma câmara secreta.",
      paginas: "341",
      data_lancamento: "1998-07-02",
      autor: [{ nome: "J.K. Rowling", email: "N/A" }],
      editora: { nome: "Bloomsbury", site: "https://www.bloomsbury.com" },
      categoria: [{ nome: "Fantasia" }]
    },
    {
      isbn: "9780307474278",
      titulo: "O Código Da Vinci",
      sinopse: "Um simbologista investiga um assassinato ligado a segredos religiosos.",
      paginas: "489",
      data_lancamento: "2003-03-18",
      autor: [{ nome: "Dan Brown", email: "N/A" }],
      editora: { nome: "Doubleday", site: "N/A" },
      categoria: [{ nome: "Suspense" }]
    },
    {
      isbn: "9780553380163",
      titulo: "Uma Breve História do Tempo",
      sinopse: "Uma explicação acessível sobre o universo e conceitos da física moderna.",
      paginas: "212",
      data_lancamento: "1988-04-01",
      autor: [{ nome: "Stephen Hawking", email: "N/A" }],
      editora: { nome: "Bantam Books", site: "N/A" },
      categoria: [{ nome: "Ciência" }]
    },
    {
      isbn: "9788535914849",
      titulo: "Dom Casmurro",
      sinopse: "Um romance psicológico sobre ciúmes e memória.",
      paginas: "256",
      data_lancamento: "1899-01-01",
      autor: [{ nome: "Machado de Assis", email: "N/A" }],
      editora: { nome: "Ática", site: "N/A" },
      categoria: [{ nome: "Clássico Brasileiro" }]
    },
    {
      isbn: "9788544001823",
      titulo: "O Pequeno Príncipe",
      sinopse: "Um piloto encontra um jovem príncipe que compartilha histórias filosóficas.",
      paginas: "96",
      data_lancamento: "1943-04-06",
      autor: [{ nome: "Antoine de Saint-Exupéry", email: "N/A" }],
      editora: { nome: "Reynal & Hitchcock", site: "N/A" },
      categoria: [{ nome: "Fábula" }]
    },
    {
      isbn: "9780062316097",
      titulo: "A Garota no Trem",
      sinopse: "Uma mulher observa um casal diariamente e se envolve em um mistério.",
      paginas: "395",
      data_lancamento: "2015-01-13",
      autor: [{ nome: "Paula Hawkins", email: "N/A" }],
      editora: { nome: "Riverhead Books", site: "N/A" },
      categoria: [{ nome: "Suspense" }]
    },
    {
      isbn: "9780307588371",
      titulo: "Jogos Vorazes",
      sinopse: "Em um futuro distópico, jovens são forçados a lutar até a morte em um reality show.",
      paginas: "374",
      data_lancamento: "2008-09-14",
      autor: [{ nome: "Suzanne Collins", email: "N/A" }],
      editora: { nome: "Scholastic Press", site: "N/A" },
      categoria: [{ nome: "Distopia" }]
    },
    {
      isbn: "9780385472579",
      titulo: "Clube da Luta",
      sinopse: "Um homem cria um clube secreto de luta como forma de escape existencial.",
      paginas: "224",
      data_lancamento: "1996-08-17",
      autor: [{ nome: "Chuck Palahniuk", email: "N/A" }],
      editora: { nome: "W. W. Norton & Company", site: "N/A" },
      categoria: [{ nome: "Ficção" }]
    },
    {
      isbn: "9780553296983",
      titulo: "Duna",
      sinopse: "Uma épica história de política, religião e ecologia em um planeta desértico.",
      paginas: "412",
      data_lancamento: "1965-08-01",
      autor: [{ nome: "Frank Herbert", email: "N/A" }],
      editora: { nome: "Chilton Books", site: "N/A" },
      categoria: [{ nome: "Ficção Científica" }]
    },
    {
      isbn: "9780060850524",
      titulo: "Admirável Mundo Novo",
      sinopse: "Uma sociedade futurista controlada por tecnologia e condicionamento social.",
      paginas: "288",
      data_lancamento: "1932-01-01",
      autor: [{ nome: "Aldous Huxley", email: "N/A" }],
      editora: { nome: "Chatto & Windus", site: "N/A" },
      categoria: [{ nome: "Distopia" }]
    },
    {
      isbn: "9780141439600",
      titulo: "Orgulho e Preconceito",
      sinopse: "Um romance sobre amor e classe social na Inglaterra do século XIX.",
      paginas: "279",
      data_lancamento: "1813-01-28",
      autor: [{ nome: "Jane Austen", email: "N/A" }],
      editora: { nome: "T. Egerton", site: "N/A" },
      categoria: [{ nome: "Romance" }]
    },
    {
      isbn: "9780143128540",
      titulo: "O Apanhador no Campo de Centeio",
      sinopse: "Um adolescente narra suas experiências e críticas à sociedade.",
      paginas: "214",
      data_lancamento: "1951-07-16",
      autor: [{ nome: "J.D. Salinger", email: "N/A" }],
      editora: { nome: "Little, Brown and Company", site: "N/A" },
      categoria: [{ nome: "Ficção" }]
    },
    {
      isbn: "9780307743657",
      titulo: "O Iluminado",
      sinopse: "Um homem enlouquece enquanto cuida de um hotel isolado.",
      paginas: "447",
      data_lancamento: "1977-01-28",
      autor: [{ nome: "Stephen King", email: "N/A" }],
      editora: { nome: "Doubleday", site: "N/A" },
      categoria: [{ nome: "Terror" }]
    },
    {
      isbn: "9780060256654",
      titulo: "O Alquimista",
      sinopse: "Um jovem pastor busca seu destino e aprende sobre sonhos.",
      paginas: "208",
      data_lancamento: "1988-01-01",
      autor: [{ nome: "Paulo Coelho", email: "N/A" }],
      editora: { nome: "HarperOne", site: "N/A" },
      categoria: [{ nome: "Ficção Filosófica" }]
    },
    {
      isbn: "9781594633669",
      titulo: "A Culpa é das Estrelas",
      sinopse: "Dois adolescentes com câncer se apaixonam.",
      paginas: "313",
      data_lancamento: "2012-01-10",
      autor: [{ nome: "John Green", email: "N/A" }],
      editora: { nome: "Dutton Books", site: "N/A" },
      categoria: [{ nome: "Romance" }]
    }
  ]
}