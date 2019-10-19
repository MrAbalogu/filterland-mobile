import { SocialSharing } from '@ionic-native/social-sharing/';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UtilProvider } from './../../providers/util/util';
import { AuthproviderProvider } from './../../providers/authprovider/authprovider';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'settings-page',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(
    public navCtrl: NavController, 
    private socialSharing: SocialSharing,
    private utility: UtilProvider,
    private auth: AuthproviderProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  share(){
    this.socialSharing.share("An Aggregator for on demand Healthcare Jobs in Nigeria. Register Now", "HealthJobber", "https://i.ibb.co/hXFNf1g/hjad.png", "https://healthjobber.herokuapp.com").then(() => {
    }).catch(() => {
    });
  }

  goToUrl(url){
    window.open(url); return false;
  }

  goToTabsPage() {
    this.navCtrl.setRoot(TabsPage);
  }

  comingSoon(){
    this.utility.showAlert( "Coming Soon", "Feature will be shipped in Version 2 of HealthJobber" );
  }

  public logout(): void {
    this.auth.logout(this.navCtrl);
  }

}
