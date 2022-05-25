import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManagerService } from 'src/app/auth/services/session-manager-service.service';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { IPlanosTreinoBreaf, VerPlanosTreinoBreafService } from '../services/ver-planos-treino-breaf.service';
import { PlanosTreino } from './planosTreino';

@Component({
  selector: 'app-planos-treino',
  templateUrl: './planos-treino.component.html',
  styleUrls: ['./planos-treino.component.css']
})
export class PlanosTreinoComponent implements OnInit {
  planosTreino: IPlanosTreinoBreaf[] = []
  constructor(

    private planosTreinoService: VerPlanosTreinoBreafService,
    private sessionManager: SessionManagerService,
    private token: TokenStorageService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.getPlanosTreino()
  }

  getPlanosTreino() {


    this.planosTreinoService.getPlanosTreinoBreaf().subscribe({
      next: data => {
        console.log(data)
        let planos = data
        for (let plano of planos) {
          let today = new Date();
          let planoDate = new Date(plano.data);
          if (planoDate.getDate() == today.getDate() && planoDate.getMonth() == today.getMonth() && planoDate.getFullYear() == today.getFullYear()) {
            plano.data = plano.data.split('T')[0]
            this.planosTreino.push(plano)
          }
        }


      },
      error: error => {

        if (error.status == 401) {

          this.sessionManager.getNewToken().subscribe({
            next: data => {
              this.token.saveToken(data.token)

              this.getPlanosTreino()
            },
            error: error => {
              console.log(error)
              this.router.navigate(['/login'])
            }
          })
        }
      }
    })

  }

}
