webpackJsonp([2],{

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products__ = __webpack_require__(713);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductsPageModule = /** @class */ (function () {
    function ProductsPageModule() {
    }
    ProductsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__products__["a" /* ProductsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__products__["a" /* ProductsPage */]),
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__products__["a" /* ProductsPage */]]
        })
    ], ProductsPageModule);
    return ProductsPageModule;
}());

//# sourceMappingURL=products.module.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, NavParams) {
        this.navCtrl = navCtrl;
        this.NavParams = NavParams;
        this.tab1Root = 'DashboardPage';
        this.tab2Root = 'OrdersPage';
        this.tab3Root = 'ProfilePage';
        this.myindex = NavParams.data.tabindex;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/chineduabalogu/work/filterland-app/src/pages/tabs/tabs.html"*/'<ion-tabs [selectedIndex]="myindex" color="toolbar" class="myclass">\n  <ion-tab  [root]="tab1Root" tabTitle="Home" tabIcon="home" tabsHideOnSubPages="false"></ion-tab>\n  <ion-tab  [root]="tab2Root" tabTitle="Orders" tabIcon="paper" tabsHideOnSubPages="false"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Profile" tabIcon="contact" tabsHideOnSubPages="false"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/chineduabalogu/work/filterland-app/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_product_product__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util_util__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(702);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PRODUCTS = "products";
var ProductsPage = /** @class */ (function () {
    function ProductsPage(navCtrl, navParams, utility, storage, productService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utility = utility;
        this.storage = storage;
        this.productService = productService;
        this.searchTerm = "";
    }
    ProductsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductsPage');
        var nav = document.getElementById("searchNav");
        nav.style.display = "none";
        this.getProductsFromStorage();
    };
    ProductsPage.prototype.goToTabsPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
    };
    ProductsPage.prototype.setFilteredItems = function (searchTerm) {
        var _this = this;
        console.log(this.searchTerm);
        this.products = this.products_in_storage.filter(function (product) {
            console.log(product);
            return product.name.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
        });
    };
    ProductsPage.prototype.getProductsFromStorage = function () {
        var _this = this;
        var loading = this.utility.presentLoadingDefault("Fetching products from Server ...");
        this.storage.get(PRODUCTS).then(function (products) {
            if (products) {
                loading.dismiss();
                _this.products = products;
                _this.products_in_storage = products;
            }
            else {
                loading.dismiss();
                _this.getProductsFromServer();
            }
            console.log(products);
        });
    };
    ProductsPage.prototype.doRefresh = function (event) {
        console.log("event: ", event);
        this.getProductsFromServer();
        setTimeout(function () {
            console.log('Async operation has ended');
            event.complete();
        }, 1000);
    };
    ProductsPage.prototype.getProductsFromServer = function () {
        var _this = this;
        var loading = this.utility.presentLoadingDefault("Fetching products from Server ...");
        this.productService.getProducts()
            .subscribe(function (response) {
            var res = response;
            if (res == "error") {
                console.log("error: ", res);
                loading.dismiss();
                return _this.utility.showAlert("Error", "Something went wrong, Products did not fetch from server");
            }
            else {
                console.log("response: ", res);
                loading.dismiss();
                _this.storage.set(PRODUCTS, res.data);
                _this.navCtrl.push('ProductsPage');
            }
        }, function (error) {
            loading.dismiss();
            var message;
            if (error.status === 500 || !error.error.errors) {
                message = "There were problem, possible network or server errors, try again please.";
            }
            else {
                if (error.error.errors) {
                    message = error.error.errors[0];
                }
            }
            _this.utility.showAlert("Error", message);
        });
    };
    ProductsPage.prototype.openSearchInput = function () {
        var nav = document.getElementById("searchNav");
        var mainnav = document.getElementById("mainNav");
        mainnav.style.display = "none";
        nav.style.display = "block";
    };
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-products',template:/*ion-inline-start:"/Users/chineduabalogu/work/filterland-app/src/pages/products/products.html"*/'<ion-header>\n  <ion-navbar id="mainNav">\n      <ion-buttons class="menu-left" start>\n        <button class="start" ion-button ion-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <div class="home-title title-center" >\n        <ion-title >Products</ion-title>\n      </div>\n      <ion-buttons class="logout-btn" end>\n        <button ion-button ion-only style="color: #CF7A7A" (click)="openSearchInput()" >\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n  <ion-navbar id="searchNav">\n      <input class="searchinput" placeholder="Search Products" type="search" name="searchProducts" [(ngModel)]="searchTerm" (input)="setFilteredItems()">\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list id="hospitals" class="hospitals">\n      <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n      <div *ngFor="let product of this.products;">\n        <div class="h-listitem">\n          <img  class="hl-img" src="assets/imgs/oilfilter.png">\n\n          <ion-item  class="hl-info"><h4> {{ product.name }} </h4>\n            <span style="color: #50E3C2;">N{{ product.price }}</span>\n            <p>{{ product.description }}</p>\n            <p><span> Oil Filter </span> <span style="float: right">{{ product.partnumber }}</span></p>\n          </ion-item>\n          <div style="clear: both"></div>\n\n        </div>\n      </div>\n\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/chineduabalogu/work/filterland-app/src/pages/products/products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_product_product__["a" /* ProductService */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ })

});
//# sourceMappingURL=2.js.map