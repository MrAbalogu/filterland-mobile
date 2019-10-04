import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecentSalesPage } from './recent_sales';

@NgModule({
  declarations: [
    RecentSalesPage,
  ],
  imports: [
    IonicPageModule.forChild(RecentSalesPage),
  ],
  entryComponents: [RecentSalesPage]
})
export class RecentSalesPageModule {}
