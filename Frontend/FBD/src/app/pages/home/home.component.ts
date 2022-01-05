import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataSource: any[] = [
    { matricula: 1234, nome: 'João Teste', semestre: 1, dataNasc: '12/12/2001' },
    { matricula: 4321, nome: 'Maria Teste', semestre: 2, dataNasc: '02/12/2001' },
    { matricula: 5678, nome: 'José Teste', semestre: 3, dataNasc: '21/02/2002' },
    { matricula: 8765, nome: 'Ana Teste', semestre: 4, dataNasc: '20/02/2000' },
  ];
  constructor() { }

  ngOnInit(): void {
  }



}
