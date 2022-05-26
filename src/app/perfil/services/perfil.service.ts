import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { MyPerfil } from 'src/app/models/my-perfil.model';
import { Perfil } from 'src/app/models/perfil.model';

const api_url = "http://localhost:2900/"


@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(
    private http: HttpClient,
    private token: TokenStorageService) { }

  getPerfil() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token.getToken()
    })
    return this.http.get<MyPerfil>(`${api_url}perfil`, { headers: headers })
  }

  getPerfilOutros(id: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token.getToken()
    })
    return this.http.get<Perfil>(`${api_url}user/${id}`, { headers: headers })
  }

}


