webpackJsonp([7],{

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersPageModule", function() { return CustomersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customers__ = __webpack_require__(703);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomersPageModule = /** @class */ (function () {
    function CustomersPageModule() {
    }
    CustomersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__customers__["a" /* CustomersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__customers__["a" /* CustomersPage */]),
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__customers__["a" /* CustomersPage */]]
        })
    ], CustomersPageModule);
    return CustomersPageModule;
}());

//# sourceMappingURL=customers.module.js.map

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

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__ = __webpack_require__(352);
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






var CUSTOMERS = "customers";
var CustomersPage = /** @class */ (function () {
    function CustomersPage(navCtrl, navParams, utility, storage, customerService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utility = utility;
        this.storage = storage;
        this.customerService = customerService;
        this.searchTerm = "";
    }
    CustomersPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CustomersPage');
        this.storage.get("user").then(function (u) {
            _this.user_id = u.data.id;
        });
        this.getCustomersFromStorage();
    };
    CustomersPage.prototype.goToTabsPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
    };
    CustomersPage.prototype.setFilteredItems = function (searchTerm) {
        var _this = this;
        console.log(this.searchTerm);
        this.customers = this.customers_in_storage.filter(function (customer) {
            console.log(customer);
            return customer.name.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
        });
    };
    CustomersPage.prototype.getCustomersFromStorage = function () {
        var _this = this;
        var loading = this.utility.presentLoadingDefault("Fetching Customers from Server ...");
        this.storage.get(CUSTOMERS).then(function (customers) {
            if (customers) {
                loading.dismiss();
                _this.customers = customers;
                _this.customers_in_storage = customers;
            }
            else {
                loading.dismiss();
                _this.getCustomersFromServer();
            }
            console.log(customers);
        });
    };
    CustomersPage.prototype.doRefresh = function (event) {
        console.log("event: ", event);
        this.getCustomersFromServer();
        setTimeout(function () {
            console.log('Async operation has ended');
            event.complete();
        }, 1000);
    };
    CustomersPage.prototype.getCustomersFromServer = function () {
        var _this = this;
        var loading = this.utility.presentLoadingDefault("Fetching Customers from Server ...");
        this.customerService.fetchCustomers()
            .subscribe(function (response) {
            var res = response;
            if (res == "error") {
                console.log("error: ", res);
                loading.dismiss();
                return _this.utility.showAlert("Error", "Something went wrong, Customers did not fetch from server");
            }
            else {
                console.log("response: ", res);
                loading.dismiss();
                _this.storage.set(CUSTOMERS, res.data);
                _this.navCtrl.push('CustomersPage');
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
    CustomersPage.prototype.openSearchInput = function () {
        var nav = document.getElementById("searchNav");
        var mainnav = document.getElementById("mainNav");
        mainnav.style.display = "none";
        nav.style.display = "block";
    };
    CustomersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'customers',template:/*ion-inline-start:"/Users/chineduabalogu/work/filterland-app/src/pages/customers/customers.html"*/'<ion-header>\n  <ion-navbar id="mainNav">\n      <ion-buttons class="menu-left" start>\n        <button class="start" ion-button ion-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <div class="home-title title-center" >\n        <ion-title >Customers</ion-title>\n      </div>\n      <ion-buttons class="logout-btn" end>\n        <button ion-button ion-only style="color: #CF7A7A" (click)="openSearchInput()" >\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n  <ion-navbar id="searchNav">\n      <input class="searchinput" placeholder="Search Products" type="search" name="searchProducts" [(ngModel)]="searchTerm" (input)="setFilteredItems()">\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list id="hospitals" class="hospitals">\n    <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <div *ngFor="let customer of this.customers;">\n      <div class="h-listitem">\n        <img  class="hl-img" src="assets/imgs/cust.png">\n\n        <ion-item  class="hl-info"><h4>Chinedu Abalogu</h4>\n          <span style="color: #50E3C2;">08125952646</span>\n          <p>chineduabalogu@yahoo.com</p>\n          <p><span>Score: 56</span></p>\n        </ion-item>\n        <div style="clear: both"></div>\n      </div>\n    </div>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/chineduabalogu/work/filterland-app/src/pages/customers/customers.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_util_util__["a" /* UtilProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_util_util__["a" /* UtilProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__["a" /* CustomerService */]) === "function" && _e || Object])
    ], CustomersPage);
    return CustomersPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=customers.js.map

/***/ })

});
//# sourceMappingURL=7.js.map