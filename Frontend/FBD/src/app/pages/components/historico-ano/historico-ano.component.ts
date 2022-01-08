import { Component, Input, OnInit } from '@angular/core';
import { RequestServiceService } from '../../home/request-service.service';

@Component({
  selector: 'app-historico-ano',
  templateUrl: './historico-ano.component.html',
  styleUrls: ['./historico-ano.component.scss']
})
export class HistoricoAnoComponent implements OnInit {

  constructor(private requestService: RequestServiceService) { }

  public _nomeAluno: string = 'Mayron';
  public _matricula : number = 0;
  public _dataSource : any;
  public _displayedColumns: string[] = ['disciplina', 'professor', 'horario', 'nota', 'frequencia'];

  anos : any = [];

  ngOnInit(): void {
    this.requestService.GetHistoricosPorAno(this._matricula).subscribe((data) => {
      this.anos = data;
    });
  }

  alert(ano : any) {

    var response = this.requestService.GetHistoricoAluno(this._matricula, ano);

    response.subscribe((data : any) => {
      this._dataSource = data;
    })

  }

}
