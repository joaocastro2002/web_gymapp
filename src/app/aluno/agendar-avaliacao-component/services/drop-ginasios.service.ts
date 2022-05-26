//! Service que vai buscar os ginásios do aluno à base de dados

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionManagerService } from 'src/app/auth/services/session-manager-service.service';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';

const api_url = "http://localhost:2900/"

export interface INomesGinasios {
  "ginasio_id": string,
  "nome": string
}

@Injectable({
  providedIn: 'root'
})
export class DropGinasiosService {

  constructor(
    private http: HttpClient,
    private token: TokenStorageService,
    private sessionManager: SessionManagerService
  ) { }

  getNomeGinasio(): Observable<Array<any>> {
    const token = this.token.getToken()

    if (token == null) {
      this.sessionManager.getNewToken().subscribe({
        next: data => {
          this.token.saveToken(data.token)

          return this.getNomeGinasio()
        }
      })
    } else {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.token.getToken()
      })

      // vamos a esta rota buscar os ginasios a que o aluno pertence
      return this.http.get<Array<any>>(`${api_url}aluno/ginasios`, { headers: headers })
    }
  }
}
