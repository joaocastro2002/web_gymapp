import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { SessionManagerService } from 'src/app/auth/services/session-manager-service.service';

const api_url = "http://localhost:2900/"



@Injectable({
  providedIn: 'root'
})
export class DesafiosDecorrerBreafService {

  constructor(
    private http: HttpClient,
    private token: TokenStorageService,
    private sessionManager: SessionManagerService) { }
  getDesafios() {
    const token = this.token.getToken()
    if (token == null) {
      this.sessionManager.getNewToken().subscribe({
        next: data => {
          this.token.saveToken(data.token)

          return this.getDesafios()
        }
      })
    } else {



      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.token.getToken()
      })

      return this.http.get(`${api_url}treinador/desafios/`, { headers: headers })
    }

  }
}
