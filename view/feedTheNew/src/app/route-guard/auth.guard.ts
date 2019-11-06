import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
// import { Observable } from 'rxjs';
import { LoginserviceService } from '../authservices/loginservice.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private loginser : LoginserviceService, 
    private router : Router)
    { }
    
    canActivate(): boolean {
      if(this.loginser.isLogin()){
        return true
      }else{
        this.router.navigate(['/login'])
        return false
      }
    }
}
