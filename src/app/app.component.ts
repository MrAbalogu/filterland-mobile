import { Component, ViewChild,  } from '@angular/core';
import { Platform, Nav, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsProvider } from "../providers/settings/settings";
import { NewslettersPage } from '../pages/newsletters/newsletters';
import { TabsPage } from './../pages/tabs/tabs';
import { DashboardPage } from './../pages/dashboard/dashboard';
import { IntroPage } from './../pages/intro/intro';
import { SettingsPage } from './../pages/settings/settings';
import { CustomersPage } from './../pages/customers/customers'
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  currentUser = localStorage.getItem('currentuser');
  rootPage:any = this.currentUser
                      ? 'TabsPage'
                      : 'IntroPage';

  @ViewChild(Nav) nav: Nav;
  selectedTheme: String;  //Themeoption
  activepage: any;

  pages: Array<{ title: string, component: string, icon: string, index:number }>  ;

  // navCtrl: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private settings: SettingsProvider, private storage: Storage) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);  //Themeoption
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages =  [
      { title:'Pending Supplies', component:'PendingSuppliesPage',  icon:'ios-timer', index:0.2, },
      { title:'Recent Sales', component:'RecentSalesPage', icon:'ios-list-box', index:0.2, },
      { title:'Customers', component:'CustomersPage', icon:'ios-list', index:0.2, },
      { title:'Newsletters', component:'NewslettersPage', icon:'ios-albums', index:0.2, },
      { title:'Spreadsheets', component:'', icon:'ios-document', index:0.2, },
      { title:'Share', component:'', icon:'ios-share', index:0.2, },
      { title:'Settings', component:'SettingsPage', icon:'ios-settings', index:0.2, },
    ];
    this.activepage = this.pages[0];
  }

  openPage(page) {
    this.nav.setRoot(page.component);
    this.activepage = DashboardPage;
  }

  checkActive(page) {
    return page == this.activepage;
  }

  dashboard(){
    this.nav.setRoot(DashboardPage);
  }

  about(){
    this.nav.setRoot('TabsPage');
  }
}


