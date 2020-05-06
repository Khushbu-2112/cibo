import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { AuthenitcationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private as : AuthenitcationService, private router : Router) { }

  canActivate(){
    if (!this.as.isLoggedIn()) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}
