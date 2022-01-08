import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestServiceService } from '../../home/request-service.service';

@Component({
  selector: 'app-historico-ano',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent implements OnInit {
  consultas = [
    {
      value: "Encontre a mat(matrícula) e nome dos alunos com nota em Fundamentos de Banco de dados maior que 7.",
      active: false,
    },
    {
      value: "Calcule a média das notas dos alunos na disciplina de Computação Gráfica.",
      active: false,
    },
    {
      value: "Retorne o nome dos alunos que tiveram a frequência menor que 0.75 e as disciplinas relacionadas.",
      active: false,
    },
    {
      value: "Imprima o nome dos professores da  ́area de 'Algoritmos e Otimização' que dão/deram aula para pelo menos 5 alunos, independente do semestre.",
      active: false,
    },
    {
      value: "Retorne o nome e a data de nascimento dos alunos que tiraram nota menor que 5 na disciplina de Fundamentos de Bancos de Dados no semestre de 2021.1.",
      active: false,
    },
  ]

  constructor(private requestService: RequestServiceService) { }


  ngOnInit(): void {

  }

}
