import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as M from '../assets/materialize/js/materialize.min.js'; 
import {LoginserviceService} from './authservices/loginservice.service'
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent implements AfterViewInit,OnInit{
 
constructor ( private router : Router, private auth : LoginserviceService){ }
 
ngOnInit(){  
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) { 
      var elems = document.querySelectorAll('.parallax');
      var instances = M.Parallax.init(elems, {});
    }
});
  
}
     
    ngAfterViewInit(){ }
  }
