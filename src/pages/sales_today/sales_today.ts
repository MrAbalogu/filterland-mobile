import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'sales_today-page',
  templateUrl: 'sales_today.html',
})
export class SalesTodayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalesTodayPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
