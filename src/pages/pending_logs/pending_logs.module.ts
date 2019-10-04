import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingLogs } from './pending_logs';

@NgModule({
  declarations: [
    PendingLogs,
  ],
  imports: [
    IonicPageModule.forChild(PendingLogs),
  ],
  entryComponents: [PendingLogs]
})
export class PendingLogsModule {}
