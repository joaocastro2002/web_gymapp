import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { SessionManagerService } from 'src/app/auth/services/session-manager-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const api_url = "http://localhost:2900/"

export interface IDesafiosDecorrerBreaf {
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
}

@Injectable({
  providedIn: 'root'
})
export class DesafiosDecorrerBreafService {

  constructor(
    private http: HttpClient,
    private token: TokenStorageService,
    private sessionManager: SessionManagerService,
    private router: Router) { }
  getDesafios(): Observable<Array<IDesafiosDecorrerBreaf>> {
    const token = this.token.getToken()
    if (token == null) {
      this.sessionManager.getNewToken().subscribe({
        next: data => {
          this.token.saveToken(data.token)

          return this.getDesafios()
        },
        error: error => {
          this.router.navigate(['/login'])
        }
      })
    } else {



      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.token.getToken()
      })

      return this.http.get<Array<IDesafiosDecorrerBreaf>>(`${api_url}treinador/desafiosMarca/`, { headers: headers })
    }

  }
}
