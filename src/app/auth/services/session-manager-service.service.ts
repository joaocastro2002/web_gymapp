import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TokenStorageService } from './token-storage.service';


const api_url = "http://localhost:2900/"
@Injectable({
  providedIn: 'root'
})
export class SessionManagerService {

  constructor(private http: HttpClient, private token: TokenStorageService, private router: Router) { }

  public getNewToken(): Observable<any> {
    return this.http.post<{ token: string }>(`${api_url}auth/token`, { refresh_token: this.token.getRefreshToken() })
  }
}
