import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';

const api_url = "http://localhost:2900"

interface resMarcas {
  "marcas": [
    {
      "id": string;
      "nome": string;
      "mobilidade": boolean;
      "cor": string;
      "logo": string;
    }
  ]
}

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  constructor(
    private http : HttpClient,
    private token: TokenStorageService
  ) { }

  

  getTreinos(userId: string){
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + this.token.getToken()
    })
    
    return this.http.get<resMarcas>(`${api_url}/admin/marca`, {headers: headers})
  }
}
