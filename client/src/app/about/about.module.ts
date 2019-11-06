import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHeadComponent } from './about-head/about-head.component';
import { AboutBodyComponent } from './about-body/about-body.component';



@NgModule({
  declarations: [AboutHeadComponent, AboutBodyComponent],
  imports: [
    CommonModule
  ],
  exports:[
    AboutHeadComponent,
    AboutBodyComponent
  ]
})
export class AboutModule { }
