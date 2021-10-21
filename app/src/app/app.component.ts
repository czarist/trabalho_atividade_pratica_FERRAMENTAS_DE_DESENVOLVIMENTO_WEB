import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  // criação das variaveis
  elements: any = [
    {
      nome: 'Lucas Cezar Trentin',
      ru: 3779539,
      curso: 'Analise e desenvolvimento de sistemas',
      data: '05/01/1996',
    },
    {
      nome: 'Cezar Trentin',
      ru: 4129522,
      curso: 'Analise e desenvolvimento de sistemas',
      data: '05/01/2001',
    },
    {
      nome: 'Lucas Trentin',
      ru: 4129522,
      curso: 'Analise e desenvolvimento de sistemas',
      data: '05/01/2002',
    },
    {
      nome: 'Lucas Cezar',
      ru: 4129522,
      curso: 'Analise e desenvolvimento de sistemas',
      data: '05/01/2003',
    },
    {
      nome: 'Cezar Trentin Lucas',
      ru: 4129522,
      curso: 'Analise e desenvolvimento de sistemas',
      data: '05/01/1996',
    },
    {
      nome: 'Trentin Lucas Cezar',
      ru: 4129522,
      curso: 'Analise e desenvolvimento de sistemas',
      data: '05/01/1999',
    },
  ];

  headElements = ['Nome', 'RU', 'Curso', 'Data de nascimento'];
}
