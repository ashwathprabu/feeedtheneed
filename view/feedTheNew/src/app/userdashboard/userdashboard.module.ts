import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserpanelComponent } from './userpanel/userpanel.component'; 
import { FormsModule} from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DateAgoPipe } from '../pipes/date-ago.pipe';
import { DonationsComponent } from './donations/donations.component';
// import { AvlfoodComponent } from './avlfood/avlfood.component';

@NgModule({
  declarations: [UserpanelComponent,DateAgoPipe, DonationsComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule 
  ],
  exports : [UserpanelComponent,DateAgoPipe]
})
export class UserdashboardModule { }
