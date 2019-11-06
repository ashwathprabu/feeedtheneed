import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserpanelComponent } from './userpanel/userpanel.component'; 
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [UserpanelComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [UserpanelComponent]
})
export class UserdashboardModule { }
