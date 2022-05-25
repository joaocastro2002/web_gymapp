import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { catchError, Observable, of } from 'rxjs';

import { SessionManagerService } from 'src/app/auth/services/session-manager-service.service';
import { Router } from '@angular/router';

const api_url = "http://localhost:2900/"

export interface IMeusExerciciosTreinador {
  exercicio_id: string,
  nome: string,
  descricao: string,
  is_tempo: boolean,
  imagens: Array<{
    url: string,
  }>,
  musculos: Array<{
    musculos: {
      nome: string,
      img_url: string,
    }
  }>

}

@Injectable({
  providedIn: 'root'
})
export class MeusExerciciosTreinadorService {

  constructor(
    private http: HttpClient,
    private token: TokenStorageService,
    private sessionManager: SessionManagerService,
    private router: Router) { }
  getExercicios(): Observable<Array<IMeusExerciciosTreinador>> {
    const token = this.token.getToken()
    if (token == null) {
      this.sessionManager.getNewToken().subscribe({
        next: data => {
          this.token.saveToken(data.token)

          return this.getExercicios()
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

      return this.http.get<Array<IMeusExerciciosTreinador>>(`${api_url}treinador/exercicios/treinador`, { headers: headers })
    }
  }
}
