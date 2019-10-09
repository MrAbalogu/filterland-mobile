import { Component, ViewChild } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { IonicPage, NavController, NavParams, TextInput } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Customer } from '../../models/customer';
import { AddCustomer } from '../../models/customer';
import { UtilProvider } from './../../providers/util/util';
import { CustomerService } from './../../providers/customer/customer';

@IonicPage()
@Component({
  selector: 'add_customer',
  templateUrl: 'add_customer.html',
})

export class AddCustomerPage {

  @ViewChild("addCustomerForm") addCustomerForm: NgForm;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,  
    private utility: UtilProvider,
    private customerService: CustomerService
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCustomerPage');
  }

  goToTabsPage() {
    this.navCtrl.setRoot(TabsPage)
  }

  addCustomer(form: NgForm): void {
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
    this.customerService.addCustomer(customerDetails)
      .subscribe(
        //Success
        (response: HttpResponse<any>) => {
          if (!navigator.onLine) {
            //Do task when no internet connection
            console.log("there is no internet");
          }
          else {
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
          this.utilService.showAlert( "Error", message );
        },
        //Complete error.error.errors[0] ||
        () => {
          console.log("Completed");
        }
      );

  }

}
