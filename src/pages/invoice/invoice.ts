import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LogSaleService } from './../../providers/log_sale/log_sale'; 
import { UtilProvider } from './../../providers/util/util';

const SALELOGS = "salelogs";

@IonicPage()
@Component({
  selector: 'invoice',
  templateUrl: 'invoice.html',
})
export class InvoiceModal {
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

  saveLog() {
  	console.log("saving....");
    var loading = this.utility.presentLoadingDefault("Adding Sale Details ...");
  	if (navigator.onLine) {
      console.log("there is no internet");
      this.storage.get(SALELOGS).then((logs) => {
        if (logs) {
          var new_data;
          var old_data = [];

          this.params.user_id = this.user_id;
          new_data = this.params;
          old_data = logs;

          console.log("Old data:", old_data);
          console.log("New data:", new_data);

	      old_data.push(JSON.stringify(new_data));
	      this.storage.set(SALELOGS, old_data);
        this.saveBtnDisabled = true;
	      this.utility.showAlert(
	        "Success (No Internet)",
	        "Kindly Sync to Filterland Server when there is Internet"
	      );

        } else {
          this.params.user_id = this.user_id;
          this.storage.set(SALELOGS, [JSON.stringify(this.params)]);
          this.saveBtnDisabled = true;
          this.utility.showAlert(
            "Success (No Internet)",
            "Kindly Sync to Filterland Server when there is Internet"
          );
        }
      });
      loading.dismiss();
    }
    else {
      console.log("there is internet");
      this.params.user_id = this.user_id;
      console.log(this.params)
      this.logSaleService.addSale(this.params)
        .subscribe(
          //Success
          (response: HttpResponse<any>) => {
            let res: any;
            res = response;
            if (res.status == "error"){
              console.log(res);
              loading.dismiss();
              return this.utility.showAlert(
                "Error",
                res.errors
              );
            }  
            else if (res.status == "success"){
              loading.dismiss();
              this.saveBtnDisabled = true;
              return this.utility.showAlert(
                "Success",
                "Data has been added to Filterland Server"
              );
            }  
            loading.dismiss();
          },
          //Error
          (error: HttpErrorResponse) => {
            let err: any;
            err = error;
            loading.dismiss();
            console.log("error ", err);
            let message: string;
            if(err.status === 500 || !err.error.errors){
              message = "There were problem, possible network/internet or server errors, try again.";
            }
            else{
              if(err.error.errors){
                message = err.error.errors[0]
              }
            }
            this.utility.showAlert( "Error", message );
          },
          //Complete error.error.errors[0] ||
          () => {
            console.log("Completed");
          }
        );
    }
  }
}
