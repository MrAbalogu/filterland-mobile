webpackJsonp([19],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SettingsProvider = /** @class */ (function () {
    function SettingsProvider(HttpClient) {
        this.HttpClient = HttpClient;
        this.theme = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["BehaviorSubject"]('dark-theme');
    }
    SettingsProvider.prototype.setActiveTheme = function (val) {
        this.theme.next(val);
    };
    SettingsProvider.prototype.getActiveTheme = function () {
        return this.theme.asObservable();
    };
    SettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SettingsProvider);
    return SettingsProvider;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthproviderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_util__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var USER = 'user';
var AuthproviderProvider = /** @class */ (function () {
    function AuthproviderProvider(http, storage, utility, appCtrl) {
        this.http = http;
        this.storage = storage;
        this.utility = utility;
        this.appCtrl = appCtrl;
        this.baseUrl = 'https://filterland-api.herokuapp.com/api/v1';
    }
    AuthproviderProvider.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post(this.baseUrl + "/auth/sign_in", { email: email, password: password })
            .toPromise()
            .then(function (user) {
            _this.storage.set(USER, user);
            if (user) {
                localStorage.setItem("currentuser", 'Signedin');
            }
            return user;
        })
            .then(function () {
            return Promise.resolve();
        })
            .catch(function (error) {
            console.log(error);
            return Promise.reject(error.statusText);
        });
    };
    AuthproviderProvider.prototype.logout = function (navCtrl) {
        var _this = this;
        this.utility.presentAlertConfirm('Confirm Logout..', 'Are you sure you want to <strong>Log out</strong> of this application?', function () {
            _this.storage.remove(USER)
                .then(function (res) {
                localStorage.removeItem('currentuser');
                _this.appCtrl.getRootNav().setRoot('IntroPage');
            })
                .catch(function (err) {
                console.error(err);
            });
        });
    };
    AuthproviderProvider.prototype.hasAuthentication = function () {
        return this.storage.get(USER).then(function (res) {
            if (res) {
                return Promise.resolve(true);
            }
            else {
                return Promise.resolve(false);
            }
        });
    };
    AuthproviderProvider.prototype.forgotPassword = function (email) {
        return this.http.post(this.baseUrl + "/enroleeauth/password", { email: email })
            .toPromise()
            .then(function (res) {
            return Promise.resolve(res);
        })
            .catch(function (err) {
            return Promise.reject(err);
        });
    };
    AuthproviderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], AuthproviderProvider);
    return AuthproviderProvider;
}());

