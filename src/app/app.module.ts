import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsProvider } from '../providers/settings/settings';
import { HttpClientModule } from '@angular/common/http';
import { AuthproviderProvider } from '../providers/authprovider/authprovider';
import { UtilProvider } from '../providers/util/util';
import { CustomerService } from '../providers/customer/customer';
import { IonicStorageModule } from '@ionic/storage';
import { IntroPage } from '../pages/intro/intro';


@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingsProvider,
    UtilProvider,
    CustomerService,
    AuthproviderProvider
  ]
})
export class AppModule {}
