import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { TabelaAlunosComponent } from './pages/components/tabela-alunos/tabela-alunos.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { TabelaProfessoresComponent } from './pages/components/tabela-professores/tabela-professores.component';
import { TabelaDisciplinasComponent } from './pages/components/tabela-disciplinas/tabela-disciplinas.component';
import { TabelaTurmasComponent } from './pages/components/tabela-turmas/tabela-turmas.component';
import { HistoricoAnoComponent } from './pages/components/historico-ano/historico-ano.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabelaAlunosComponent,
    TabelaProfessoresComponent,
    TabelaDisciplinasComponent,
    TabelaTurmasComponent,
    HistoricoAnoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
