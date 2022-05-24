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


    if (token == null) {
      this.sessionManager.getNewToken().subscribe({
        next: data => {
          this.token.saveToken(data.token)

          return this.getAgendamentos()
        }
      })
    } else {

      console.log(this.token.getToken())

      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.token.getToken()
      })

      return this.http.get<Array<IAgendamentosDesafios>>(`${api_url}treinador/agenda/desafios`, { headers: headers })
    }


  }

}
