import { Component, Injectable, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HistoricoAnoComponent } from '../historico-ano/historico-ano.component';

@Component({
  selector: 'app-tabela-alunos',
  templateUrl: './tabela-alunos.component.html',
  styleUrls: ['./tabela-alunos.component.scss']
})

export class TabelaAlunosComponent implements OnInit {
  @Input()
  dataSource!: any[];

  displayedColumns: string[] = ['matricula', 'nome', 'semestre', 'dataNasc', 'historico'];

  constructor(
    public dialog: MatDialog
  ) { }


  ngOnInit(): void {
  }

  openDialog(nomeAluno: string, matriculaAluno : number) {

    const reference = this.dialog.open(HistoricoAnoComponent);

    reference.componentInstance._nomeAluno = nomeAluno;
    reference.componentInstance._matricula = matriculaAluno;

  }


}
