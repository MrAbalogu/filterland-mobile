import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
    var nav = document.getElementById("searchNav");
    nav.style.display = "none";
  }

  goToTabsPage() {
    this.navCtrl.setRoot(TabsPage)
  }

  searchProducts() {
    var nav = document.getElementById("searchNav");
    var mainnav = document.getElementById("mainNav");
    mainnav.style.display = "none";
    nav.style.display = "block";
  }

}
