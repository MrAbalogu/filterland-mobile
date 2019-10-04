import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams, ToastController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'pending-logs',
  templateUrl: 'pending_logs.html'
})
export class PendingLogs {

  constructor(public navCtrl: NavController,  public navParams: NavParams, public toastCtrl:ToastController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingLogsPage');
  }

  goToTabsPage() {
    this.navCtrl.setRoot(TabsPage)
  }
}
