import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManagerService } from 'src/app/auth/services/session-manager-service.service';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { DesafiosDecorrerBreafService, IDesafiosDecorrerBreaf } from '../services/desafios-decorrer-breaf.service';

@Component({
  selector: 'app-desafios-decorrer-breaf',
  templateUrl: './desafios-decorrer-breaf.component.html',
  styleUrls: ['./desafios-decorrer-breaf.component.css']
})
export class DesafiosDecorrerBreafComponent implements OnInit {

  desafios: IDesafiosDecorrerBreaf[] = []
  constructor(
    private desafiosService: DesafiosDecorrerBreafService,
    private sessionManager: SessionManagerService,
    private token: TokenStorageService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.getDesafios()
  }

  getDesafios() {
    this.desafiosService.getDesafios().subscribe({
      next: data => {

        for (let desafio of data) {
          desafio.data_fim = new Date(desafio.data_inicio).toLocaleString("pt-pt").replace(',', ' às')
          this.desafios.push(desafio)
        }
      },
      error: error => {

        if (error.status == 401) {

          this.sessionManager.getNewToken().subscribe({
            next: data => {
              this.token.saveToken(data.token)

              this.getDesafios()
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
