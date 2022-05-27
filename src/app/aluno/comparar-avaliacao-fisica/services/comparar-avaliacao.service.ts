import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PieAnimationOptions } from 'chart.js';
import { Observable } from 'rxjs';
import { SessionManagerService } from 'src/app/auth/services/session-manager-service.service';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';

const api_url = "http://localhost:2900/"

// neste service vamos fazer um pedido à API para ir buscar os dados das medidas e dos dados das avaliações - coisa que vai ser feita depois do submit
export interface ICompararAvaliacaoService {
  avaliacao_id: string,
  data: string,
  peso: number,
  musculo: number,
  gordura_corporal: number,
  gordura_visceral: number,
  agua: number,
  proteina: number,
  massa_ossea: number,
  metabolismo_basal: number,
  avaliacao_imagens: Array <
    {
      url: string,
    }
  >,
  medidas_avaliacao: Array <
    {
      medida: string,
      unidade_medida: string,
      locais_medidas: 
        {
          descricao: string,
          unilado: boolean
        }
    }
  >
}

@Injectable({
  providedIn: 'root'
})
export class CompararAvaliacaoService {

  //importamos o token storageservice para mantermos a verificação do token
  constructor(
    private http: HttpClient,
    private token: TokenStorageService,
    private sessionManager: SessionManagerService,
    private router: Router
  ) { }
  
  // o objeto observable vai receber os dados do array ou da interface
  // vamos fazer um pedido à API para ir buscar os dados todos indicados na interface em cima
  getDadosAvaliacao(avaliacao_id: string): Observable<ICompararAvaliacaoService> {
    // vamos obter o token que esta guardado no momento
    const token = this.token.getToken()

    // se nao existir token
    // vamos geraer um  novo token
    if (token == null) {
      // vamos ao session manager e pedimos um token novo
      this.sessionManager.getNewToken().subscribe({
        // se o pedido nao retornar erro, guardamos o token novo
        // e voltamos a executar a função(return this.getDadosAvaliacao())
        next: data => {
          this.token.saveToken(data.token)

          return this.getDadosAvaliacao(avaliacao_id)
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

      
      return this.http.get<ICompararAvaliacaoService>(`http://localhost:2900/aluno/avaliacao/${avaliacao_id}`, { headers: headers })
    }
  }
}
