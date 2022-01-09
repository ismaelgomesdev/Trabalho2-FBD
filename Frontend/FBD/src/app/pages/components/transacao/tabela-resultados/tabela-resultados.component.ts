import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tabela-resultados-transacao',
  templateUrl: './tabela-resultados.component.html',
  styleUrls: ['./tabela-resultados.component.scss']
})
export class TabelaResultadosTransacaoComponent implements OnInit {
  @Input()
  dataSource = [];

  @Input()
  displayedColumns = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
