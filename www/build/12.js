webpackJsonp([12],{

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentSalesPageModule", function() { return RecentSalesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recent_sales__ = __webpack_require__(715);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RecentSalesPageModule = /** @class */ (function () {
    function RecentSalesPageModule() {
    }
    RecentSalesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__recent_sales__["a" /* RecentSalesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recent_sales__["a" /* RecentSalesPage */]),
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__recent_sales__["a" /* RecentSalesPage */]]
        })
    ], RecentSalesPageModule);
    return RecentSalesPageModule;
}());

//# sourceMappingURL=recent_sales.module.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentSalesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_log_sale_log_sale__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util_util__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SALES = "sales";
var RecentSalesPage = /** @class */ (function () {
    function RecentSalesPage(navCtrl, navParams, utility, storage, saleService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utility = utility;
        this.storage = storage;
        this.saleService = saleService;
        this.searchTerm = "";
    }
    RecentSalesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad RecentSalesPage');
        var nav = document.getElementById("searchNav");
        nav.style.display = "none";
        this.storage.get("user").then(function (u) {
            _this.user_id = u.data.id;
        });
        this.getSalesFromStorage();
    };
    RecentSalesPage.prototype.setFilteredItems = function (searchTerm) {
        var _this = this;
        console.log(this.searchTerm);
        this.sales = this.sales_in_storage.filter(function (sale) {
            console.log(sale);
            return sale.name.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
        });
    };
    RecentSalesPage.prototype.getSalesFromStorage = function () {
        var _this = this;
        var loading = this.utility.presentLoadingDefault("Fetching sales from Server ...");
        this.storage.get(SALES).then(function (sales) {
            if (sales) {
                loading.dismiss();
                _this.sales = sales;
                _this.sales_in_storage = sales;
            }
            else {
                loading.dismiss();
                _this.getSalesFromServer();
            }
            console.log(sales);
        });
    };
    RecentSalesPage.prototype.doRefresh = function (event) {
        console.log("event: ", event);
        this.getSalesFromServer();
        setTimeout(function () {
            console.log('Async operation has ended');
            event.complete();
        }, 1000);
    };
    RecentSalesPage.prototype.getSalesFromServer = function () {
        var _this = this;
        var loading = this.utility.presentLoadingDefault("Fetching sales from Server ...");
        this.saleService.getRecentSales(this.user_id)
            .subscribe(function (response) {
            var res = response;
            if (res == "error") {
                console.log("error: ", res);
                loading.dismiss();
                return _this.utility.showAlert("Error", "Something went wrong, Sales did not fetch from server");
            }
            else {
                console.log("response: ", res);
                loading.dismiss();
                _this.storage.set(SALES, res.data);
                _this.navCtrl.push('RecentSalesPage');
            }
        }, function (error) {
            loading.dismiss();
            // console.log(error);
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
    RecentSalesPage.prototype.openSearchInput = function () {
        var nav = document.getElementById("searchNav");
        var mainnav = document.getElementById("mainNav");
        mainnav.style.display = "none";
        nav.style.display = "block";
    };
    RecentSalesPage.prototype.goToTabsPage = function () {
        this.navCtrl.push("TabsPage");
    };
    RecentSalesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'recent-sales',template:/*ion-inline-start:"/Users/chineduabalogu/work/filterland-app/src/pages/recent_sales/recent_sales.html"*/'<ion-header>\n  <ion-navbar id="mainNav">\n    <ion-buttons class="menu-left" start>\n      <button ion-button (click)="goToTabsPage()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <div class="title-center" >\n      <ion-title >Recent Sales</ion-title>\n    </div>\n    <ion-buttons class="logout-btn" end>\n      <button ion-button ion-only style="color: #CF7A7A" (click)="openSearchInput()" >\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-navbar id="searchNav">\n      <input class="searchinput" placeholder="Search Products" type="search" name="searchProducts" [(ngModel)]="searchTerm" (input)="setFilteredItems()">\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid>\n\n    <div *ngFor="let sale of this.sales; index as i;">\n      <div [ngClass]="getClass(i)" (click)="viewInvoice(sale)">\n        <ion-row>\n          <ion-col>\n            <p>Customer Name: <b>{{ sale.name }}</b></p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <p>Paid: <b>N{{ sale.paid }}</b></p>\n          </ion-col>\n        </ion-row> \n\n        <ion-row>\n          <ion-col>\n            <p class="supplied">Supplied</p>\n          </ion-col>\n          <ion-col>\n            <p>Total: <b>N{{ sale.total }}</b></p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  \n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/chineduabalogu/work/filterland-app/src/pages/recent_sales/recent_sales.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_log_sale_log_sale__["a" /* LogSaleService */]])
    ], RecentSalesPage);
    return RecentSalesPage;
}());

//# sourceMappingURL=recent_sales.js.map

/***/ })

});
//# sourceMappingURL=12.js.map