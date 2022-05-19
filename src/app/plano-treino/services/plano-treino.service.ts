import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';

const api_url = "http://localhost:8000/api/v1/"

interface resTreino {
  "treinos": [
    {
      "treino_id": string,
      "uid": string,
      "atividade_id"? : string,
      "modalidade_id": string,
      "duracao": string,
      "calorias": number,
      "distancia": number,
      "data": Date,
      "isDeleted": boolean
    }
  ]
}

@Injectable({
  providedIn: 'root'
})
export class PlanoTreinoService {

  constructor(
    private http : HttpClient,
    private token: TokenStorageService
  ) { }

  

  getTreinos(userId: string){
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + this.token.getToken()
    })
    
    return this.http.get<resTreino>(`${api_url}aluno/${userId}/treinos/`, {headers: headers})
  }
}
