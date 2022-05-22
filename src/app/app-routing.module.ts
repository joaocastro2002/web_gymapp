import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilOutrosComponent } from './perfil/perfil-outros/perfil-outros.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CompararAvaliacaoFisicaComponent } from './treinador/comparar-avaliacao-fisica/comparar-avaliacao-fisica.component';
import { VerAvaliacaoFisicaComponent } from './treinador/ver-avaliacao-fisica/ver-avaliacao-fisica.component';
import { DashboardTreinadorComponent } from './treinador/dashboard-treinador/dashboard-treinador.component';

//Rotas para paginas

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'perfil/:id', component: PerfilOutrosComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'treinador/verAvaliacao', component: VerAvaliacaoFisicaComponent },
  { path: 'treinador/compararAvaliacao', component: CompararAvaliacaoFisicaComponent },
  { path: 'dashboardTreinador', component: DashboardTreinadorComponent }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
