import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { IonicPage, NavController, NavParams, TextInput, Content } from 'ionic-angular';
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
  indicator_classes: any = {
    'onlinebg': false,
    'offlinebg': false
  }

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
    // Set an interval of 30 minutes (1800000 milliseconds)
    setInterval(() => { 
      // The code that you want to run repeatedly
      if (!navigator.onLine) {
        this.indicator_classes.offlinebg = true;
        this.indicator_classes.onlinebg = true;
        this.internetIndicator.nativeElement.innerHTML = "Offline";

      } else {
        this.indicator_classes.offlinebg = false;
        this.indicator_classes.onlinebg = true;
        this.internetIndicator.nativeElement.innerHTML = "Online";
      }
    }, 2000);
  }

  goToTabsPage() {
    this.navCtrl.setRoot(TabsPage)
  }

  addCustomer(form: NgForm, customer: Customer): Promise<any> {
    var customerDetails: AddCustomer = {
      name: form.value.name || "",
      phone: form.value.phone || "",
      email: form.value.email || "",
      address: form.value.address || ""
    }
    if (form.invalid) {
      this.utility.showToast('Form cannot be empty.', 3000, 'toast-danger');
      return;
    }
    console.log("customer details:" + JSON.stringify(customerDetails));
    var loading = this.utility.presentLoadingDefault("Adding Customer Details ...");
    if (!navigator.onLine) {
      // Do task when no internet connection
      console.log("there is no internet");
      var cus = this.storage.set(CUSTOMERS, customer[]);
      console.log(JSON.stringify(cus));
      return this.storage.get(CUSTOMERS).then((customers: customer[]) => {
        if (customers) {
          customers.push(customer);
          return this.storage.set(CUSTOMERS, customers);
        } else {
          return this.storage.set(CUSTOMERS, [customer]);
        }
      });
      loading.dismiss();
      console.log(this.storage.get(CUSTOMERS));
    }
    else {
      console.log("there is internet");
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
              console.log(response)
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

}
