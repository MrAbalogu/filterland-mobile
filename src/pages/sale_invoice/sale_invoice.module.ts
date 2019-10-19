import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaleInvoiceModal } from './sale_invoice';

@NgModule({
  declarations: [
    SaleInvoiceModal,
  ],
  imports: [
    IonicPageModule.forChild(SaleInvoiceModal),
  ],
  entryComponents: [SaleInvoiceModal]
})
export class SaleInvoiceModalModule {}
