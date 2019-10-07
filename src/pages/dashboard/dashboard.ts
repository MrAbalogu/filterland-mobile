import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams, ToastController, AlertController } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';
import { PendingLogs } from '../pending_logs/pending_logs';
import { LogSalesPage } from '../log_sales/log_sales';
import { ProductsPage } from '../products/products';
import { AddCustomerPage } from '../add_customer/add_customer';
import { Storage } from '@ionic/storage';
import { AuthproviderProvider } from './../../providers/authprovider/authprovider';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  nextPage = 'AboutPage';
  selectedTheme: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private settings: SettingsProvider,
    private storage: Storage,
    private auth: AuthproviderProvider,
    private AlertController:AlertController,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  goToAbstractPage(){
    this.navCtrl.push('AbstractPage');
  }

  goToLogSaleModal(){
    this.navCtrl.push('LogSalesPage');
  }

  goToPendingLogsPage(){
    this.navCtrl.push('PendingLogs');
  }

  goToProductsPage(){
    this.navCtrl.push('ProductsPage');
  }

  goToSalesTodayPage(){
    this.navCtrl.push('AddCustomerPage');
  }

  public logout(): void {
    this.auth.logout(this.navCtrl);
  }



}
