import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-alunos',
  templateUrl: './tabela-alunos.component.html',
  styleUrls: ['./tabela-alunos.component.scss']
})
export class TabelaAlunosComponent implements OnInit {
  @Input()
  dataSource!: any[];

  displayedColumns: string[] = ['matricula', 'nome', 'semestre', 'dataNasc'];

  constructor() { 
  }
  
  
  ngOnInit(): void {
    console.log(this.dataSource);
    
  }

}
