import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionManagerService } from 'src/app/auth/services/session-manager-service.service';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';

export interface IPlanosTreinoBreaf {
  data: string,
  isRealizado: false,
  aluno: {
    nome: string,
    email: string,
    imagem_url: string
  },
  treinador: {
    nome: string,
    email: string,
    imagem_url: string
  },
  modalidade: {
    nome: string
  },
  bloco_treino: Array<
    {
      nome: string,
      descricao: string,
      exercicios_bloco: Array<
        {
          n_ordem_exercicio: number,
          series_exercicio: Array<
            {
              valor: string,
              n_ordem_serie: number
            }
          >,
          exercicio: {
            nome: string,
            descricao: string,
            imagens: Array<
              {
                url: string
              }
            >,
            musculos: Array<
              {
                musculos: {
                  nome: string,
                  img_url: string
                }
              }

            >
          }
        }
      >
    }
  >
}

@Injectable({
  providedIn: 'root'
})
export class VerPlanosTreinoBreafService {

  constructor(
    private http: HttpClient,
    private token: TokenStorageService,
    private sessionManager: SessionManagerService,
    private router: Router) { }

  getPlanosTreinoBreaf(): Observable<Array<IPlanosTreinoBreaf>> {
    const token = this.token.getToken()
    if (token == null) {
      this.sessionManager.getNewToken().subscribe({
        next: data => {
          this.token.saveToken(data.token)

          return this.getPlanosTreinoBreaf()
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

      return this.http.get<Array<IPlanosTreinoBreaf>>(`http://localhost:2900/treinador/planosTreinoAlunos`, { headers: headers })
    }
  }
}
