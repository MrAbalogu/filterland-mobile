import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewInvoiceModal } from './view_invoice';

@NgModule({
  declarations: [
    ViewInvoiceModal,
  ],
  imports: [
    IonicPageModule.forChild(ViewInvoiceModal),
  ],
  entryComponents: [ViewInvoiceModal]
})
export class ViewInvoiceModalModule {}
