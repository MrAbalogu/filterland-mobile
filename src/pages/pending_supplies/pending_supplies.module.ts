import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingSuppliesPage } from './pending_supplies';

@NgModule({
  declarations: [
    PendingSuppliesPage,
  ],
  imports: [
    IonicPageModule.forChild(PendingSuppliesPage),
  ],
})
export class PendingSuppliesPageModule {}
