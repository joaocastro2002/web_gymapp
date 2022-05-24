import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, Observable, of } from 'rxjs';
import { SessionManagerService } from 'src/app/auth/services/session-manager-service.service';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';


const api_url = "http://localhost:2900/"

export interface ITop10 {
  "hashtag": string,
  "pontos": number,
  "imagem_url": string,
}


@Injectable({
  providedIn: 'root'
})
export class Top10Service {

  constructor(
    private http: HttpClient,
    private token: TokenStorageService,
    private sessionManager: SessionManagerService
  ) { }


  getTop10(): Observable<Array<ITop10>> {
    const token = this.token.getToken()


    if (token == null) {
      this.sessionManager.getNewToken().subscribe({
        next: data => {
          this.token.saveToken(data.token)

          return this.getTop10()
        }
      })
    } else {

      console.log(this.token.getToken())

      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.token.getToken()
      })

      return this.http.get<Array<ITop10>>(`${api_url}treinador/top10`, { headers: headers })
    }

  }

}

