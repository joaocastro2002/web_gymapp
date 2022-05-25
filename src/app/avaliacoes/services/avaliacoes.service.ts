import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { Avaliacao } from 'src/app/models/avaliacao.model';

const api_url = "http://localhost:2900/"


@Injectable({
  providedIn: 'root'
})


export class AvaliacoesService {

  constructor(
    private http: HttpClient,
    private token: TokenStorageService) { }

  getAvaliacaoAutenticado() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token.getToken()
    })
    return this.http.get<Avaliacao>(`${api_url}aluno/avaliacoes/`, { headers: headers })
  }
}
