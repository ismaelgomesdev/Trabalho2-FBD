import { Alunos } from './../../interfaces/alunos';
import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from './request-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ConsultasComponent } from '../components/consultas/consultas.component';
import { TransacaoComponent } from '../components/transacao/transacao.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    this.Iniciar();
  }

  public Iniciar() {
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

  public Apagar() {
    this.dataSource = [];
    this.dataSourceDisc = [];
    this.dataSourceProf = [];
    this.dataSourceTurm = [];
  }

  openDialog(dialog: string) {

    if (dialog == 'consultas')
      this.dialog.open(ConsultasComponent);
    else{
      this.dialog.open(TransacaoComponent);
      setTimeout(() => {
        this.Iniciar();
      }, 500);
    }
  }

  openSnackBar(message: string, action : number) {
    this._snackBar.open(message, 'Ok!');

    switch (action) {
      case 1:
        var result = this.requestService.CriarTabelas();
        result.subscribe();
        break;
      case 2:
        var result = this.requestService.ApagarTabelas();
        result.subscribe();
        this.Apagar()
        break;
      case 3:
        var result = this.requestService.InserirDados();
        result.subscribe();
        setTimeout(()=>{
          this.Iniciar();
        }, 500)
        break;
      case 4:
        var resuslt = this.requestService.ReiniciarBase();
        this.Apagar();
        resuslt.subscribe()
        break;

    }

  }

}
