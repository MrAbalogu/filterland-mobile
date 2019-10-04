import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvoiceModal } from './invoice';

@NgModule({
  declarations: [
    InvoiceModal,
  ],
  imports: [
    IonicPageModule.forChild(InvoiceModal),
  ],
  entryComponents: [InvoiceModal]
})
export class InvoiceModalModule {}
