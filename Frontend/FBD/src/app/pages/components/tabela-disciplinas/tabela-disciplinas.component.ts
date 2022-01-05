import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-disciplinas',
  templateUrl: './tabela-disciplinas.component.html',
  styleUrls: ['./tabela-disciplinas.component.scss']
})
export class TabelaDisciplinasComponent implements OnInit {


  @Input()
  dataSource!: any[];

  displayedColumns: string[] = ['codigo', 'creditos', 'nome'];

  constructor() { }

  ngOnInit(): void {
    console.log(this.dataSource);

  }

}
