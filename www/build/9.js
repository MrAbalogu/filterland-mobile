webpackJsonp([9],{

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomerPageModule", function() { return AddCustomerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_customer__ = __webpack_require__(699);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddCustomerPageModule = /** @class */ (function () {
    function AddCustomerPageModule() {
    }
    AddCustomerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_customer__["a" /* AddCustomerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_customer__["a" /* AddCustomerPage */]),
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__add_customer__["a" /* AddCustomerPage */]]
        })
    ], AddCustomerPageModule);
    return AddCustomerPageModule;
}());

//# sourceMappingURL=add_customer.module.js.map

/***/ }),

/***/ 697:
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

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util_util__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_customer_customer__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddCustomerPage = /** @class */ (function () {
    function AddCustomerPage(navCtrl, navParams, utility, customerService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utility = utility;
        this.customerService = customerService;
    }
    AddCustomerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddCustomerPage');
    };
    AddCustomerPage.prototype.goToTabsPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    AddCustomerPage.prototype.addCustomer = function (form) {
        var _this = this;
        var customerDetails = {
            name: this.name.value || "",
            phone: this.phone.value || "",
            email: this.email.value || "",
            address: this.address.value || ""
        };
        if (form.invalid) {
            this.utility.showToast('Form cannot be empty.', 3000, 'toast-danger');
            return;
        }
        console.log(customerDetails);
        var loading = this.utility.presentLoadingDefault("Adding Customer Details ...");
        this.customerService.addCustomer(customerDetails)
            .then(function () {
            loading.dismiss();
        })
            .catch(function (err) {
            loading.dismiss();
            if (err === 'Unknown Error') {
                return _this.utility.showToast('Cannot connect to server. Check network connection.', 3000, 'toast-danger');
            }
            _this.utility.showToast('Invalid Login Credentials.', 3000, 'toast-danger');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("addCustomerForm"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgForm */])
    ], AddCustomerPage.prototype, "addCustomerForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("name"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* TextInput */])
    ], AddCustomerPage.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("phone"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* TextInput */])
    ], AddCustomerPage.prototype, "phone", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("email"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* TextInput */])
    ], AddCustomerPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("address"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* TextInput */])
    ], AddCustomerPage.prototype, "address", void 0);
    AddCustomerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'add_customer',template:/*ion-inline-start:"/Users/chineduabalogu/work/filterland-app/src/pages/add_customer/add_customer.html"*/'<ion-header>\n  <ion-navbar>\n      <div class="title-center" >\n        <ion-title >Add Customer</ion-title>\n      </div>\n      <ion-buttons end>\n        <button ion-button ion-only style="color: #CF7A7A" (click)="logout()" >\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <form #addCustomerForm="ngForm" (ngSubmit)="addCustomer(addCustomerForm)">\n      <ion-row>\n        <ion-col>\n          <label class="log_sale_label">Customer Full Name:</label>\n          <input class="log_sale_input" placeholder="Full Name" type="text" name="name" #name ngModel/>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <label class="log_sale_label">Customer Phone Number:</label>\n          <input class="log_sale_input" placeholder="Phone Number" type="text" name="phonenumber" #phone ngModel/>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <label class="log_sale_label">Customer Email:</label>\n          <input class="log_sale_input" placeholder="Email Address" type="text" name="emailaddress" #email ngModel/>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <label class="log_sale_label">Customer Address:</label>\n          <textarea class="log_sale_input" placeholder="Address" type="textarea" name="address" #address ngModel>\n          </textarea>\n        </ion-col>\n      </ion-row>\n\n      <ion-row > \n        <ion-col>\n        </ion-col>\n        <ion-col>\n          <button ion-button type="submit" class="secondary_button" full [disabled]="!addCustomerForm.valid"> Submit </button>\n        </ion-col>\n        <ion-col>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n\n\n\n \n</ion-content>\n'/*ion-inline-end:"/Users/chineduabalogu/work/filterland-app/src/pages/add_customer/add_customer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_customer_customer__["a" /* CustomerService */]])
    ], AddCustomerPage);
    return AddCustomerPage;
}());

//# sourceMappingURL=add_customer.js.map

/***/ })

});
//# sourceMappingURL=9.js.map