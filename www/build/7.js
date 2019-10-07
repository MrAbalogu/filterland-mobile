webpackJsonp([7],{

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogSalesPageModule", function() { return LogSalesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log_sales__ = __webpack_require__(702);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LogSalesPageModule = /** @class */ (function () {
    function LogSalesPageModule() {
    }
    LogSalesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__log_sales__["a" /* LogSalesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__log_sales__["a" /* LogSalesPage */]),
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__log_sales__["a" /* LogSalesPage */]]
        })
    ], LogSalesPageModule);
    return LogSalesPageModule;
}());

//# sourceMappingURL=log_sales.module.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
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

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogSalesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(696);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogSalesPage = /** @class */ (function () {
    function LogSalesPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    LogSalesPage.prototype.presentModal = function () {
        this.navCtrl.push("InvoiceModal");
    };
    LogSalesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LogSalesPage');
    };
    LogSalesPage.prototype.goToTabsPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    LogSalesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'log-sales',template:/*ion-inline-start:"/Users/chineduabalogu/work/filterland-app/src/pages/log_sales/log_sales.html"*/'<ion-header>\n  <ion-navbar>\n      <div class="title-center" >\n        <ion-title >Log Sale</ion-title>\n      </div>\n      <ion-buttons end>\n        <button ion-button ion-only style="color: #CF7A7A" (click)="logout()" >\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <form>\n      <ion-row>\n        <ion-col>\n          <label class="log_sale_label">Customer First Name:</label>\n          <input class="log_sale_input" placeholder="First Name" type="text" name="firstname"/>\n        </ion-col>\n\n        <ion-col>\n          <label class="log_sale_label">Customer Last Name:</label>\n          <input class="log_sale_input" placeholder="Last Name" type="text" name="firstname"/>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <label class="log_sale_label">Customer Phone Number:</label>\n          <input class="log_sale_input" placeholder="Phone Number" type="text" name="phonenumber"/>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <label class="log_sale_label">Customer Email:</label>\n          <input class="log_sale_input" placeholder="Email Address" type="text" name="emailaddress"/>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <label class="log_sale_label">Customer Address:</label>\n          <textarea class="log_sale_input" placeholder="Address" type="textarea" name="emailaddress">\n          </textarea>\n        </ion-col>\n      </ion-row>\n\n      <div class="sale_item_container">\n        <ion-row>\n          <ion-col size="3">\n            <label class="log_sale_label">Product Name:</label>\n            <input class="log_sale_input" placeholder="Product Name" type="text" name="productname"/>\n          </ion-col>\n\n          <ion-col size="1" size-sm>\n            <label class="log_sale_label">Part Number:</label>\n            <input class="log_sale_input" placeholder="Part Number" type="text" name="partnumber"/>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <label class="log_sale_label">Carton/s:</label>\n            <input class="log_sale_input" type="number" name="carton"/>\n          </ion-col>\n\n          <ion-col>\n            <label class="log_sale_label">Quantity:</label>\n            <input class="log_sale_input" type="number" name="quantity"/>\n          </ion-col>\n\n          <ion-col>\n            <label class="log_sale_label">Price:</label>\n            <input class="log_sale_input" type="number" name="price"/>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <button ion-button size="small">+ Add more items</button>\n\n      <ion-row>\n        <ion-col>\n          <label class="log_sale_label">Paid:</label>\n            <input class="log_sale_input" type="number" name="paid"/>\n        </ion-col>\n\n        <ion-col>\n          <label class="log_sale_label">Total:</label>\n          <h4 style="margin:6px 0">848950</h4>\n        </ion-col>\n      </ion-row>\n\n      <ion-row > \n        <ion-col>\n        </ion-col>\n        <ion-col>\n          <button ion-button (click)="presentModal()" class="secondary_button"> Save & View Invoice </button>\n        </ion-col>\n        <ion-col>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </ion-grid>\n\n\n\n \n</ion-content>\n'/*ion-inline-end:"/Users/chineduabalogu/work/filterland-app/src/pages/log_sales/log_sales.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], LogSalesPage);
    return LogSalesPage;
}());

//# sourceMappingURL=log_sales.js.map

/***/ })

});
//# sourceMappingURL=7.js.map