//# sourceMappingURL=authprovider.js.map

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add_customer/add_customer.module": [
		682,
		9
	],
	"../pages/customers/customers.module": [
		683,
		8
	],
	"../pages/dashboard/dashboard.module": [
		684,
		18
	],
	"../pages/intro/intro.module": [
		685,
		15
	],
	"../pages/invoice/invoice.module": [
		686,
		17
	],
	"../pages/log_sales/log_sales.module": [
		687,
		0
	],
	"../pages/login/login.module": [
		688,
		7
	],
	"../pages/newsletters/newsletters.module": [
		689,
		6
	],
	"../pages/orders/orders.module": [
		690,
		14
	],
	"../pages/pending_logs/pending_logs.module": [
		691,
		5
	],
	"../pages/pending_supplies/pending_supplies.module": [
		692,
		4
	],
	"../pages/products/products.module": [
		693,
		3
	],
	"../pages/profile/profile.module": [
		694,
		13
	],
	"../pages/recent_sales/recent_sales.module": [
		695,
		1
	],
	"../pages/requests/requests.module": [
		696,
		12
	],
	"../pages/sales_today/sales_today.module": [
		697,
		11
	],
	"../pages/settings/settings.module": [
		698,
		2
	],
	"../pages/tabs/tabs.module": [
		699,
		10
	],
	"../pages/view_invoice/view_invoice.module": [
		700,
		16
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 209;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authprovider_authprovider__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams, settings, storage, auth, AlertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settings = settings;
        this.storage = storage;
        this.auth = auth;
        this.AlertController = AlertController;
        this.nextPage = 'AboutPage';
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.goToAbstractPage = function () {
        this.navCtrl.push('AbstractPage');
    };
    DashboardPage.prototype.goToLogSaleModal = function () {
        this.navCtrl.push('LogSalesPage');
    };
    DashboardPage.prototype.goToPendingLogsPage = function () {
        this.navCtrl.push('PendingLogs');
    };
    DashboardPage.prototype.goToProductsPage = function () {
        this.navCtrl.push('ProductsPage');
    };
    DashboardPage.prototype.goToSalesTodayPage = function () {
        this.navCtrl.push('AddCustomerPage');
    };
    DashboardPage.prototype.logout = function () {
        this.auth.logout(this.navCtrl);
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/chineduabalogu/work/filterland-app/src/pages/dashboard/dashboard.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons class="menu-left" start>\n        <button class="start" ion-button ion-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <div class="home-title title-center" >\n        <ion-title >Home</ion-title>\n      </div>\n      <ion-buttons class="logout-btn" end>\n        <button ion-button ion-only style="color: #CF7A7A"   (click)="logout()" >\n          <ion-icon name="log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div class="home-logo">\n    <img src="assets/imgs/logo-w-text.png">\n  </div>\n\n  <div class="home-cont">\n    <div class="home-box purple" (click)="goToLogSaleModal()">\n      <img class="box-img" src="assets/imgs/tag.png">\n      <p>Log Sale</p>\n    </div>\n    <div class="home-box red" (click)="goToPendingLogsPage()">\n      <img class="box-img" src="assets/imgs/icon.png">\n      <p>Pending Logs</p>\n    </div>\n    <div class="home-box gold" (click)="goToProductsPage()">\n      <img class="box-img" src="assets/imgs/package.png">\n      <p>Products</p>\n    </div>\n    <div class="home-box gray" (click)="goToSalesTodayPage()">\n      <img class="box-img" src="assets/imgs/plus.png">\n      <p>Add Customer</p>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chineduabalogu/work/filterland-app/src/pages/dashboard/dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_authprovider_authprovider__["a" /* AuthproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
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





var SALELOGS = "salelogs";
var InvoiceModal = /** @class */ (function () {
    function InvoiceModal(navParams, viewCtrl, utility, logSaleService, storage) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.utility = utility;
        this.logSaleService = logSaleService;
        this.storage = storage;
        this.params = {};
        this.indicator_classes = {
            'onlinebg': false,
            'offlinebg': false
        };
        this.saveBtnDisabled = false;
    }
    InvoiceModal.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad InvoiceModal');
        this.params = this.navParams.data;
        console.log("params ", this.params);
        this.storage.get("user").then(function (u) {
            _this.user_id = u.data.id;
        });
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
    InvoiceModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    InvoiceModal.prototype.saveLog = function () {
        var _this = this;
        console.log("saving....");
        var loading = this.utility.presentLoadingDefault("Adding Sale Details ...");
        if (navigator.onLine) {
            console.log("there is no internet");
            this.storage.get(SALELOGS).then(function (logs) {
                if (logs) {
                    var new_data;
                    var old_data = [];
                    _this.params.user_id = _this.user_id;
                    new_data = _this.params;
                    old_data = logs;
                    console.log("Old data:", old_data);
                    console.log("New data:", new_data);
                    old_data.push(JSON.stringify(new_data));
                    _this.storage.set(SALELOGS, old_data);
                    _this.saveBtnDisabled = true;
                    _this.utility.showAlert("Success (No Internet)", "Kindly Sync to Filterland Server when there is Internet");
                }
                else {
                    _this.params.user_id = _this.user_id;
                    _this.storage.set(SALELOGS, [JSON.stringify(_this.params)]);
                    _this.saveBtnDisabled = true;
                    _this.utility.showAlert("Success (No Internet)", "Kindly Sync to Filterland Server when there is Internet");
                }
            });
            loading.dismiss();
        }
        else {
            console.log("there is internet");
            this.params.user_id = this.user_id;
            console.log(this.params);
            this.logSaleService.addSale(this.params)
                .subscribe(
            //Success
            function (response) {
                var res;
                res = response;
                if (res.status == "error") {
                    console.log(res);
                    loading.dismiss();
                    return _this.utility.showAlert("Error", res.errors);
                }
                else if (res.status == "success") {
                    loading.dismiss();
                    _this.saveBtnDisabled = true;
                    return _this.utility.showAlert("Success", "Data has been added to Filterland Server");
                }
                loading.dismiss();
            }, 
            //Error
            function (error) {
                var err;
                err = error;
                loading.dismiss();
                console.log("error ", err);
                var message;
                if (err.status === 500 || !err.error.errors) {
                    message = "There were problem, possible network/internet or server errors, try again.";
                }
                else {
                    if (err.error.errors) {
                        message = err.error.errors[0];
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("internet_checker_indicator"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], InvoiceModal.prototype, "internetIndicator", void 0);
    InvoiceModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'invoice',template:/*ion-inline-start:"/Users/chineduabalogu/work/filterland-app/src/pages/invoice/invoice.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons class="menu-left" start>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <div class="title-center" >\n      <ion-title >Invoice</ion-title>\n    </div>\n    <ion-buttons class="logout-btn" end>\n      <div class="indicator" [ngClass]="indicator_classes" #internet_checker_indicator>\n        <ion-spinner class="check_network_spinner"></ion-spinner>\n      </div>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n  	<ion-col>\n  	  <div class="paid">Paid: {{ params.paid }}</div>\n  	</ion-col>\n  	<ion-col>\n  	  <div class="left">left: {{ params.total - params.paid }} </div>\n  	</ion-col>\n  </ion-row>\n  <div class="invoice-details">\n  	<p>Customer Name: {{ params.name }}</p>\n  	<p>Customer Address: {{ params.address }} </p>\n  	<p>Customer Phone: {{ params.phone }}</p>\n  	<p>Customer Email: {{ params.email }}</p>\n  	<p>Date: {{ params.date }}</p>\n  </div>\n  <ion-grid *ngFor="let item of params.items">\n	  <div class="log_card">\n	      <ion-row>\n	        <ion-col>\n	          <p>Product Name/#: <b>{{ item.name }} - {{ item.partnumber }}</b></p>\n	        </ion-col>\n	      </ion-row>\n\n	      <ion-row>\n	        <ion-col>\n	          <p>Quantity: <b>{{ item.quantity }}</b></p>\n	        </ion-col>\n	        <ion-col>\n	          <p>Price: <b>{{ item.price }}</b></p>\n	        </ion-col>\n	      </ion-row> \n\n	      <ion-row>\n	        <ion-col>\n	          <p>Total: <b>{{ item.quantity * item.price }}</b></p>\n	        </ion-col>\n	      </ion-row>\n	  </div>\n  </ion-grid>\n  <ion-grid>\n  	<ion-row>\n      <ion-col offset="3">\n        <p style="text-align: center;">Total: <b>{{ params.total }}</b></p>\n      </ion-col>\n    </ion-row>\n    <ion-row> \n      <ion-col>\n      </ion-col>\n      <ion-col>\n        <button ion-button class="save-btn" [disabled]="saveBtnDisabled" (click)="saveLog()"> Save </button>\n      </ion-col>\n      <ion-col>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>'/*ion-inline-end:"/Users/chineduabalogu/work/filterland-app/src/pages/invoice/invoice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_log_sale_log_sale__["a" /* LogSaleService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], InvoiceModal);
    return InvoiceModal;
}());

//# sourceMappingURL=invoice.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewInvoiceModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
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





var SALELOGS = "salelogs";
var ViewInvoiceModal = /** @class */ (function () {
    function ViewInvoiceModal(navParams, viewCtrl, utility, logSaleService, storage) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.utility = utility;
        this.logSaleService = logSaleService;
        this.storage = storage;
        this.params = {};
        this.indicator_classes = {
            'onlinebg': false,
            'offlinebg': false
        };
        this.saveBtnDisabled = false;
    }
    ViewInvoiceModal.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad InvoiceModal');
        this.params = this.navParams.data;
        console.log("params ", this.params);
        this.storage.get("user").then(function (u) {
            _this.user_id = u.data.id;
        });
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
    ViewInvoiceModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("internet_checker_indicator"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ViewInvoiceModal.prototype, "internetIndicator", void 0);
    ViewInvoiceModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'view_invoice',template:/*ion-inline-start:"/Users/chineduabalogu/work/filterland-app/src/pages/view_invoice/view_invoice.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons class="menu-left" start>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <div class="title-center" >\n      <ion-title >View Invoice</ion-title>\n    </div>\n    <ion-buttons class="logout-btn" end>\n      <div class="indicator" [ngClass]="indicator_classes" #internet_checker_indicator>\n        <ion-spinner class="check_network_spinner"></ion-spinner>\n      </div>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n  	<ion-col>\n  	  <div class="paid">Paid: {{ params.paid }}</div>\n  	</ion-col>\n  	<ion-col>\n  	  <div class="left">left: {{ params.total - params.paid }} </div>\n  	</ion-col>\n  </ion-row>\n  <div class="invoice-details">\n  	<p>Customer Name: {{ params.name }}</p>\n  	<p>Customer Address: {{ params.address }} </p>\n  	<p>Customer Phone: {{ params.phone }}</p>\n  	<p>Customer Email: {{ params.email }}</p>\n  	<p>Date: {{ params.date }}</p>\n  </div>\n  <ion-grid *ngFor="let item of params.items">\n	  <div class="log_card">\n	      <ion-row>\n	        <ion-col>\n	          <p>Product Name/#: <b>{{ item.name }} - {{ item.partnumber }}</b></p>\n	        </ion-col>\n	      </ion-row>\n\n	      <ion-row>\n	        <ion-col>\n	          <p>Quantity: <b>{{ item.quantity }}</b></p>\n	        </ion-col>\n	        <ion-col>\n	          <p>Price: <b>{{ item.price }}</b></p>\n	        </ion-col>\n	      </ion-row> \n\n	      <ion-row>\n	        <ion-col>\n	          <p>Total: <b>{{ item.quantity * item.price }}</b></p>\n	        </ion-col>\n	      </ion-row>\n	  </div>\n  </ion-grid>\n  <ion-grid>\n  	<ion-row>\n      <ion-col offset="3">\n        <p style="text-align: center;">Total: <b>{{ params.total }}</b></p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>'/*ion-inline-end:"/Users/chineduabalogu/work/filterland-app/src/pages/view_invoice/view_invoice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_log_sale_log_sale__["a" /* LogSaleService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ViewInvoiceModal);
    return ViewInvoiceModal;
}());

//# sourceMappingURL=view_invoice.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CUSTOMER = 'customer';
var CustomerService = /** @class */ (function () {
    function CustomerService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.baseUrl = "https://filterland-api.herokuapp.com/api/v1/customers";
    }
    CustomerService.prototype.addCustomer = function (customerDetails) {
        return this.http.post("" + this.baseUrl, customerDetails, { observe: 'response' });
    };
    CustomerService.prototype.syncCustomersFromStorage = function (customers) {
        console.log("post request");
        console.log("main params: ", customers);
        return this.http.post("http://localhost:4040/api/v1/customers/sync_from_storage", customers, { headers: { 'Content-Type': 'application/json' } });
        // return this.http.post(`${this.baseUrl}/sync_from_storage`, customers, { observe: 'response' })
    };
    CustomerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], CustomerService);
    return CustomerService;
}());

//# sourceMappingURL=customer.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(357);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_settings_settings__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_authprovider_authprovider__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_util_util__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_customer_customer__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_log_sale_log_sale__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_invoice_invoice__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_view_invoice_view_invoice__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_invoice_invoice__["a" /* InvoiceModal */],
                __WEBPACK_IMPORTED_MODULE_15__pages_view_invoice_view_invoice__["a" /* ViewInvoiceModal */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add_customer/add_customer.module#AddCustomerPageModule', name: 'AddCustomerPage', segment: 'add_customer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customers/customers.module#CustomersPageModule', name: 'CustomersPage', segment: 'customers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invoice/invoice.module#InvoiceModalModule', name: 'InvoiceModal', segment: 'invoice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/log_sales/log_sales.module#LogSalesPageModule', name: 'LogSalesPage', segment: 'log_sales', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newsletters/newsletters.module#NewslettersPageModule', name: 'NewslettersPage', segment: 'newsletters', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orders/orders.module#OrdersPageModule', name: 'OrdersPage', segment: 'orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pending_logs/pending_logs.module#PendingLogsModule', name: 'PendingLogs', segment: 'pending_logs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pending_supplies/pending_supplies.module#PendingSuppliesPageModule', name: 'PendingSuppliesPage', segment: 'pending_supplies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/products/products.module#ProductsPageModule', name: 'ProductsPage', segment: 'products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#IndexPageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recent_sales/recent_sales.module#RecentSalesPageModule', name: 'RecentSalesPage', segment: 'recent_sales', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/requests/requests.module#RequestsPageModule', name: 'RequestsPage', segment: 'requests', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sales_today/sales_today.module#SalesTodayPageModule', name: 'SalesTodayPage', segment: 'sales_today', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view_invoice/view_invoice.module#ViewInvoiceModalModule', name: 'ViewInvoiceModal', segment: 'view_invoice', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_invoice_invoice__["a" /* InvoiceModal */],
                __WEBPACK_IMPORTED_MODULE_15__pages_view_invoice_view_invoice__["a" /* ViewInvoiceModal */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_settings_settings__["a" /* SettingsProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_util_util__["a" /* UtilProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_customer_customer__["a" /* CustomerService */],
                __WEBPACK_IMPORTED_MODULE_12__providers_log_sale_log_sale__["a" /* LogSaleService */],
                __WEBPACK_IMPORTED_MODULE_9__providers_authprovider_authprovider__["a" /* AuthproviderProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UtilProvider = /** @class */ (function () {
    function UtilProvider(http, toaster, alerter, loadingCtrl) {
        this.http = http;
        this.toaster = toaster;
        this.alerter = alerter;
        this.loadingCtrl = loadingCtrl;
    }
    UtilProvider.prototype.showToast = function (message, duration, typeClass) {
        typeClass = 'hiis-toast ' + typeClass;
        var toast = this.toaster.create({
            message: message,
            duration: duration,
            position: 'top',
            cssClass: typeClass
        });
        toast.present();
    };
    UtilProvider.prototype.showAlert = function (title, message) {
        var alert = this.alerter.create({
            title: title,
            subTitle: message,
            buttons: ["OK"]
        });
        alert.present();
    };
    UtilProvider.prototype.showLoading = function () {
        var loading = this.loadingCtrl.create({
            content: "<div class=\"spinner\">\n                  <div class=\"cube1\"></div>\n                  <div class=\"cube2\"></div>\n                </div>"
        });
        loading.present();
        return loading;
    };
    UtilProvider.prototype.presentLoadingDefault = function (message) {
        var loading = this.loadingCtrl.create({
            content: message
        });
        loading.present();
        return loading;
        // setTimeout(() => {
        //   loading.dismiss();
        // }, 5000);
    };
    UtilProvider.prototype.presentAlertConfirm = function (title, message, okayCallBack) {
        var alert = this.alerter.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    cssClass: 'secondary-button',
                    handler: function (blah) {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Yes',
                    cssClass: 'primary-button',
                    handler: function () {
                        console.log('Confirm Okay');
                        okayCallBack();
                    }
                }
            ]
        });
        alert.present();
    };
    UtilProvider.prototype.validateData = function (data) {
        if (data) {
            if (data.email) {
                if (!this.validateEmail(data.email)) {
                    return false;
                }
                return true;
            }
        }
        return false;
    };
    UtilProvider.prototype.setEnrolleeOtp = function (otp) {
        this.enrolleeOtp = otp;
    };
    UtilProvider.prototype.getEnrolleeOtp = function () {
        return this.enrolleeOtp;
    };
    UtilProvider.prototype.compareEnrolleeOtp = function (otpProvided) {
        return this.enrolleeOtp == otpProvided;
    };
    UtilProvider.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    UtilProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]])
    ], UtilProvider);
    return UtilProvider;
}());

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_settings_settings__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    // navCtrl: any;
    function MyApp(platform, statusBar, splashScreen, settings, storage) {
        var _this = this;
        this.settings = settings;
        this.storage = storage;
        this.currentUser = localStorage.getItem('currentuser');
        this.rootPage = this.currentUser
            ? 'TabsPage'
            : 'IntroPage';
        this.onlineOffline = navigator.onLine;
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; }); //Themeoption
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { title: 'Pending Supplies', component: 'PendingSuppliesPage', icon: 'ios-timer', index: 0.2, },
            { title: 'Recent Sales', component: 'RecentSalesPage', icon: 'ios-list-box', index: 0.2, },
            { title: 'Customers', component: 'CustomersPage', icon: 'ios-list', index: 0.2, },
            { title: 'Newsletters', component: 'NewslettersPage', icon: 'ios-albums', index: 0.2, },
            { title: 'Spreadsheets', component: '', icon: 'ios-document', index: 0.2, },
            { title: 'Share', component: '', icon: 'ios-share', index: 0.2, },
            { title: 'Settings', component: 'SettingsPage', icon: 'ios-settings', index: 0.2, },
        ];
        this.activepage = this.pages[0];
    }
    // ngAfterViewInit() {
    //   console.log(this.internet_checker_indicator.nativeElement.innerHTML);
    // }
    MyApp.prototype.ionViewDidLoad = function () {
        console.log('component ts file');
    };
    // Run when the device is ready
    // document.addEventListener('deviceready', function () {
    //     // Android customization
    //     // To indicate that the app is executing tasks in background and being paused would disrupt the user.
    //     // The plug-in has to create a notification while in background - like a download progress bar.
    //     cordova.plugins.backgroundMode.setDefaults({ 
    //         title:  'CheckInternet',
    //         text:   'Executing background tasks.'
    //     });
    //     // Enable background mode
    //     cordova.plugins.backgroundMode.enable();
    //     // Called when background mode has been activated
    //     cordova.plugins.backgroundMode.onactivate = function () {
    //         // Set an interval of 30 minutes (1800000 milliseconds)
    //         setInterval(function () {
    //             // The code that you want to run repeatedly
    //             if (!navigator.onLine) {
    //             } else {
    //             }
    //         }, 1800000);
    //     }
    // }, false);
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
        this.activepage = __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__["a" /* DashboardPage */];
    };
    MyApp.prototype.checkActive = function (page) {
        return page == this.activepage;
    };
    MyApp.prototype.dashboard = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__["a" /* DashboardPage */]);
    };
    MyApp.prototype.about = function () {
        this.nav.setRoot('TabsPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('internet_checker_indicator'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MyApp.prototype, "internet_checker_indicator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/chineduabalogu/work/filterland-app/src/app/app.html"*/'<ion-menu style="color: aquamarine" [content]="content">\n  <ion-content padding style="background-color: #CF7A7A !important">\n    <ion-grid no-padding style="margin-top: 4vh">\n      <ion-row align-center-end class="image_container">\n      <ion-col col-auto>\n        <div class="sliderlogo-cont">\n          <img class="side-img" src="assets/imgs/logo-white-text.png">\n        </div>\n      </ion-col>\n      </ion-row>\n\n      <ion-row align-center-end>\n        <button ion-button clear class="fami"  menuClose *ngFor="let p of pages"  [class.activeHighlight]="checkActive(p)" (click)="openPage(p)">\n            <ion-list>\n          <ion-col col-auto  (click)="dashboard()">\n              <ion-icon class="components" item-start [name]="p.icon" ></ion-icon>\n          </ion-col>\n          {{p.title}}\n          </ion-list>\n        </button>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n</ion-menu>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  <ion-nav  [root]="rootPage" #content swipeBackEnabled="false" [class]="selectedTheme"></ion-nav>\n'/*ion-inline-end:"/Users/chineduabalogu/work/filterland-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogSaleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Sale } from "../../models/sale";
// import { AddSale } from "../../models/sale";

var LogSaleService = /** @class */ (function () {
    function LogSaleService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.baseUrl = "https://filterland-api.herokuapp.com/api/v1/sales_invoices";
    }
    LogSaleService.prototype.addSale = function (sale) {
        console.log("posting to server....");
        return this.http.post("http://localhost:4040/api/v1/sales_invoices", sale, { headers: { 'Content-Type': 'application/json' } });
        // return this.http.post(`${this.baseUrl}`, customerDetails, { observe: 'response' });
    };
    LogSaleService.prototype.syncSalesFromStorage = function (sales) {
        console.log("post request");
        console.log("main params: ", sales);
        return this.http.post("http://localhost:4040/api/v1/sales_invoices/sync_from_storage", sales, { headers: { 'Content-Type': 'application/json' } });
        // return this.http.post(`${this.baseUrl}/sync_from_storage`, customers, { observe: 'response' })
    };
    LogSaleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _b || Object])
    ], LogSaleService);
    return LogSaleService;
    var _a, _b;
}());

//# sourceMappingURL=log_sale.js.map

/***/ })

},[352]);
//# sourceMappingURL=main.js.map