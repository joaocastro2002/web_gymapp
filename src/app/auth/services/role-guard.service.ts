import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import decode from 'jwt-decode';
import { TokenStorageService } from './token-storage.service';

interface Payload  {
  funcao: string,
  iat: number,
  exp: number,
  sub: string
}


@Injectable({
  providedIn: 'root'
})


export class RoleGuardService implements CanActivate {
  constructor(public tokenStorage: TokenStorageService, public router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];


    const token = this.tokenStorage.getToken();
    const tokenPayload = decode<Payload>(token);

    console.log(tokenPayload)
    if (!this.tokenStorage.getUser || tokenPayload.funcao !== expectedRole) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}