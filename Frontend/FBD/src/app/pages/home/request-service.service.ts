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

  GetHistoricosPorAno(matricula : number) {
    return this.http.get(`${this.API}/historico-por-ano?matricula=${matricula}`);
  }

  GetHistoricoAluno(matricula : number, ano : string) {
    return this.http.get(`${this.API}/historico-aluno?matricula=${matricula}&ano=${ano}`);
  }
}
