import { Component, OnInit } from '@angular/core';
import {SendReqService } from '../../userpane/send-req.service';
import * as M from '../../../assets/materialize/js/materialize'
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
// import {DateAgoPipe} from '../../pipes/date-ago.pipe'
// import { DatePipe } from '@angular/common';
// import { on } from 'cluster';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent implements OnInit {

  constructor(private userreq : SendReqService,private router :Router ) { }
reqData = {}
reqs = []
donats = []
title 
len

// onFileSelected(event){
//   this.reqData
// }

findLen(){
  var s = this.reqs.length
  // console.log(s)
  if(s > 0){
    return true;
  }else {
    return false;
  }
}
  ngOnInit() {
    var ele = document.querySelectorAll('.datepicker') 
    var instances = M.Datepicker.init(ele, {format: 'dd/mm/yyyy'  ,showClearBtn :true,minDate : new Date()});
    var elemn = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elemn, {});
// =====
var elems = document.querySelectorAll('.tabs');
// var instances = M.Collapsible.init(elems, {});
 var instance = M.Tabs.init(elems, {});
 var elems = document.querySelectorAll('.tooltipped');
 var instances = M.Tooltip.init(elems, {}); 
//==== 

// User Donation
    this.userreq.getProfile()
    .subscribe(
      data => {this.reqs = data
      console.log('res',data)},
      error => console.log(error)
    )
// All Donation
this.userreq.getAllDonation()
    .subscribe(
      data => {this.donats = data
      console.log('res',data)},
      error => console.log(error)
    )
  }
  sendReq(){
    var d = (<HTMLInputElement>document.getElementById("date")).value
    this.reqData["date"] = d
    console.log(this.reqData,d)


    this.userreq.sendreq(this.reqData)
    .subscribe(
      data => {console.log('come')
      // this.router.navigate(['/userpanel'])
    },
      error => console.log(error)
    )
    
    this.userreq.getProfile()
    .subscribe(
      data => {this.reqs = data
      console.log('res',data)},
      error => console.log(error)
    )  
    // this.router.navigate(['/userpanel']);
  }
 

delRec(req){
  this.reqData = req.email
  console.log(this.reqData)
  console.log(req._id)
  var id = req._id
  console.log("hey id",id)
  this.userreq.delDonation(id)
  .subscribe(
    data =>console.log("hey"),
    err=> console.log("err")
  )
}
search(){
  var s = this.title.toLocaleLowerCase()
  console.log(s)
// this.donats = this.donats.filter(res => {
//  return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
// })
} 


}
