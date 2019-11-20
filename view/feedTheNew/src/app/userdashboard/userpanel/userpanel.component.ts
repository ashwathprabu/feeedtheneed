import { Component, OnInit } from "@angular/core";
import { SendReqService } from "../../userpane/send-req.service";
import * as M from "../../../assets/materialize/js/materialize";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
// import {DateAgoPipe} from '../../pipes/date-ago.pipe'
// import { DatePipe } from '@angular/common';
// import { on } from 'cluster';

@Component({
  selector: "app-userpanel",
  templateUrl: "./userpanel.component.html",
  styleUrls: ["./userpanel.component.css"]
})
export class UserpanelComponent implements OnInit {
  constructor(private userreq: SendReqService, private router: Router) { }
  reqData = {};
  delId = {};
  reqs = [];
  donats = [];
  getmyord = [];
  title;
  len;
  donate = {};
  mord = [];
  delivered = {};
  delord = {};

  deleteOrder(m) {
    this.delord["id"] = m._id;
    this.delord["setid"] = m.id;
    console.log("This ord will be deleted : ", this.delord);
    this.userreq.cancelOrder(this.delord).subscribe(
      data => {
        this.reqData = {};
        console.log("record deleted");
        if (data.success) {
          M.toast({
            html: data.message,
            classes: "rounded red",
            color: "green"
          });
          this.refreshFood();
        } else {
          M.toast({ html: data.message, classes: "rounded red", color: "red" });
        }
      },
      err => console.log("err")
    );
  }

  orddeliverd(m) {
    this.delivered["email"] = m.email;
    this.delivered["loc"] = m.loc;
    this.delivered["phone"] = m.phone;
    this.delivered["id"] = m.id;
    this.delivered["title"] = m.title;
    this.delivered["delid"] = m._id;
    console.log(this.delivered);
    this.userreq.orderDelvered(this.delivered).subscribe(
      data => {
        this.reqData = {};
        console.log("record deleted");
        if (data.success) {
          M.toast({
            html: data.message,
            classes: "rounded red",
            color: "green"
          });
          this.refreshFood();
        } else {
          M.toast({ html: data.message, classes: "rounded red", color: "red" });
        }
      },
      err => console.log("err")
    );
  }

  clearform() {
    this.reqData["email"] = "";
    this.reqData["title"] = "";
    this.reqData["loc"] = "";
    this.reqData["time"] = "";
    this.reqData["desc"] = "";
    this.reqData["phone"] = "";
    this.reqData = {};
  }
  findLen2() {
    var s = this.donats.length;
    // console.log(s)
    if (s > 0) {
      return true;
    } else {
      return false;
    }
  }

  nonperish(req) {
    if (req.title == "non-perishable") {
      return true;
    } else {
      return false;
    }
  }

  findLen3() {
    var s = this.mord.length;
    // console.log(s)
    if (s > 0) {
      return true;
    } else {
      return false;
    }
  }
  checkvald(data) {
    console.log(data._id);
    this.donate["id"] = data._id;
    this.donate["email"] = data.email;
    this.donate["title"] = data.title;
    this.donate["expdate"] = data.expdate;
    this.donate["phone"] = data.phone;
    this.donate["loc"] = data.loc;
    this.donate["status"] = data.status;
    console.log(this.donate);
    this.userreq.ordfood(this.donate).subscribe(
      data => {
        if (data.success) {
          M.toast({
            html: data.message,
            classes: "rounded green",
            color: "green"
          });
        } else {
          M.toast({ html: data.message, classes: "rounded red", color: "red" });
        }
        this.refreshFood();
      },
      error => console.log(error)
    );
  }

  disbl(data) {
    if (data.status == "Not Available") {
      return true;
    } else {
      return false;
    }
  }
  findLen() {
    var s = this.reqs.length;
    // console.log(s)
    if (s > 0) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
    var instance = M.Tabs.init(elems, {});
    var elems = document.querySelectorAll(".tooltipp");
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 4);
    console.log(tomorrow);
    var ele = document.querySelectorAll(".datepicker");
    var instances = M.Datepicker.init(ele, {
      format: "dd/mm/yyyy",
      showClearBtn: true,
      minDate: new Date(),
      maxDate: tomorrow
    });
    var elemn = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elemn, {});
    // =====
    var elems = document.querySelectorAll(".tabs");
    // var instances = M.Collapsible.init(elems, {});
    var instance = M.Tabs.init(elems, {});
    var elems = document.querySelectorAll(".tooltipped");
    var instances = M.Tooltip.init(elems, {});
    this.refreshFood();
  }
  sendReq() {
    var d = (<HTMLInputElement>document.getElementById("date")).value;
    this.reqData["date"] = d;
    console.log(this.reqData, d);

    this.userreq.sendreq(this.reqData).subscribe(
      data => {
        if (data.success) {
          M.toast({
            html: data.message,
            classes: "rounded green",
            color: "green"
          });
        } else {
          M.toast({ html: data.message, classes: "rounded red", color: "red" });
        }
        this.refreshFood();
        // this.router.navigate(['/userpanel'])
      },
      error => console.log(error)
    );

    this.userreq.getProfile().subscribe(
      data => {
        this.reqs = data;
        console.log("res", data);
      },
      error => console.log(error)
    );
    // this.router.navigate(['/userpanel']);
  }

  delRec(req) {
    this.reqData = req.email;
    console.log(this.reqData);
    console.log(req._id);
    var id = req._id;

    this.delId["id"] = id;
    console.log("hey id", this.delId);
    this.userreq.delDonation(this.delId).subscribe(
      data => {
        this.reqData = {};
        console.log("record deleted");
        if (data.success) {
          M.toast({
            html: data.message,
            classes: "rounded red",
            color: "green"
          });
          this.refreshFood();
        } else {
          M.toast({ html: data.message, classes: "rounded red", color: "red" });
        }
      },
      err => console.log("err")
    );
  }

  refreshFood() {
    // Getting user donation
    this.userreq.get_myords().subscribe(
      data => {
        this.mord = data;
        console.log("sssssss", data);
      },
      error => console.log(error)
    );
    // User Donation
    this.userreq.getProfile().subscribe(
      data => {
        this.reqs = data;
        console.log("res", data);
      },
      error => console.log(error)
    );

    // All Donation
    this.userreq.getAllDonation().subscribe(
      data => {
        this.donats = data;
        console.log("res", data);
      },
      error => console.log(error)
    );
  }
}
