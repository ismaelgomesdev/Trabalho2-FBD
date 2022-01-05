import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-professores',
  templateUrl: './tabela-professores.component.html',
  styleUrls: ['./tabela-professores.component.scss']
})
export class TabelaProfessoresComponent implements OnInit {

  @Input()
  dataSource!: any[];

  displayedColumns: string[] = ['codigo', 'nome', 'area_pesquisa'];

  constructor() { }

  ngOnInit(): void {
  }

}
