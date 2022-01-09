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
      key: 1,
      value: "Encontre a mat(matrícula) e nome dos alunos com nota em Fundamentos de Banco de dados maior que 7.",
      active: false,
    },
    {
      key: 2,
      value: "Calcule a média das notas dos alunos na disciplina de Computação Gráfica.",
      active: false,
    },
    {
      key: 3,
      value: "Retorne o nome dos alunos que tiveram a frequência menor que 0.75 e as disciplinas relacionadas.",
      active: false,
    },
    {
      key: 4,
      value: "Imprima o nome dos professores da área de 'Algoritmos e Otimização' que dão/deram aula para pelo menos 5 alunos, independente do semestre.",
      active: false,
    },
    {
      key: 5,
      value: "Retorne o nome e a data de nascimento dos alunos que tiraram nota menor que 5 na disciplina de Fundamentos de Bancos de Dados no semestre de 2021.1.",
      active: false,
    },
  ]


  dataSource: any = [];
  displayedColumns: any = [];

  constructor(private requestService: RequestServiceService) { }


  ngOnInit(): void {

  }

  setActiveQuery(consulta: any, shouldActive: boolean = true) {
    if (shouldActive) {
      this.consultas.forEach(async element => {
        if (element.value == consulta.value) {
          switch (element.key) {
            case 1:
              await this.requestService.GetAlunosComNotaMaiorQue7().subscribe((data) => {
                this.dataSource = data;
                this.displayedColumns = Object.keys(this.dataSource[0]);
              });
              break;
            case 2:
              await this.requestService.GetMediaNotasComputacaoGrafica().subscribe((data) => {
                this.dataSource = data;
                this.displayedColumns = Object.keys(this.dataSource[0]);
              });
              break;
            case 3:
              await this.requestService.GetAlunosComFrequenciaMenorQue75().subscribe((data) => {
                this.dataSource = data;
                this.displayedColumns = Object.keys(this.dataSource[0]);
              });
              break;
            case 4:
              await this.requestService.GetProfessoresComAulaParaPeloMenos5Alunos().subscribe((data) => {
                this.dataSource = data;
                this.displayedColumns = Object.keys(this.dataSource[0]);
              });
              break;
            case 5:
              await this.requestService.GetAlunosComNotaMenorQue5().subscribe((data) => {
                this.dataSource = data;
                this.displayedColumns = Object.keys(this.dataSource[0]);
              });
              break;
          }
          
          element.active = true;
        } else {
          element.active = false;
        }
      });
    } else {
      this.consultas.forEach(element => {
        element.active = false;
      });
      this.dataSource = [];
    }
  }

  filterFunction(consultas: any) {
    return consultas.filter((consulta: any) => consulta.active == true);
  }

  hasActiveQuery() {
    let hasActive = false;
    this.consultas.forEach(element => {
      if (element.active) {
        hasActive = true;
      }
    });
    return hasActive;
  }

}
