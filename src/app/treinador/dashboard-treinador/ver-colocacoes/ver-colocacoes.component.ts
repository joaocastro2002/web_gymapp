import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManagerService } from 'src/app/auth/services/session-manager-service.service';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { ITop10, Top10Service } from '../services/top10.service';

@Component({
  selector: 'app-ver-colocacoes',
  templateUrl: './ver-colocacoes.component.html',
  styleUrls: ['./ver-colocacoes.component.css']
})
export class VerColocacoesComponent implements OnInit {
  colocacoes: ITop10[] = []


  constructor(
    private top10Service: Top10Service,
    private sessionManager: SessionManagerService,
    private token: TokenStorageService,
    private router: Router) { }

  ngOnInit(): void {
    this.getColocado()
  }

  getColocado() {


    this.top10Service.getTop10().subscribe({
      next: data => {

        this.colocacoes = data

      },
      error: error => {

        if (error.status == 401) {

          this.sessionManager.getNewToken().subscribe({
            next: data => {
              this.token.saveToken(data.token)

              this.getColocado()
            },
            error: error => {
              console.log(error)
              this.router.navigate(['/login'])
            }
          })
        }
      }
    })

    this.colocacoes = this.colocacoes.sort((a, b) => (a.pontos > b.pontos) ? -1 : 1)
  }

}
