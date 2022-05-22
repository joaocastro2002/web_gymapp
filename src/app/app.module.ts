import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PerfilOutrosComponent } from './perfil/perfil-outros/perfil-outros.component';
import { VerAvaliacaoFisicaComponent } from './treinador/ver-avaliacao-fisica/ver-avaliacao-fisica.component';
import { IdentificacaoAlunoAvaliacaoComponent } from './treinador/ver-avaliacao-fisica/identificacao-aluno-avaliacao/identificacao-aluno-avaliacao.component';
import { DadosAlunoAvaliacaoComponent } from './treinador/ver-avaliacao-fisica/dados-aluno-avaliacao/dados-aluno-avaliacao.component';
import { ButaoEditarAvaliacaoComponent } from './treinador/ver-avaliacao-fisica/butao-editar-avaliacao/butao-editar-avaliacao.component';
import { MedidasVerAvaliacaoComponent } from './treinador/ver-avaliacao-fisica/medidas-ver-avaliacao/medidas-ver-avaliacao.component';
import { CompararAvaliacaoFisicaComponent } from './aluno/comparar-avaliacao-fisica/comparar-avaliacao-fisica.component';
import { DropdownCompararComponent } from './aluno/comparar-avaliacao-fisica/dropdown-comparar/dropdown-comparar.component';
import { MedidasCompararAvaliacaoComponent } from './aluno/comparar-avaliacao-fisica/medidas-comparar-avaliacao/medidas-comparar-avaliacao.component';
import { DadosCompararAvaliacaoComponent } from './aluno/comparar-avaliacao-fisica/dados-comparar-avaliacao/dados-comparar-avaliacao.component';
import { DashboardTreinadorComponent } from './treinador/dashboard-treinador/dashboard-treinador.component';
import { AgendamentosDesafiosComponent } from './treinador/dashboard-treinador/agendamentos-desafios/agendamentos-desafios.component';
import { MeusExerciciosComponent } from './treinador/dashboard-treinador/meus-exercicios/meus-exercicios.component';
import { GraficoComponent } from './treinador/dashboard-treinador/grafico/grafico.component';
import { PlanosTreinoComponent } from './treinador/dashboard-treinador/planos-treino/planos-treino.component';
import { AgendamentosBreafComponent } from './treinador/dashboard-treinador/agendamentos-breaf/agendamentos-breaf.component';
import { DesafiosDecorrerBreafComponent } from './treinador/dashboard-treinador/desafios-decorrer-breaf/desafios-decorrer-breaf.component';
import { VerPublicacoesCardComponent } from './treinador/dashboard-treinador/ver-publicacoes-card/ver-publicacoes-card.component';
import { VerColocacoesComponent } from './treinador/dashboard-treinador/ver-colocacoes/ver-colocacoes.component';
import { MedidasCompararAvaliacao2Component } from './aluno/comparar-avaliacao-fisica/medidas-comparar-avaliacao2/medidas-comparar-avaliacao2.component';
import { DadosCompararAvaliacao2Component } from './aluno/comparar-avaliacao-fisica/dados-comparar-avaliacao2/dados-comparar-avaliacao2.component';
import { VerAvaliacoesDiasComponent } from './aluno/ver-avaliacoes-dias/ver-avaliacoes-dias.component';
import { AvaliacoesRealizadasComponent } from './aluno/ver-avaliacoes-dias/avaliacoes-realizadas/avaliacoes-realizadas.component';
import { MedidasAvaliacoesRealizadasComponent } from './aluno/ver-avaliacoes-dias/medidas-avaliacoes-realizadas/medidas-avaliacoes-realizadas.component';
import { DadosAvaliacoesRealizadasComponent } from './aluno/ver-avaliacoes-dias/dados-avaliacoes-realizadas/dados-avaliacoes-realizadas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    PerfilComponent,
    PerfilOutrosComponent,
    VerAvaliacaoFisicaComponent,
    IdentificacaoAlunoAvaliacaoComponent,
    DadosAlunoAvaliacaoComponent,
    ButaoEditarAvaliacaoComponent,
    MedidasVerAvaliacaoComponent,
    CompararAvaliacaoFisicaComponent,
    DropdownCompararComponent,
    MedidasCompararAvaliacaoComponent,
    DadosCompararAvaliacaoComponent,
    DashboardTreinadorComponent,
    AgendamentosDesafiosComponent,
    MeusExerciciosComponent,
    GraficoComponent,
    PlanosTreinoComponent,
    AgendamentosBreafComponent,
    DesafiosDecorrerBreafComponent,
    VerPublicacoesCardComponent,
    VerColocacoesComponent,
    MedidasCompararAvaliacao2Component,
    DadosCompararAvaliacao2Component,
    VerAvaliacoesDiasComponent,
    AvaliacoesRealizadasComponent,
    MedidasAvaliacoesRealizadasComponent,
    DadosAvaliacoesRealizadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
