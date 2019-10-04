import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { InvoiceModal } from '../invoice/invoice';

@IonicPage()
@Component({
  selector: 'log-sales',
  templateUrl: 'log_sales.html',
})
export class LogSalesPage {
  gender: string;
  netResponse: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,  
    private modalCtrl: ModalController,

    ) {
  }

  presentModal() {
    this.navCtrl.push("InvoiceModal");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogSalesPage');
  }

  goToTabsPage() {
    this.navCtrl.setRoot(TabsPage)
  }

}
