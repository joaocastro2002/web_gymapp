import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { SessionManagerService } from 'src/app/auth/services/session-manager-service.service';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';

const api_url = "http://localhost:2900/"

export interface IDropdownService {
  "data": string,
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

  getDataAvaliacao(): Observable<Array<IDropdownService>> {
    const token = this.token.getToken()

    if (!token) {
      this.sessionManager.generateNewSession()
    }

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token.getToken()
    })

    return this.http.get<Array<IDropdownService>>(`${api_url}aluno/avaliacoes/`, { headers: headers }).pipe(
      catchError(this.handleError('getDataAvaliacao', [])) // then handle the error
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error.status); // log to console instead
      if (error.status == 401) {
        this.sessionManager.generateNewSession()
        this.getDataAvaliacao().subscribe({
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
}
