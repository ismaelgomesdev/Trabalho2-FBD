import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestServiceService } from '../../home/request-service.service';

@Component({
  selector: 'app-transacao',
  templateUrl: './transacao.component.html',
  styleUrls: ['./transacao.component.scss']
})
export class TransacaoComponent implements OnInit {
  acoes = [
    "1. Insere a seguinte tupla na tabela Alunos: (392889, Tiago, 3, 09/04/2001)",
    "2. Insere a seguinte tupla na tabela Histórico: (392889, 1, 1, 1, 2020.1, 0.90, 8)",
    "3. Encontre a MAT(matrícula) e nome dos alunos com nota em Fundamentos de Banco de dados maior que 8."
  ]


  dataSource: any = [];
  displayedColumns: any = [];

  constructor(private requestService: RequestServiceService) { }


  ngOnInit(): void {
    this.dataSource = this.requestService.Transacao().subscribe((data) => {
      this.dataSource = data;
      this.displayedColumns = Object.keys(this.dataSource[0]);
    });
  }


  
}
