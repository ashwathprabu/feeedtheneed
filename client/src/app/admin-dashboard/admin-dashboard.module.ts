import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashbrdComponent } from './admin-dashbrd/admin-dashbrd.component';



@NgModule({
  declarations: [AdminLoginComponent, AdminDashbrdComponent],
  imports: [
    CommonModule
  ]
})
export class AdminDashboardModule { }
