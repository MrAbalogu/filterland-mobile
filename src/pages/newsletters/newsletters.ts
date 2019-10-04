import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'newsletters-page',
  templateUrl: 'newsletters.html',
})
export class NewslettersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewslettersPage');
  }

  goToTabsPage() {
    this.navCtrl.setRoot(TabsPage)
  }


}
