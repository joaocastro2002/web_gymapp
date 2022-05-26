import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';

const api_url = "http://localhost:2900/"

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(
    private http: HttpClient,
    private token: TokenStorageService) { }

    getAgendaDesafiosAlunoAutenticado(){
      const headers = new HttpHeaders({
        'Authorization':'Bearer ' + this.token.getToken()
      })
      return this.http.get(`${api_url}aluno/agenda/desafios/`, {headers: headers})
    }
}
