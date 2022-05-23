import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';

const api_url = "http://localhost:2900/"



@Injectable({
  providedIn: 'root'
})
export class DesafiosDecorrerBreafService {

  constructor(private http: HttpClient, private token: TokenStorageService) { }
  getDesafios() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token.getToken()
    })
    return this.http.get(`${api_url}treinador/desafios/`, { headers: headers })
  }
}
