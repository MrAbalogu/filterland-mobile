import { Component } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { LogSaleService } from './../../providers/log_sale/log_sale'; 
import { UtilProvider } from './../../providers/util/util';
import { TabsPage } from '../tabs/tabs';
import { SaleInvoiceModal } from '../sale_invoice/sale_invoice';

const SALES = "sales";

@IonicPage()
@Component({
  selector: 'recent-sales',
  templateUrl: 'recent_sales.html',
})
export class RecentSalesPage {
  sales: any;
  sales_in_storage: any;
  user_id: any;
  searchTerm: string = "";
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private utility: UtilProvider,
    private storage: Storage,
    private modalCtrl: ModalController,
    private saleService: LogSaleService
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecentSalesPage');
    var nav = document.getElementById("searchNav");
    nav.style.display = "none";

    this.storage.get("user").then((u) => {
      this.user_id = u.data.id;
    });

    this.getSalesFromStorage();
  }

  setFilteredItems(searchTerm) {
    console.log(this.searchTerm);
    this.sales = this.sales_in_storage.filter((sale) => {
      console.log(sale);
      return sale.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }

  getClass(i) {
    if (i % 2 === 0){
      return 'log_card';
    } else {
      return 'log_card_2';
    }
  }

  viewInvoice(logDetails) {
    let invoiceModal = this.modalCtrl.create(SaleInvoiceModal, logDetails);
    invoiceModal.present();
    console.log(logDetails.customer);
  }

  getSalesFromStorage() {
    // var loading = this.utility.presentLoadingDefault("Fetching sales from Server ...");
    this.storage.get(SALES).then((sales) => {
      if(sales){
        // loading.dismiss();
        this.sales = sales;
        this.sales_in_storage = sales;
      } else {
        // loading.dismiss();
        this.getSalesFromServer();
      }
      console.log(sales);
    });
  }

  doRefresh(event) {
    console.log("event: ", event);
    this.getSalesFromServer();
    
    setTimeout(() => {
      console.log('Async operation has ended');
      event.complete();
    }, 1000);
  }

  getSalesFromServer() {
    var loading = this.utility.presentLoadingDefault("Fetching sales from Server ...");
    this.saleService.getRecentSales(this.user_id)
      .subscribe(
        async (response: HttpResponse<any>) => {
          var res = await response.body;
          if (res.status === "error") {
            console.log("error: ", res);
            loading.dismiss();
            return this.utility.showAlert(
              "Error",
              "Something went wrong, Sales did not fetch from server"
            );
          }
          else {
            console.log("response: ", res);
            loading.dismiss();
            this.storage.set(SALES, res.data);
            this.navCtrl.push('RecentSalesPage');
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
        }
      );
  }

  openSearchInput() {
    var nav = document.getElementById("searchNav");
    var mainnav = document.getElementById("mainNav");
    mainnav.style.display = "none";
    nav.style.display = "block";
  }

  goToTabsPage() {
    this.navCtrl.push("TabsPage");
  }

}
