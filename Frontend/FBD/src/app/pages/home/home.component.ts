import { Alunos } from './../../interfaces/alunos';
import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from './request-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataSource: any = [];
  dataSourceProf: any = [];
  dataSourceDisc : any = [];
  dataSourceTurm : any = [];


  constructor(
    private requestService : RequestServiceService
  ) { }

  ngOnInit(): void {

    var students = this.requestService.getStudents();
    students.subscribe((data) =>{
      this.dataSource = data;
    });

    var teachers = this.requestService.GetProfessores();
    teachers.subscribe((data) =>{
      this.dataSourceProf = data;
    })

    var disciplinas = this.requestService.GetDisciplinas();
    disciplinas.subscribe((data) =>{
      this.dataSourceDisc = data;
    })

    var turmas = this.requestService.GetTurmas();
    turmas.subscribe((data) =>{
      this.dataSourceTurm = data;
    })

  }

}
