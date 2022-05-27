import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { catchError, Observable, of } from 'rxjs';

import { SessionManagerService } from 'src/app/auth/services/session-manager-service.service';
import { Router } from '@angular/router';

const api_url = "http://localhost:2900/"

export interface IAlunos {
  uid: string,
  nome: string,
  hashtag: string,
  imagem_url: string
}

@Injectable({
  providedIn: 'root'
})
export class VerAlunosService {

  constructor(
    private http: HttpClient,
    private token: TokenStorageService,
    private sessionManager: SessionManagerService,
    private router: Router) { }

  getAlunos(): Observable<Array<IAlunos>> {
    const token = this.token.getToken()
    if (token == null) {
      this.sessionManager.getNewToken().subscribe({
        next: data => {
          this.token.saveToken(data.token)

          return this.getAlunos()
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

      let ginasioId = "531316a4-b454-42ec-bc01-7358a8c3bc48";

      return this.http.get<Array<IAlunos>>(`${api_url}alunos/ginasio/${ginasioId}`, { headers: headers })
    }
  }
}

