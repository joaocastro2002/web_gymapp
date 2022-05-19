import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { TokenStorageService } from '../auth/services/token-storage.service';
import { HeaderService } from '../header/services/header.service';
import { PlanoTreinoService } from '../plano-treino/services/plano-treino.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  NTreinos = 0;

  constructor(
    private headerService: HeaderService,
    private planoTreinoService: PlanoTreinoService,
    private token: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.headerService.setTitle('Dashboard')
    this.getNumTreinos();

  }

  getNumTreinos(): void {
    const user = this.token.getUser()
    this.planoTreinoService.getTreinos(user.perfil.uid).subscribe({
      next: data => {
      this.NTreinos = data.treinos.length
      }
    })


  }

}
