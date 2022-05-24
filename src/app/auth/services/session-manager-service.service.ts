import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';


const api_url = "http://localhost:2900/"
@Injectable({
  providedIn: 'root'
})
export class SessionManagerService {

  constructor(private http: HttpClient, private token: TokenStorageService, private router: Router) { }

  public generateNewSession() {
    this.http.post<{ token: string }>(`${api_url}auth/token`, { refresh_token: this.token.getRefreshToken() }).subscribe({
      next: data => {
        console.log(data)
        this.token.saveToken(data.token)
        console.log('dados: ' + data.token)
      },
      error: error => {
        console.log('Error: ' + error)
        this.token.signOut();

        this.router.navigate(['/login'])
      }
    })
  }
}
