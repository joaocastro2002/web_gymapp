import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { SessionManagerService } from 'src/app/auth/services/session-manager-service.service';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';

const api_url = "http://localhost:2900/"

@Injectable({
  providedIn: 'root'
})

export class DropdownCompararService {

  constructor(
    private http: HttpClient,
    private token: TokenStorageService,
    private sessionManager: SessionManagerService
  ) { }

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

      return this.http.get<Array<any>>(`${api_url}aluno/avaliacoes/`, { headers: headers })
    }
  }
}
