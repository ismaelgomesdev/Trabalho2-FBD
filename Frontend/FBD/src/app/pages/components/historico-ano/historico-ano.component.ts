import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { RequestServiceService } from '../../home/request-service.service';

@Component({
  selector: 'app-historico-ano',
  templateUrl: './historico-ano.component.html',
  styleUrls: ['./historico-ano.component.scss']
})
export class HistoricoAnoComponent implements OnInit {

  constructor(private requestService: RequestServiceService) { }

  @Input()
  nomeAluno : string = '';

  anos : any = [];

  ngOnInit(): void {
    this.requestService.GetHistoricosPorAno().subscribe((data) => {
      this.anos = data;
    });
  }

}
