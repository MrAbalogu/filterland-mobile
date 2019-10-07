import { Component, ViewChild } from '@angular/core';
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
  @ViewChild("name") name: TextInput;
  @ViewChild("phone") phone: TextInput;
  @ViewChild("email") email: TextInput;
  @ViewChild("address") address: TextInput;

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
      name: this.name.value || "",
      phone: this.phone.value || "",
      email: this.email.value || "",
      address: this.address.value || ""
    }
    if (form.invalid) {
      this.utility.showToast('Form cannot be empty.', 3000, 'toast-danger');
      return;
    }
    console.log(customerDetails);
    var loading = this.utility.presentLoadingDefault("Adding Customer Details ...");
    this.customerService.addCustomer(customerDetails)
      .then(() => {
        loading.dismiss();
      })
      .catch((err) => {
        loading.dismiss();
        if (err === 'Unknown Error') {
            return this.utility.showToast('Cannot connect to server. Check network connection.', 3000, 'toast-danger');
        }
        this.utility.showToast('Invalid Login Credentials.', 3000, 'toast-danger');
      });

  }

}
