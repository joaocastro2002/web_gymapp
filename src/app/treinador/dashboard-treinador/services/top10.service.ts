import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
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
    private router: Router
  ) { }


  getTop10(): Observable<Array<ITop10>> {
    const token = this.token.getToken()

    if (!token) {
      this.generateNewSession()
    }

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token.getToken()
    })

    return this.http.get<Array<ITop10>>(`${api_url}treinador/top10`, { headers: headers }).pipe(
      catchError(this.handleError('getTop10', [])) // then handle the error
    );

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error.status); // log to console instead
      if (error.status == 401) {
        this.generateNewSession()
        this.getTop10().subscribe({
          next: data => {
            return data
          },
          error: error => {
            return of(result as T);
          }
        })
      } else {

        return of(result as T);
      }
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
