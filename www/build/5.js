webpackJsonp([5],{

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingLogsModule", function() { return PendingLogsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pending_logs__ = __webpack_require__(713);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PendingLogsModule = /** @class */ (function () {
    function PendingLogsModule() {
    }
    PendingLogsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pending_logs__["a" /* PendingLogs */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pending_logs__["a" /* PendingLogs */]),
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__pending_logs__["a" /* PendingLogs */]]
        })
    ], PendingLogsModule);
    return PendingLogsModule;
}());

//# sourceMappingURL=pending_logs.module.js.map

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingLogs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_log_sale_log_sale__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_util__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__view_invoice_view_invoice__ = __webpack_require__(350);
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
var PendingLogs = /** @class */ (function () {
    function PendingLogs(navCtrl, navParams, viewCtrl, utility, storage, modalCtrl, logSaleService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.utility = utility;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.logSaleService = logSaleService;
        this.pending_logs = [];
        this.parameters = {};
        this.indicator_classes = {
            'onlinebg': false,
            'offlinebg': false
        };
        this.card_styles = {
            'log_card': false,
            'log_card_2': false
        };
        this.disableSyncButton = true;
    }
    PendingLogs.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad PendingLogsPage');
        this.storage.get("user").then(function (u) {
            _this.user_id = u.data.id;
        });
        this.storage.get(SALELOGS).then(function (logs) {
            _this.logs = logs;
            console.log(logs);
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
    PendingLogs.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log("entered");
        if (this.logs) {
            this.logs.forEach(function (l) {
                console.log(JSON.parse(l));
                _this.pending_logs.push(JSON.parse(l));
            });
            if (navigator.onLine) {
                this.disableSyncButton = false;
            }
            this.logsCount.nativeElement.innerHTML = this.logs.length;
        }
        else {
            this.disableSyncButton = true;
        }
    };
    PendingLogs.prototype.viewInvoice = function (logDetails) {
        var invoiceModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__view_invoice_view_invoice__["a" /* ViewInvoiceModal */], logDetails);
        invoiceModal.present();
        console.log(logDetails);
    };
    PendingLogs.prototype.getClass = function (i) {
        if (i % 2 === 0) {
            return 'log_card';
        }
        else {
            return 'log_card_2';
        }
    };
    PendingLogs.prototype.sendToServer = function () {
        console.log(this.pending_logs);
    };
    PendingLogs.prototype.goToTabsPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    PendingLogs.prototype.syncFromStorageToServer = function () {
        var _this = this;
        this.parameters.logs_array = this.pending_logs;
        // console.log("params: ", JSON.stringify(sync_parameters));
        var loading = this.utility.presentLoadingDefault("Syncing Logs to Server ...");
        this.logSaleService.syncSalesFromStorage(this.parameters)
            .subscribe(function (response) {
            if (!response.ok) {
                var res = void 0;
                res = response;
                loading.dismiss();
                // console.log(response);
                _this.storage.remove(SALELOGS);
                _this.navCtrl.push('AddCustomerPage');
                return _this.utility.showAlert("Completed and Saved", res.saved.length + "Logs saved");
            }
            else {
                var res = void 0;
                res = response;
                loading.dismiss();
                _this.storage.remove(SALELOGS);
                _this.navCtrl.push('AddCustomerPage');
                return _this.utility.showAlert("Completed and saved:", res.saved.length + "Logs saved");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("internet_checker_indicator"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], PendingLogs.prototype, "internetIndicator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("logsCount"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], PendingLogs.prototype, "logsCount", void 0);
    PendingLogs = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'pending-logs',template:/*ion-inline-start:"/Users/chineduabalogu/work/filterland-app/src/pages/pending_logs/pending_logs.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons class="menu-left" start>\n        <button ion-button (click)="goToTabsPage()">\n          <ion-icon name="arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n      <div class="home-title title-center" >\n        <ion-title >Pending Logs</ion-title>\n      </div>\n      <ion-buttons class="logout-btn" end>\n        <div class="indicator" [ngClass]="indicator_classes" #internet_checker_indicator>\n          <ion-spinner class="check_network_spinner"></ion-spinner>\n        </div>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n\n    <div *ngFor="let log of this.pending_logs; index as i;">\n      <div [ngClass]="getClass(i)" (click)="viewInvoice(log)">\n        <ion-row>\n          <ion-col>\n            <p>Customer Name: <b>{{ log.name }}</b></p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <p>Paid: <b>N{{ log.paid }}</b></p>\n          </ion-col>\n        </ion-row> \n\n        <ion-row>\n          <ion-col>\n            <p class="supplied">Supplied</p>\n          </ion-col>\n          <ion-col>\n            <p>Total: <b>N{{ log.total }}</b></p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n    \n    <ion-row> \n      <ion-col>\n      </ion-col>\n      <ion-col>\n        <p style="text-align: center;"> <span #logsCount>0</span> Pending Logs to Sync </p>\n        <button ion-button [disabled]="disableSyncButton" (click)="syncFromStorageToServer()"> Send All to Server </button>\n      </ion-col>\n      <ion-col>\n      </ion-col>\n    </ion-row>\n    \n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/chineduabalogu/work/filterland-app/src/pages/pending_logs/pending_logs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_log_sale_log_sale__["a" /* LogSaleService */]])
    ], PendingLogs);
    return PendingLogs;
}());

//# sourceMappingURL=pending_logs.js.map

/***/ })

});
//# sourceMappingURL=5.js.map