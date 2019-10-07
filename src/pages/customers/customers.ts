import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'customers',
  templateUrl: 'customers.html',
})
export class CustomersPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,  
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomersPage');
  }

  goToTabsPage() {
    this.navCtrl.setRoot(TabsPage)
  }

}
