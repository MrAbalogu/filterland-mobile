import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
import { Customer } from '../../models/customer';
import { AddCustomer } from '../../models/customer';
import { UtilProvider } from './../../providers/util/util';
import { CustomerService } from './../../providers/customer/customer'; 

const CUSTOMERS = 'customers';

@IonicPage()
@Component({
  selector: 'add_customer',
  templateUrl: 'add_customer.html',
})

export class AddCustomerPage {

  @ViewChild("addCustomerForm") addCustomerForm: NgForm;
  @ViewChild("internet_checker_indicator") internetIndicator: ElementRef;
  @ViewChild("customersCount") customersCount: ElementRef;
  indicator_classes: any = {
    'onlinebg': false,
    'offlinebg': false
  };
  user_id: any;
  customers: any;
  disableSyncButton: boolean = true;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,  
    private utility: UtilProvider,
    private customerService: CustomerService,
    private storage: Storage
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCustomerPage');
    this.storage.get("user").then((u) => {
      this.user_id = u.data.id;
    });
    this.storage.get(CUSTOMERS).then((customers) => {
      this.customers = customers;
    });

    // Set an interval of 30 minutes (1800000 milliseconds)
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
    console.log(this.customers.length);
    if (this.customers){
      this.disableSyncButton = false;
      this.customersCount.nativeElement.innerHTML = this.customers.length;
    } else {
      this.disableSyncButton = true;
    }
  }

  goToTabsPage() {
    this.navCtrl.setRoot(TabsPage)
  }

  addCustomer(form: NgForm): Promise<any> {
    console.log("customers: " + this.customers);
    var customerDetails: AddCustomer = {
      name: form.value.name || "",
      phone: form.value.phone || "",
      email: form.value.email || "",
      address: form.value.address || ""
    }
    if (form.invalid) {
      this.utility.showToast("Please fill form completely. You must fill Customer's email to submit", 3000, 'toast-danger');
      return;
    } else {
      this.disableSubmitButton = false;
    }
    var loading = this.utility.presentLoadingDefault("Adding Customer Details ...");

    console.log("new customer details:" + JSON.stringify(customerDetails));
    if (!navigator.onLine) {
      // Do task when no internet connection
      console.log("there is no internet");
      this.storage.get(CUSTOMERS).then((customers) => {
        if (customers) {
          var new_data = [];
          var uniq_arr = [];
          var old_data = [];

          new_data.push(customerDetails);
          old_data = customers;

          uniq_arr = old_data.filter(val => !new_data.includes(val));
          uniq_arr.user_id = this.user_id;

          this.utility.showAlert(
            "Success (No Internet)",
            "Customer will sync to Filterland Server when there is Internet"
          );

          return this.storage.set(CUSTOMERS, uniq_arr);
        } else {

          this.utility.showAlert(
            "Success (No Internet)",
            "Customer will sync to Filterland Server when there is Internet"
          );

          return this.storage.set(CUSTOMERS, [customerDetails]);
        }
      });
      loading.dismiss();
    }
    else {
      console.log("there is internet");
      customerDetails.user_id = this.user_id;
      console.log(customerDetails)
      this.customerService.addCustomer(customerDetails)
        .subscribe(
          //Success
          (response: HttpResponse<any>) => {
            if (!response.ok) {
              loading.dismiss();
              return this.utility.showAlert(
                "Error",
                "There were problems logging you in, try again please."
              );
            }
            else if (response.body.status == "error"){
              loading.dismiss();
              return this.utility.showAlert(
                "Error",
                response.body.errors
              );
            }  
            else if (response.body.status == "success"){
              var customer_name = response.body.data.name
              loading.dismiss();
              return this.utility.showAlert(
                "Success",
                 customer_name + " has been added to Filterland Server"
              );
            }  
            loading.dismiss();
          },
          //Error
          (error: HttpErrorResponse) => {
            loading.dismiss();
            console.log(error);
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
          //Complete error.error.errors[0] ||
          () => {
            console.log("Completed");
          }
        );
    }
  }

  syncDateFromStorageToServer() {
    console.log(this.customers);

    // this.customerService.syncCustomersFromStorage(this.customers)
    //   .subscribe(
    //     (response: HttpResponse<any>) => {

    //     },
    //     (error: HttpErrorResponse) => {

    //     }
    //     () => {
    //       console.log("Completed");
    //     }
    //   );
  }

}
