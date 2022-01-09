import { Alunos } from './../../interfaces/alunos';
import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from './request-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ConsultasComponent } from '../components/consultas/consultas.component';
import { TransacaoComponent } from '../components/transacao/transacao.component';

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
    private requestService : RequestServiceService,
    public dialog: MatDialog,
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

  openDialog(dialog: string) {
    dialog == 'consultas' ? this.dialog.open(ConsultasComponent) : this.dialog.open(TransacaoComponent);
  }

}
