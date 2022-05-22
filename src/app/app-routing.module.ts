import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilOutrosComponent } from './perfil/perfil-outros/perfil-outros.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DashboardTreinadorComponent } from './treinador/dashboard-treinador/dashboard-treinador.component';
import { VerPublicacaoComponent } from './ver-publicacao/ver-publicacao.component';



//Rotas para paginas

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'perfil/:id', component: PerfilOutrosComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboardTreinador', component: DashboardTreinadorComponent },
  { path: 'verPublicacao', component: VerPublicacaoComponent },



];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
