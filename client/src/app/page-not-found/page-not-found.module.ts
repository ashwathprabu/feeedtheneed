import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PnfPageComponent } from './pnf-page/pnf-page.component';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [PnfPageComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports : [
    PnfPageComponent
  ]
})
export class PageNotFoundModule { }
