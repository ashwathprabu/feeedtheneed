import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { HomeComponent } from './home/home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { FoodbodyComponent } from './home/foodbody/foodbody.component';
import { HomegroupComponent } from './home/homegroup/homegroup.component';
import { CounterComponent } from './home/counter/counter.component';
import { AboutHeadComponent } from './about/about-head/about-head.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { UserpanelComponent} from './userdashboard/userpanel/userpanel.component';
import { PnfPageComponent } from './page-not-found/pnf-page/pnf-page.component';
import { AuthGuard} from '../app/route-guard/auth.guard'
import { DonationsComponent } from './userdashboard/donations/donations.component';


const routes: Routes = [
  { path :'', component: HomegroupComponent}, 
  { path :'about', component: AboutHeadComponent},
  { path :'register', component: RegisterComponent},
  { path :'login', component: LoginComponent},
  { path :'usercontrolpanel', component: UserpanelComponent,
  canActivate:[AuthGuard]},
  { path : '**', component : PnfPageComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const routingComponents = [HomeComponent,FooterComponent,FoodbodyComponent,HomegroupComponent,CounterComponent ]