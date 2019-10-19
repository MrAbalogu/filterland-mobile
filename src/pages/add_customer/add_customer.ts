import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
import { AddCustomer } from '../../models/customer';
import { UtilProvider } from './../../providers/util/util';
import { CustomerService } from './../../providers/customer/customer'; 

const CUSTOMERS = 'unsynced_customers';

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
  sync_parameters: any;

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

    this.sync_parameters = {};

    // Continously Check for Internet
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
    if (this.customers){
      if (navigator.onLine) {
        this.disableSyncButton = false;
      }
      this.customersCount.nativeElement.innerHTML = this.customers.length;
    } else {
      this.disableSyncButton = true;
    }
  }

  goToTabsPage() {
    this.navCtrl.setRoot(TabsPage)
  }

  addCustomer(form: NgForm): Promise<any> {
    var customerDetails: AddCustomer = {
      name: form.value.name || "",
      phone: form.value.phone || "",
      email: form.value.email || "",
      address: form.value.address || "",
      user_id: ""
    }
    if (form.invalid) {
      this.utility.showToast("Please fill form completely. You must fill Customer's email to submit", 3000, 'toast-danger');
      return;
    }
    var loading = this.utility.presentLoadingDefault("Adding Customer Details ...");

    console.log("new customer details:" + JSON.stringify(customerDetails));

    if (!navigator.onLine) {
      console.log("there is no internet");
      this.storage.get(CUSTOMERS).then((customers) => {
        if (customers) {
          var new_data;
          var old_data = [];
          var data_duplicate = false;

          customerDetails.user_id = this.user_id;
          new_data = customerDetails;
          old_data = customers;

          console.log("Old data:", old_data);
          console.log("New data:", new_data);

          old_data.forEach((c) => {
            console.log("Emails: ", c.email);
            if(c.email === new_data.email){
              data_duplicate = true;
            }
          })

          if (data_duplicate === false) {
            console.log('data stored');
            old_data.push(new_data);
            this.storage.set(CUSTOMERS, old_data);
            this.navCtrl.push('AddCustomerPage');
            this.utility.showAlert(
              "Success (No Internet)",
              "Kindly Sync to Filterland Server when there is Internet"
            );
          } else {
            this.navCtrl.push('AddCustomerPage');
            this.utility.showAlert(
              "Error",
              "Customer already exist"
            );
          }

        } else {
          customerDetails.user_id = this.user_id;
          this.storage.set(CUSTOMERS, [customerDetails]);
          this.navCtrl.push('AddCustomerPage');
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
                "There were problems sending data to server, try again please."
              );
            }
            else if (response.body.status == "error"){
              loading.dismiss();
              return this.utility.showAlert(
                "Error",
                response.body.errors
              );
            }  
            else if (response.body.body.status == "success"){
              var customer_name = response.body.data.name
              loading.dismiss();
              return this.utility.showAlert(
                "Success",
                 customer_name + " has been added to Filterland Server"
              );
            }  
            console.log(response);
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

  syncFromStorageToServer() {
    console.log(this.sync_parameters);
    console.log(this.user_id);
    console.log(this.customers);
    this.sync_parameters.customers_array = this.customers;
    // console.log("params: ", JSON.stringify(sync_parameters));
    var loading = this.utility.presentLoadingDefault("Syncing Customers to Server ...");
    this.customerService.syncCustomersFromStorage(JSON.stringify(this.sync_parameters))
      .subscribe(
        (response: HttpResponse<any>) => {
          if (!response.ok) {
            let res: any;
            res = response;
            loading.dismiss();
            // console.log(response);
            this.storage.remove(CUSTOMERS);
            this.navCtrl.push('AddCustomerPage');
            return this.utility.showAlert(
              "Completed and Saved",
             res.saved
            );
          }
          else {
            let res: any;
            res = response;
            loading.dismiss();
            this.storage.remove(CUSTOMERS);
            this.navCtrl.push('AddCustomerPage');
            return this.utility.showAlert(
              "Completed and saved:",
              res.saved
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
