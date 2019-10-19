import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler, } from 'ionic-angular';
import { MyApp } from './app.component';
import { SocialSharing } from '@ionic-native/social-sharing';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsProvider } from '../providers/settings/settings';
import { HttpClientModule } from '@angular/common/http';
import { AuthproviderProvider } from '../providers/authprovider/authprovider';
import { UtilProvider } from '../providers/util/util';
import { CustomerService } from '../providers/customer/customer';
import { LogSaleService } from '../providers/log_sale/log_sale';
import { ProductService } from '../providers/product/product';
import { IonicStorageModule } from '@ionic/storage';
import { IntroPage } from '../pages/intro/intro';
import { InvoiceModal } from '../pages/invoice/invoice';
import { ViewInvoiceModal } from '../pages/view_invoice/view_invoice';
import { SaleInvoiceModal } from '../pages/sale_invoice/sale_invoice';

@NgModule({
  declarations: [
    MyApp,
    InvoiceModal,
    ViewInvoiceModal,
    SaleInvoiceModal
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,                               
    ReactiveFormsModule,

    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InvoiceModal,
    ViewInvoiceModal,
    SaleInvoiceModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingsProvider,
    UtilProvider,
    CustomerService,
    LogSaleService,
    ProductService,
    AuthproviderProvider
  ]
})
export class AppModule {}
