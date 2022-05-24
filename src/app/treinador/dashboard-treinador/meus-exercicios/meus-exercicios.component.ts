import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManagerService } from 'src/app/auth/services/session-manager-service.service';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { IMeusExerciciosTreinador, MeusExerciciosTreinadorService } from '../services/meus-exercicios-treinador.service';

@Component({
  selector: 'app-meus-exercicios',
  templateUrl: './meus-exercicios.component.html',
  styleUrls: ['./meus-exercicios.component.css']
})
export class MeusExerciciosComponent implements OnInit {
  meusExercicios = [];
  constructor(
    private meusExerciciosService: MeusExerciciosTreinadorService,
    private sessionManager: SessionManagerService,
    private token: TokenStorageService,) { }

  ngOnInit(): void {
    this.getExercicios()
  }

  getExercicios() {

    this.meusExerciciosService.getExercicios().subscribe({
      next: data => {

        this.meusExercicios = data

      },
      error: error => {

        if (error.status == 401) {

          this.sessionManager.getNewToken().subscribe({
            next: data => {
              this.token.saveToken(data.token)

              this.meusExerciciosService.getExercicios().subscribe({
                next: data => {

                  this.meusExercicios = data

                }
              })
            }
          })
        }
      }
    })

  }

}
