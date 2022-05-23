import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { catchError, Observable, of } from 'rxjs';
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
    private router: Router) { }
  getExercicios(): Observable<Array<IMeusExerciciosTreinador>> {
    const token = this.token.getToken()

    if (!token) {
      console.log('aqui')
      this.generateNewSession()
    }

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token.getToken()
    })

    return this.http.get<Array<IMeusExerciciosTreinador>>(`${api_url}treinador/exercicios/treinador`, { headers: headers }).pipe(
      catchError(this.handleError('getExercicios', [])) // then handle the error
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error.status); // log to console instead
      if (error.status == 401) {
        this.generateNewSession()
        this.getExercicios().subscribe({
          next: data => {
            return data
          },
          error: error => {
            return of(result as T);
          }
        })
      }
      return of(result as T);
    };
  }

  private generateNewSession() {
    this.http.post<{ token: string }>(`${api_url}auth/token`, { refresh_token: this.token.getRefreshToken() }).subscribe({
      next: data => {
        console.log(data)
        this.token.saveToken(data.token)
        console.log('dados: ' + data.token)
      },
      error: error => {
        console.log('Error: ' + error)
        this.token.signOut();

        this.router.navigate(['/login'])
      }
    })
  }


}
