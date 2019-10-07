import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'add_customer',
  templateUrl: 'add_customer.html',
})
export class AddCustomerPage {
  gender: string;
  netResponse: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,  
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCustomerPage');
  }

  goToTabsPage() {
    this.navCtrl.setRoot(TabsPage)
  }

}
