import { Component,AfterViewInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';
import { Form} from '../form'; 
import { RegisterserviceService } from '../../authservices/registerservice.service';
import { error } from 'util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements AfterViewInit  {
  constructor(private register : RegisterserviceService ,private router: Router) { }
  // 
  submitted = false;
  ngAfterViewInit() { 
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, {});
  }

   model = new Form('Ashwath','asdasd@SAS.com',9898998899,'gjgjg');
   onSubmit() {
 console.log(this.model)
 this.register.register(this.model)
 .subscribe(
   data =>{if(data.success){M.toast({html: data.message, classes: 'rounded red',color:'green'})
   this.router.navigateByUrl('/login')
  }else{
    M.toast({html: data.message, classes: 'rounded red' ,color:'red'})
  }},
   error => console.log('err')
 ) 
  }
}
