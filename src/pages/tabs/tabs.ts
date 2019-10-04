import { DashboardPage } from './../dashboard/dashboard';
import { Component } from '@angular/core';
import { OrdersPage } from '../orders/orders';
import { ProfilePage } from '../profile/profile';
import { NavController, NavParams, IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root ='DashboardPage';
  tab2Root = 'OrdersPage';
  tab3Root = 'ProfilePage';   

  myindex: number;

  constructor(public navCtrl:NavController,public NavParams:NavParams) {
    this.myindex =NavParams.data.tabindex
  }
}
