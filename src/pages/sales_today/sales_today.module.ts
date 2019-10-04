import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalesTodayPage } from './sales_today';

@NgModule({
  declarations: [
    SalesTodayPage,
  ],
  imports: [
    IonicPageModule.forChild(SalesTodayPage),
  ],
  entryComponents: [SalesTodayPage]
})
export class SalesTodayPageModule {}
