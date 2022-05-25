import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { SessionManagerService } from 'src/app/auth/services/session-manager-service.service';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';

const api_url = "http://localhost:2900/"

export interface IAgendarAvaliacaoService {
  ginasioId: string,
  dataAgendamento: string
}



@Injectable({
  providedIn: 'root'
})
export class AgendarAvaliacaoService {

  constructor(
    // para fazer os pedidos http
    private http: HttpClient,
    private token: TokenStorageService,
    private sessionManager: SessionManagerService,
    private router: Router
  ) { }
  
  httpOptions = {
    // primeiro digo que vou comunicar em json e depois digo que tenho este token
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token.getToken() })
  };

  // funcao que vai receber os nossos dados (data) para mandar para a api
  agenda(data: any) : Observable<any>{
    const token = this.token.getToken()

    if (token == null) {
      this.sessionManager.getNewToken().subscribe({
        next: data => {
          this.token.saveToken(data.token)

          return this.agenda(data)
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

      console.log(data)
    return this.http.post(`${api_url}aluno/agenda/avaliacao/`, data, this.httpOptions)
    }  
  }
}
