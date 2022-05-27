import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionManagerService } from 'src/app/auth/services/session-manager-service.service';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';

const api_url = "http://localhost:2900"

interface IMarcas {
  "marcas": [
    {
      "marca_id": string;
      "nome": string;
      "cor": string;
      "logotipo": string;
      "mobilidade": boolean;
    }
  ]
}

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  constructor(
    private http: HttpClient,
    private token: TokenStorageService,
    private sessionManager: SessionManagerService,
    private router: Router
  ) { }

  

  getMarcas(): Observable<Array<IMarcas>> {
    const token = this.token.getToken()


    if (token == null) {
      this.sessionManager.getNewToken().subscribe({
        next: data => {
          this.token.saveToken(data.token)

          return this.getMarcas()
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

      return this.http.get<Array<IMarcas>>(`${api_url}/admin/marca/`, {headers: headers})
      
    }


  }
}
  /* 
  {
    var abc = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdW5jYW8iOiJBZG1pbmlzdHJhZG9yIiwiaWF0IjoxNjUzNjQ0MTA3LCJleHAiOjE2NTM2NDUwMDcsInN1YiI6IjMzMmIyNTZkLWQ2NDYtNDg3Ny04YTRmLWY1NTM4NDcyZTBkNCJ9.b8rCgF1wCri2vB8XMsrbDHb6xWuqLVhuQCF8VeE2fe4'
    const headers = new HttpHeaders({
      //'Authorization':'Bearer ' + this.token.getToken()
      'Authorization':'Bearer ' + abc
    })
    
    return this.http.get<resMarcas>(`${api_url}/admin/marca/`, {headers: headers})
  }
} */
