import { Component, OnInit } from '@angular/core'; 
import * as M from 'materialize-css/dist/js/materialize';
import {LoginserviceService} from '../../authservices/loginservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData = {}
  constructor(private _auth : LoginserviceService ,private router : Router) { }

  ngOnInit() {
  }
  loginUser( ){
  console.log(this.userData)
  this._auth.login(this.userData)
  .subscribe(
    data =>{console.log(data);
      if(data.success){
        localStorage.setItem('token',data.token)
        M.toast({html: data.message, classes: 'rounded green',color:'green'})
    this.router.navigateByUrl('/usercontrolpanel')
      return true
   }else{
     M.toast({html: data.message, classes: 'rounded red' ,color:'red'})
     return false
    }
  },
    error => console.log(error)
  )
  }


}
