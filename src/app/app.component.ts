import { Component, ViewChild, ElementRef } from '@angular/core';
import { Platform, Nav, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsProvider } from "../providers/settings/settings";
import { NewslettersPage } from '../pages/newsletters/newsletters';
import { TabsPage } from './../pages/tabs/tabs';
import { DashboardPage } from './../pages/dashboard/dashboard';
import { IntroPage } from './../pages/intro/intro';
import { SettingsPage } from './../pages/settings/settings';
import { RecentSalesPage } from './../pages/recent_sales/recent_sales';
import { CustomersPage } from './../pages/customers/customers'
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('internet_checker_indicator') internet_checker_indicator: ElementRef;

  // ngAfterViewInit() {
  //   console.log(this.internet_checker_indicator.nativeElement.innerHTML);
  // }
  ionViewDidLoad() {
    console.log('component ts file');
  }

  currentUser = localStorage.getItem('currentuser');
  rootPage:any = this.currentUser
                      ? 'TabsPage'
                      : 'IntroPage';

  @ViewChild(Nav) nav: Nav;
  selectedTheme: String;  //Themeoption
  activepage: any;

  pages: Array<{ title: string, component: string, icon: string, index:number, method: any }>  ;
  public onlineOffline: boolean = navigator.onLine;
  // navCtrl: any;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    private settings: SettingsProvider, 
    private storage: Storage
    ) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);  //Themeoption
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages =  [
      { title:'Pending Supplies', component:'PendingSuppliesPage', icon:'ios-timer', index:0.2, method:'',},
      { title:'Recent Sales', component:'RecentSalesPage', icon:'ios-list-box', index:0.2, method:'',},
      { title:'Customers', component:'CustomersPage', icon:'ios-list', index:0.2, method:'',},
      { title:'Newsletters', component:'NewslettersPage', icon:'ios-albums', index:0.2, method:'',},
      { title:'Settings', component:'SettingsPage', icon:'ios-settings', index:0.2, method:'',},
    ];
    this.activepage = this.pages[0];
  }

  goToGoogleSheets(){
    console.log('gotcha');
    // goToUrl('https://healthjobber.herokuapp.com/contact-us');
  }

  // Run when the device is ready
  // document.addEventListener('deviceready', function () {

  //     // Android customization
  //     // To indicate that the app is executing tasks in background and being paused would disrupt the user.
  //     // The plug-in has to create a notification while in background - like a download progress bar.
  //     cordova.plugins.backgroundMode.setDefaults({ 
  //         title:  'CheckInternet',
  //         text:   'Executing background tasks.'
  //     });

  //     // Enable background mode
  //     cordova.plugins.backgroundMode.enable();

  //     // Called when background mode has been activated
  //     cordova.plugins.backgroundMode.onactivate = function () {

  //         // Set an interval of 30 minutes (1800000 milliseconds)
  //         setInterval(function () {

  //             // The code that you want to run repeatedly
  //             if (!navigator.onLine) {

  //             } else {

  //             }

  //         }, 1800000);
  //     }
  // }, false);

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


