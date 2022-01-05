import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-turmas',
  templateUrl: './tabela-turmas.component.html',
  styleUrls: ['./tabela-turmas.component.scss']
})
export class TabelaTurmasComponent implements OnInit {


  @Input()
  dataSource!: any[];

  displayedColumns: string[] = ['disciplina', 'professor', 'horario', 'ano'];

  constructor() { }

  ngOnInit(): void {
  }

}
