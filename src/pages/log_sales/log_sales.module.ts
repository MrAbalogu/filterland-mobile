import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogSalesPage } from './log_sales';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    LogSalesPage,
  ],
  imports: [
    IonicPageModule.forChild(LogSalesPage),
    PipesModule
  ],
  entryComponents: [LogSalesPage]
})
export class LogSalesPageModule {}
