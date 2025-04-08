import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardianService implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }
 //verificamos si el usuario esta aautenticado antes de activar l aruta
  canActivate(): boolean{
    if(this.loginService.isAutenticado()){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
      
  }
}
