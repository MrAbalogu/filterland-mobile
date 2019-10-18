import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LogSaleService } from './../../providers/log_sale/log_sale'; 
import { UtilProvider } from './../../providers/util/util';

const SALELOGS = "salelogs";

@IonicPage()
@Component({
  selector: 'view_invoice',
  templateUrl: 'view_invoice.html',
})
export class ViewInvoiceModal {
  @ViewChild("internet_checker_indicator") internetIndicator: ElementRef;
  params: any = {};
  user_id: any;
  indicator_classes: any = {
    'onlinebg': false,
    'offlinebg': false
  };
  saveBtnDisabled: any = false;

  constructor(
  	public navParams: NavParams,
  	public viewCtrl: ViewController,
    private utility: UtilProvider,
  	private logSaleService: LogSaleService,
    private storage: Storage
  	) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoiceModal');
    this.params = this.navParams.data;
    console.log("params ", this.params);

    this.storage.get("user").then((u) => {
      this.user_id = u.data.id;
    });

    setInterval(() => { 
      // The code that you want to run repeatedly
      if (!navigator.onLine) {
        this.indicator_classes.offlinebg = true;
        this.indicator_classes.onlinebg = false;
        this.internetIndicator.nativeElement.innerHTML = "Offline";

      } else {
        this.indicator_classes.offlinebg = false;
        this.indicator_classes.onlinebg = true;
        this.internetIndicator.nativeElement.innerHTML = "Online";
      }
    }, 2000);

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
