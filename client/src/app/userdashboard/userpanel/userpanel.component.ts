import { Component, OnInit } from '@angular/core';
import {SendReqService } from '../../userpane/send-req.service';
import * as M from '../../../assets/materialize/js/materialize'

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent implements OnInit {

  constructor(private userreq : SendReqService) { }
reqData = {}
reqs = []


  ngOnInit() {

// =====
var elems = document.querySelectorAll('.collapsible');
var instances = M.Collapsible.init(elems, {});
//==== 


    this.userreq.getProfile()
    .subscribe(
      data => {this.reqs = data
      console.log('res',data)},
      error => console.log(error)
    )
  }
  sendReq(){
    console.log(this.reqData)
    this.userreq.sendreq(this.reqData)
    .subscribe(
      data => console.log('come'),
      error => console.log('error')
    )

  }

}
