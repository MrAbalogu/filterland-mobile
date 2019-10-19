import { Component } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomerService } from './../../providers/customer/customer'; 
import { UtilProvider } from './../../providers/util/util';
import { TabsPage } from '../tabs/tabs';

const CUSTOMERS = "customers";

@IonicPage()
@Component({
  selector: 'customers',
  templateUrl: 'customers.html',
})
export class CustomersPage {
  user_id: any;
  customers: any;
  customers_in_storage: any;
  searchTerm: string = "";
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private utility: UtilProvider,
    private storage: Storage,
    private customerService: CustomerService
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomersPage');
    this.storage.get("user").then((u) => {
      this.user_id = u.data.id;
    });
    this.getCustomersFromStorage();
  }

  goToTabsPage() {
    this.navCtrl.setRoot(TabsPage)
  }

  setFilteredItems(searchTerm) {
    console.log(this.searchTerm);
    this.customers = this.customers_in_storage.filter((customer) => {
      console.log(customer)
      return customer.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }

  getCustomersFromStorage() {
    // var loading = this.utility.presentLoadingDefault("Fetching Customers from Server ...");
    this.storage.get(CUSTOMERS).then((customers) => {
      if(customers){
        // loading.dismiss();
        this.customers = customers;
        this.customers_in_storage = customers;
      } else {
        // loading.dismiss();
        this.getCustomersFromServer();
      }
      console.log(customers);
    });
  }

  doRefresh(event) {
    console.log("event: ", event);
    this.getCustomersFromServer();
    
    setTimeout(() => {
      console.log('Async operation has ended');
      event.complete();
    }, 1000);
  }

  getCustomersFromServer() {
    var loading = this.utility.presentLoadingDefault("Fetching Customers from Server ...");
    this.customerService.fetchCustomers(this.user_id)
      .subscribe(
        async (response: HttpResponse<any>) => {
          var res = await response.body;
          if (res.status === "error") {
            console.log("error: ", response);
            loading.dismiss();
            return this.utility.showAlert(
              "Error",
              "Something went wrong, Customers did not fetch from server"
            );
          }
          else {
            console.log("response: ", res);
            loading.dismiss();
            this.storage.set(CUSTOMERS, res.data);
            this.navCtrl.push('CustomersPage');
          } 
        },
        (error: HttpErrorResponse) => {
          loading.dismiss();
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
        }
      );
  }

  openSearchInput() {
    var nav = document.getElementById("searchNav");
    var mainnav = document.getElementById("mainNav");
    mainnav.style.display = "none";
    nav.style.display = "block";
  }

}
