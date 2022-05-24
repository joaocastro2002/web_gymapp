import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { SessionManagerService } from 'src/app/auth/services/session-manager-service.service';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';

const api_url = "http://localhost:2900/"

export interface IAgendamentosDesafios {

  agendamento_id: string,
  uid: string,
  data_agendamento: string,
  isAceite: boolean,
  desafio_id: string,
  ginasio_id: string,
  isDeleted: boolean
  desafios: {
    desafio_id: string,
    criador_id: string,
    nome: string,
    modalidade_id: string,
    data_inicio: string,
    data_fim: string,
    recompensa: number,
    isEncerrado: boolean,
    ginasio_id: string,
    descricao: string,
    isDeleted: boolean,
    modalidades_ginasio: {
      nome: string
    }
  },
  users: {
    nome: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class AgendamentosDesafiosService {

  constructor(
    private http: HttpClient,
    private token: TokenStorageService,
    private sessionManager: SessionManagerService
  ) { }



  getAgendamentos(): Observable<Array<IAgendamentosDesafios>> {
    const token = this.token.getToken()

    if (!token) {
      console.log('aqui')
      this.sessionManager.generateNewSession()
    }

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token.getToken()
    })

    return this.http.get<Array<IAgendamentosDesafios>>(`${api_url}treinador/agenda/desafios`, { headers: headers }).pipe(
      catchError(this.handleError('getExercicios', [])) // then handle the error
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error.status); // log to console instead
      if (error.status == 401) {
        this.sessionManager.generateNewSession()
        this.getAgendamentos().subscribe({
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

}
