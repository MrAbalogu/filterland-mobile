import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { NavController, IonicPage, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
import { LogSaleService } from './../../providers/log_sale/log_sale'; 
import { UtilProvider } from './../../providers/util/util';
import { ViewInvoiceModal } from '../view_invoice/view_invoice';

const SALELOGS = "salelogs";

@IonicPage()
@Component({
  selector: 'pending-logs',
  templateUrl: 'pending_logs.html'
})
export class PendingLogs {
  @ViewChild("internet_checker_indicator") internetIndicator: ElementRef;
  @ViewChild("logsCount") logsCount: ElementRef;
  user_id: any;
  logs: any;
  pending_logs: any = [];
  parameters: any = {};
  indicator_classes: any = {
    'onlinebg': false,
    'offlinebg': false
  };
  card_styles: any = {
  	'log_card': false,
  	'log_card_2': false 
  }
  disableSyncButton: boolean = true;

  constructor(
  	public navCtrl: NavController,
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    private utility: UtilProvider,
    private storage: Storage,
    private modalCtrl: ModalController,
    private logSaleService: LogSaleService
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingLogsPage');

    this.storage.get("user").then((u) => {
      this.user_id = u.data.id;
    });

    this.storage.get(SALELOGS).then((logs) => {
      this.logs = logs;
      console.log(logs);
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

  ionViewDidEnter() {
    console.log("entered");
    if (this.logs){
      if (navigator.onLine) {
        this.disableSyncButton = false;
      }
      this.logsCount.nativeElement.innerHTML = this.logs.length;
    } else {
      this.disableSyncButton = true;
    }

    this.logs.forEach((l) => {
      console.log(JSON.parse(l));
      this.pending_logs.push(JSON.parse(l));
    })
  }

  viewInvoice(logDetails) {
    let invoiceModal = this.modalCtrl.create(ViewInvoiceModal, logDetails);
    invoiceModal.present();
    console.log(logDetails);
  }

  getClass(i) {
  	if (i % 2 === 0){
  		return 'log_card';
  	} else {
  		return 'log_card_2';
  	}
  }

  sendToServer(){
  	console.log(this.pending_logs);
  }

  goToTabsPage() {
    this.navCtrl.setRoot(TabsPage);
  }

  syncFromStorageToServer() {
    this.parameters.logs_array = this.pending_logs;
    // console.log("params: ", JSON.stringify(sync_parameters));
    var loading = this.utility.presentLoadingDefault("Syncing Logs to Server ...");
    this.logSaleService.syncSalesFromStorage(this.parameters)
      .subscribe(
        (response: HttpResponse<any>) => {
          if (!response.ok) {
            let res: any;
            res = response;
            loading.dismiss();
            // console.log(response);
            this.storage.remove(SALELOGS);
            this.navCtrl.push('AddCustomerPage');
            return this.utility.showAlert(
              "Completed and Saved",
              res.saved.length + "Logs saved"
            );
          }
          else {
            let res: any;
            res = response;
            loading.dismiss();
            this.storage.remove(SALELOGS);
            this.navCtrl.push('AddCustomerPage');
            return this.utility.showAlert(
              "Completed and saved:",
              res.saved.length + "Logs saved"
            );
          }  
        },
        (error: HttpErrorResponse) => {
          loading.dismiss();
            // console.log(error);
            let message: string;
            if(error.status === 500 || !error.error.errors){
              message = "There were problem, possible network or server errors, try again please.";
            }
            else{
              if(error.error.errors){
                message = error.error.errors[0]
              }
            }
            this.utility.showAlert( "Error", message );
        },
        () => {
          console.log("Completed");
        }
      );
  }
}
