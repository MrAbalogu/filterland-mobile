import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCustomerPage } from './add_customer';

@NgModule({
  declarations: [
    AddCustomerPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCustomerPage),
  ],
  entryComponents: [AddCustomerPage]
})
export class AddCustomerPageModule {}
