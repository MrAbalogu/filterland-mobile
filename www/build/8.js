webpackJsonp([8],{

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomerPageModule", function() { return AddCustomerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_customer__ = __webpack_require__(719);
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

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_util__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_customer_customer__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CUSTOMERS = 'unsynced_customers';
var AddCustomerPage = /** @class */ (function () {
    function AddCustomerPage(navCtrl, navParams, utility, customerService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utility = utility;
        this.customerService = customerService;
        this.storage = storage;
        this.indicator_classes = {
            'onlinebg': false,
            'offlinebg': false
        };
        this.disableSyncButton = true;
    }
    AddCustomerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad AddCustomerPage');
        this.storage.get("user").then(function (u) {
            _this.user_id = u.data.id;
        });
        this.storage.get(CUSTOMERS).then(function (customers) {
            _this.customers = customers;
        });
        // Continously Check for Internet
        setInterval(function () {
            // The code that you want to run repeatedly
            if (!navigator.onLine) {
                _this.indicator_classes.offlinebg = true;
                _this.indicator_classes.onlinebg = false;
                _this.internetIndicator.nativeElement.innerHTML = "Offline";
            }
            else {
                _this.indicator_classes.offlinebg = false;
                _this.indicator_classes.onlinebg = true;
                _this.internetIndicator.nativeElement.innerHTML = "Online";
            }
        }, 2000);
    };
    AddCustomerPage.prototype.ionViewDidEnter = function () {
        console.log("entered");
        if (this.customers) {
            if (navigator.onLine) {
                this.disableSyncButton = false;
            }
            this.customersCount.nativeElement.innerHTML = this.customers.length;
        }
        else {
            this.disableSyncButton = true;
        }
    };
    AddCustomerPage.prototype.goToTabsPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    AddCustomerPage.prototype.addCustomer = function (form) {
        var _this = this;
        var customerDetails = {
            name: form.value.name || "",
            phone: form.value.phone || "",
            email: form.value.email || "",
            address: form.value.address || "",
            user_id: ""
        };
        if (form.invalid) {
            this.utility.showToast("Please fill form completely. You must fill Customer's email to submit", 3000, 'toast-danger');
            return;
        }
        var loading = this.utility.presentLoadingDefault("Adding Customer Details ...");
        console.log("new customer details:" + JSON.stringify(customerDetails));
        if (!navigator.onLine) {
            console.log("there is no internet");
            this.storage.get(CUSTOMERS).then(function (customers) {
                if (customers) {
                    var new_data;
                    var old_data = [];
                    var data_duplicate = false;
                    customerDetails.user_id = _this.user_id;
                    new_data = customerDetails;
                    old_data = customers;
                    console.log("Old data:", old_data);
                    console.log("New data:", new_data);
                    old_data.forEach(function (c) {
                        console.log("Emails: ", c.email);
                        if (c.email === new_data.email) {
                            data_duplicate = true;
                        }
                    });
                    if (data_duplicate === false) {
                        console.log('data stored');
                        old_data.push(new_data);
                        _this.storage.set(CUSTOMERS, old_data);
                        _this.navCtrl.push('AddCustomerPage');
                        _this.utility.showAlert("Success (No Internet)", "Kindly Sync to Filterland Server when there is Internet");
                    }
                    else {
                        _this.navCtrl.push('AddCustomerPage');
                        _this.utility.showAlert("Error", "Customer already exist");
                    }
                }
                else {
                    customerDetails.user_id = _this.user_id;
                    _this.storage.set(CUSTOMERS, [customerDetails]);
                    _this.navCtrl.push('AddCustomerPage');
                    _this.utility.showAlert("Success (No Internet)", "Kindly Sync to Filterland Server when there is Internet");
                }
            });
            loading.dismiss();
        }
        else {
            console.log("there is internet");
            customerDetails.user_id = this.user_id;
            console.log(customerDetails);
            this.customerService.addCustomer(customerDetails)
                .subscribe(
            //Success
            function (response) {
                if (!response.ok) {
                    loading.dismiss();
                    return _this.utility.showAlert("Error", "There were problems sending data to server, try again please.");
                }
                else if (response.body.status == "error") {
                    loading.dismiss();
                    return _this.utility.showAlert("Error", response.body.errors);
                }
                else if (response.body.status == "success") {
                    var customer_name = response.body.data.name;
                    loading.dismiss();
                    return _this.utility.showAlert("Success", customer_name + " has been added to Filterland Server");
                }
                loading.dismiss();
            }, 
            //Error
            function (error) {
                loading.dismiss();
                console.log(error);
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
            }, 
            //Complete error.error.errors[0] ||
            function () {
                console.log("Completed");
            });
        }
    };
    AddCustomerPage.prototype.syncFromStorageToServer = function () {
        var _this = this;
        // console.log(JSON.stringify(this.customers));
        var sync_parameters;
        // console.log(sync_parameters);
        sync_parameters.customers_array = this.customers;
        // console.log("params: ", JSON.stringify(sync_parameters));
        var loading = this.utility.presentLoadingDefault("Syncing Customers to Server ...");
        this.customerService.syncCustomersFromStorage(JSON.stringify(sync_parameters))
            .subscribe(function (response) {
            if (!response.ok) {
                var res = void 0;
                res = response;
                loading.dismiss();
                // console.log(response);
                _this.storage.remove(CUSTOMERS);
                _this.navCtrl.push('AddCustomerPage');
                return _this.utility.showAlert("Completed and Saved", res.saved);
            }
            else {
                var res = void 0;
                res = response;
                loading.dismiss();
                _this.storage.remove(CUSTOMERS);
                _this.navCtrl.push('AddCustomerPage');
                return _this.utility.showAlert("Completed and saved:", res.saved);
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
        }, function () {
            console.log("Completed");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("addCustomerForm"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgForm */])
    ], AddCustomerPage.prototype, "addCustomerForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("internet_checker_indicator"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AddCustomerPage.prototype, "internetIndicator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("customersCount"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AddCustomerPage.prototype, "customersCount", void 0);
    AddCustomerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'add_customer',template:/*ion-inline-start:"/Users/chineduabalogu/work/filterland-app/src/pages/add_customer/add_customer.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons class="menu-left" start>\n        <button class="start" ion-button ion-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <div class="home-title title-center" >\n        <ion-title >Add Customer</ion-title>\n      </div>\n      <ion-buttons class="logout-btn" end>\n        <div class="indicator" [ngClass]="indicator_classes" #internet_checker_indicator>\n          <ion-spinner class="check_network_spinner"></ion-spinner>\n        </div>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <form #addCustomerForm="ngForm" (ngSubmit)="addCustomer(addCustomerForm)">\n      <ion-row>\n        <ion-col>\n          <label class="log_sale_label">Customer Full Name:</label>\n          <input class="log_sale_input" placeholder="Full Name" type="text" name="name" #name ngModel required/>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <label class="log_sale_label">Customer Phone Number:</label>\n          <input class="log_sale_input" placeholder="Phone Number" type="text" name="phone" #phone ngModel />\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <label class="log_sale_label">Customer Email:</label>\n          <input class="log_sale_input" placeholder="Email Address" type="email" name="email" #email ngModel/>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <label class="log_sale_label">Customer Address:</label>\n          <textarea class="log_sale_input" placeholder="Address" type="textarea" name="address" #address ngModel>\n          </textarea>\n        </ion-col>\n      </ion-row>\n\n      <ion-row > \n        <ion-col>\n        </ion-col>\n        <ion-col>\n          <button ion-button type="submit" class="secondary_button" full [disabled]="!addCustomerForm.valid" > Submit </button>\n        </ion-col>\n        <ion-col>\n        </ion-col>\n      </ion-row>\n    </form>\n    <ion-row > \n      <ion-col>\n        <p><span class="customercount" #customersCount>0</span> Customer/s to Sync</p>\n      </ion-col>\n      <ion-col>\n        <button ion-button (click)="syncFromStorageToServer()" class="primary_button" full [disabled]="disableSyncButton" > Sync To Server </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n\n\n \n</ion-content>\n'/*ion-inline-end:"/Users/chineduabalogu/work/filterland-app/src/pages/add_customer/add_customer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_customer_customer__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], AddCustomerPage);
    return AddCustomerPage;
}());

//# sourceMappingURL=add_customer.js.map

/***/ })

});
//# sourceMappingURL=8.js.map