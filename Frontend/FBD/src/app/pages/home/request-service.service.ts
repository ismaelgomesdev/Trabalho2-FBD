import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  private API = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }

  getStudents()  {
    return this.http.get(`${this.API}/pegaralunos`);
  }

  GetProfessores() {
    return this.http.get(`${this.API}/pegarprofessores`);
  }

  GetDisciplinas() {
    return this.http.get(`${this.API}/pegardisciplinas`);
  }

  GetTurmas() {
    return this.http.get(`${this.API}/pegarturmas`);
  }

  GetHistoricosPorAno() {
    return this.http.get(`${this.API}/historico-por-ano`);
  }

  GetAlunosComNotaMaiorQue7() {
    return this.http.get(`${this.API}/alunos-com-nota-maior-que-7`);
  }

  GetMediaNotasComputacaoGrafica() {
    return this.http.get(`${this.API}/media-notas-computacao-grafica`);
  }

  GetAlunosComFrequenciaMenorQue75() {
    return this.http.get(`${this.API}/alunos-com-frequencia-menor-que-75`);
  }

  GetProfessoresComAulaParaPeloMenos5Alunos() {
    return this.http.get(`${this.API}/professores-com-aula-para-pelo-menos-5-alunos`);
  }

  GetAlunosComNotaMenorQue5() {
    return this.http.get(`${this.API}/alunos-com-nota-menor-que-5`);
  }



}
