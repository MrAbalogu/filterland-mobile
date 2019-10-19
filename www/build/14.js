webpackJsonp([14],{

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders__ = __webpack_require__(713);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrdersPageModule = /** @class */ (function () {
    function OrdersPageModule() {
    }
    OrdersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */]),
            ],
        })
    ], OrdersPageModule);
    return OrdersPageModule;
}());

//# sourceMappingURL=orders.module.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_log_sale_log_sale__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util_util__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sale_invoice_sale_invoice__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var SALES = "orders";
var OrdersPage = /** @class */ (function () {
    function OrdersPage(navCtrl, navParams, utility, storage, modalCtrl, saleService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utility = utility;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.saleService = saleService;
        this.today_total = 0;
        this.week_total = 0;
        this.searchTerm = "";
    }
    OrdersPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad OrdersPage');
        this.storage.get("user").then(function (u) {
            _this.user_id = u.data.id;
        });
        this.storage.get("myresponse").then(function (r) {
            if (r) {
                _this.today_total = r.today_total;
                _this.week_total = r.week_total;
            }
        });
        this.getSalesFromStorage();
    };
    OrdersPage.prototype.setFilteredItems = function (searchTerm) {
        var _this = this;
        console.log(this.searchTerm);
        this.sales = this.sales_in_storage.filter(function (sale) {
            console.log(sale);
            return sale.name.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
        });
    };
    OrdersPage.prototype.getClass = function (i) {
        if (i % 2 === 0) {
            return 'log_card';
        }
        else {
            return 'log_card_2';
        }
    };
    OrdersPage.prototype.viewInvoice = function (logDetails) {
        var invoiceModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__sale_invoice_sale_invoice__["a" /* SaleInvoiceModal */], logDetails);
        invoiceModal.present();
        console.log(logDetails.customer);
    };
    OrdersPage.prototype.getSalesFromStorage = function () {
        var _this = this;
        // var loading = this.utility.presentLoadingDefault("Fetching sales from Server ...");
        this.storage.get(SALES).then(function (sales) {
            if (sales) {
                // loading.dismiss();
                _this.sales = sales;
                _this.sales_in_storage = sales;
            }
            else {
                // loading.dismiss();
                _this.getSalesFromServer();
            }
            console.log(sales);
        });
    };
    OrdersPage.prototype.doRefresh = function (event) {
        console.log("event: ", event);
        this.getSalesFromServer();
        setTimeout(function () {
            console.log('Async operation has ended');
            event.complete();
        }, 1000);
    };
    OrdersPage.prototype.getSalesFromServer = function () {
        var _this = this;
        var loading = this.utility.presentLoadingDefault("Fetching sales from Server ...");
        this.saleService.getRecentOrders(this.user_id)
            .subscribe(function (response) { return __awaiter(_this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, response.body];
                    case 1:
                        res = _a.sent();
                        if (res.status === "error") {
                            console.log("error: ", res);
                            loading.dismiss();
                            return [2 /*return*/, this.utility.showAlert("Error", "Something went wrong, Sales did not fetch from server")];
                        }
                        else {
                            console.log("response: ", res);
                            loading.dismiss();
                            this.storage.set("myresponse", res);
                            this.storage.set(SALES, res.data);
                            this.navCtrl.push('OrdersPage');
                        }
                        return [2 /*return*/];
                }
            });
        }); }, function (error) {
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
    OrdersPage.prototype.goToDashboardPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'orders-page',template:/*ion-inline-start:"/Users/chineduabalogu/work/filterland-app/src/pages/orders/orders.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons class="menu-left" start>\n        <button class="start" ion-button ion-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <div class="home-title title-center" >\n        <ion-title >Recent Orders</ion-title>\n      </div>\n      <ion-buttons class="logout-btn" end>\n        <button ion-button ion-only style="color: #CF7A7A"   (click)="logout()" >\n          <ion-icon name="log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n    <ion-list class="claims-list-cont">\n\n      <ion-item class="cl-summary">\n        <p>Total Sales Today: &nbsp;&nbsp;&nbsp;&nbsp; ₦{{ today_total }}</p>\n        <p>Total Sales For the week: &nbsp;&nbsp;&nbsp;&nbsp; <span style="color: #50E3C2"> ₦{{ week_total }} </span></p>\n      </ion-item>\n\n      <ion-grid>\n\n        <div *ngFor="let sale of this.sales; index as i;">\n\n          <div [ngClass]="getClass(i)" (click)="viewInvoice(sale)">\n            <ion-row>\n              <ion-col>\n                <p>Customer Name: <b>{{ sale.customer.name }}</b></p>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <p>Paid: <b>N{{ sale.paid }}</b></p>\n              </ion-col>\n            </ion-row> \n\n            <ion-row>\n              <ion-col>\n                <p class="supplied">Supplied</p>\n              </ion-col>\n              <ion-col>\n                <p>Total: <b>N{{ sale.total }}</b></p>\n              </ion-col>\n            </ion-row>\n          </div>\n\n        </div>\n        \n      </ion-grid>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/chineduabalogu/work/filterland-app/src/pages/orders/orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_log_sale_log_sale__["a" /* LogSaleService */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ })

});
//# sourceMappingURL=14.js.map