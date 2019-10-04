import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogSalesPage } from './log_sales';

@NgModule({
  declarations: [
    LogSalesPage,
  ],
  imports: [
    IonicPageModule.forChild(LogSalesPage),
  ],
  entryComponents: [LogSalesPage]
})
export class LogSalesPageModule {}
