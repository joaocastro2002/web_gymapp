import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { SessionManagerService } from 'src/app/auth/services/session-manager-service.service';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';

const api_url = "http://localhost:2900/"

export interface IDatasAvaliacoes {
  "avaliacao_id": string,
  "data": string
}

@Injectable({
  providedIn: 'root'
})

export class DropdownCompararService {

  constructor(
    private http: HttpClient,
    private token: TokenStorageService,
    private sessionManager: SessionManagerService
  ) { }
  
  // função que vai buscar à rota o que preicamos - vamos precisar da data
  getDataAvaliacao(): Observable<Array<any>> {
    const token = this.token.getToken()

    if (token == null) {
      this.sessionManager.getNewToken().subscribe({
        next: data => {
          this.token.saveToken(data.token)

          return this.getDataAvaliacao()
        }
      })
    } else {

      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.token.getToken()
      })

      // vamos precisar desta rota para ir buscar as datas e colocar no dropdown - precisamos do id da avaliação posteriormente para conseguir ir buscar os restantes dados
      return this.http.get<Array<any>>(`${api_url}aluno/avaliacoes/`, { headers: headers })
    }
  }
}
