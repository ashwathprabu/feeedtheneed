import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component'; 
import { FooterComponent } from './footer/footer.component';
import { FoodbodyComponent } from './foodbody/foodbody.component';
import { CounterComponent } from './counter/counter.component';
import { HomegroupComponent } from './homegroup/homegroup.component';
 

 



@NgModule({
  declarations: [HomeComponent,  FooterComponent, FoodbodyComponent, CounterComponent, HomegroupComponent],
  imports: [
    CommonModule 
  ],
  exports:
  [
    HomeComponent,
    FooterComponent,
    FoodbodyComponent,
    CounterComponent,
    HomegroupComponent,
    
  ]
})
export class HomeModule { }
