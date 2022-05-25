import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionManagerService } from 'src/app/auth/services/session-manager-service.service';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';

export interface IAgendametosDesafioBreaf {
  users: {
    nome: string,
  }
  data_agendamento: string,
  isAceite: boolean,
  type: number,
}

@Injectable({
  providedIn: 'root'
})
export class AgendamentosDesafioBreafService {

  constructor(
    private http: HttpClient,
    private token: TokenStorageService,
    private sessionManager: SessionManagerService,
    private router: Router
  ) { }

  getAgendamentosDesafioBreaf(): Observable<Array<IAgendametosDesafioBreaf>> {
    const token = this.token.getToken()
    if (token == null) {
      this.sessionManager.getNewToken().subscribe({
        next: data => {
          this.token.saveToken(data.token)

          return this.getAgendamentosDesafioBreaf()
        },
        error: error => {
          this.router.navigate(['/login'])
        }
      })
    } else {

      console.log(this.token.getToken())

      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.token.getToken()
      })

      return this.http.get<Array<IAgendametosDesafioBreaf>>(`http://localhost:2900/treinador/agenda/desafios/`, { headers: headers })
    }
  }
}
