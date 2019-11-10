import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { FoodbodyComponent } from './home/foodbody/foodbody.component';
import { HomegroupComponent } from './home/homegroup/homegroup.component';
import { CounterComponent } from './home/counter/counter.component';
import { HomeModule } from './home/home.module';
import { AboutHeadComponent } from './about/about-head/about-head.component';
import { AboutModule } from './about/about.module';
import { AuthModule } from './auth/auth.module'; 
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RegisterserviceService} from './authservices/registerservice.service'
import { LoginComponent } from './auth/login/login.component';
import { UserdashboardModule } from './userdashboard/userdashboard.module'; 
import { PageNotFoundModule } from './page-not-found/page-not-found.module'; 
import {AuthGuard} from '../app/route-guard/auth.guard';
import { SendReqService } from './userpane/send-req.service'; 

@NgModule({
  declarations: [
    AppComponent,   
  ],
  imports: [
    AppRoutingModule,
    AuthModule,    
    BrowserModule, 
    HomeModule,
    AboutModule,
    FormsModule,
    HttpClientModule,
    UserdashboardModule,
    PageNotFoundModule
  ],
  providers: [RegisterserviceService,AuthGuard,SendReqService],
  bootstrap: [AppComponent]
})
export class AppModule { }
