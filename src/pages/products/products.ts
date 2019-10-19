import { Component } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductService } from './../../providers/product/product'; 
import { UtilProvider } from './../../providers/util/util';
import { TabsPage } from '../tabs/tabs';

const PRODUCTS = "products";

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
  products: any;
  products_in_storage: any;
  searchTerm: string = "";
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private utility: UtilProvider,
    private storage: Storage,
    private productService: ProductService
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
    var nav = document.getElementById("searchNav");
    nav.style.display = "none";

    this.getProductsFromStorage();
  }

  goToTabsPage() {
    this.navCtrl.setRoot(TabsPage)
  }

  setFilteredItems(searchTerm) {
    console.log(this.searchTerm);
    this.products = this.products_in_storage.filter((product) => {
      console.log(product)
      return product.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }

  getProductsFromStorage() {
    // var loading = this.utility.presentLoadingDefault("Fetching products from Server ...");
    this.storage.get(PRODUCTS).then((products) => {
      if(products){
        // loading.dismiss();
        this.products = products;
        this.products_in_storage = products;
      } else {
        // loading.dismiss();
        this.getProductsFromServer();
      }
      console.log(products);
    });
  }  

  doRefresh(event) {
    console.log("event: ", event);
    this.getProductsFromServer();
    
    setTimeout(() => {
      console.log('Async operation has ended');
      event.complete();
    }, 1000);
  }

  getProductsFromServer() {
    var loading = this.utility.presentLoadingDefault("Fetching products from Server ...");
    this.productService.getProducts()
      .subscribe(
        async (response: HttpResponse<any>) => {
          var res = await response.body;
          console.log("res ",response);
          console.log("myres ",res);
          if (res.status === "error") {
            console.log("error: ", res);
            loading.dismiss();
            return this.utility.showAlert(
              "Error",
              "Something went wrong, Products did not fetch from server"
            );
          }
          else {
            console.log("response: ", res);
            loading.dismiss();
            this.storage.set(PRODUCTS, res["data"]);
            this.navCtrl.push('ProductsPage');
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
      )
  }

  openSearchInput() {
    var nav = document.getElementById("searchNav");
    var mainnav = document.getElementById("mainNav");
    mainnav.style.display = "none";
    nav.style.display = "block";
  }

}
