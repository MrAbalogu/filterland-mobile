import { RequestsPage } from './../requests/requests';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-reports',
  templateUrl: 'recent_sales.html',
})
export class RecentSalesPage {
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecentSalesPage');
  }

  showModal() {
    var modal = this.modalCtrl.create(RequestsPage);
    modal.present();
  }
  goToTabsPage() {
    this.navCtrl.setRoot(TabsPage)
  }

}
