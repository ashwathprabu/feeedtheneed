import { Component, AfterViewInit } from '@angular/core';
// import * as M from '../../../assets/materialize/js/materialize.js';
import { Router, NavigationStart } from '@angular/router';
declare let M : any;
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements AfterViewInit {
 imgUrl : string;
  constructor(private router: Router) { 
    this.imgUrl = './pic2.jpg';    
  }
  
  ngAfterViewInit() { 
    // Image slider
    
      var elems = document.querySelectorAll('.slider');
      var instances = M.Slider.init(elems, 
        {
          height: 500,
          indicators:false
        }
      );
   
    // Mobile nav
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {});
    });
  }

}
