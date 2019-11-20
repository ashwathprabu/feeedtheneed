import { Component, OnInit } from "@angular/core";
import * as M from "../../../assets/materialize/js/materialize.js";

@Component({
  selector: "app-about-head",
  templateUrl: "./about-head.component.html",
  styleUrls: ["./about-head.component.css"]
})
export class AboutHeadComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    var elems = document.querySelectorAll(".slider");
    var instances = M.Slider.init(elems, {
      height: 500,
      indicators: false
    });
  }
}
