webpackJsonp([0],{

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogSalesPageModule", function() { return LogSalesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log_sales__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(706);
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
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__log_sales__["a" /* LogSalesPage */]]
        })
    ], LogSalesPageModule);
    return LogSalesPageModule;
}());

//# sourceMappingURL=log_sales.module.js.map

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

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogSalesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__invoice_invoice__ = __webpack_require__(348);
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
    function LogSalesPage(navCtrl, navParams, modalCtrl, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this.indicator_classes = {
            'onlinebg': false,
            'offlinebg': false
        };
        this.items = [];
        this.myitems = [];
        this.logSaleForm = this.fb.group({
            name: [''],
            invoicenumber: [''],
            phone: [''],
            email: [''],
            address: [''],
            paid: [''],
            date: [''],
            items: this.fb.array([])
        });
    }
    LogSalesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LogSalesPage');
    };
    LogSalesPage.prototype.calculateTotal = function () {
        this.items = this.logSaleForm.get('items').value;
        this.items.forEach(function (item) {
            var itemtotal = item.price * item.quantity;
            item.total = itemtotal;
        });
        this.total = this.items.reduce(function (prev, cur) {
            return prev + cur.total;
        }, 0);
        console.log(this.total);
    };
    LogSalesPage.prototype.goToTabsPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    LogSalesPage.prototype.add_item = function () {
        console.log(this.total);
        console.log(this.myitems);
        var fa = this.logSaleForm.get('items');
        fa.push(this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            partnumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            quantity: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            price: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
        }));
        console.log("items ", this.logSaleForm.get('items').value);
    };
    LogSalesPage.prototype.remove_item = function (i) {
        var fa = this.logSaleForm.get('items');
        fa.removeAt(i);
        if (fa.length === 0)
            this.add_item();
    };
    LogSalesPage.prototype.viewInvoice = function () {
        var formData = this.logSaleForm.value;
        formData.total = this.total;
        var invoiceModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__invoice_invoice__["a" /* InvoiceModal */], formData);
        invoiceModal.present();
        console.log(this.logSaleForm.value);
    };
    LogSalesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'log-sales',template:/*ion-inline-start:"/Users/chineduabalogu/work/filterland-app/src/pages/log_sales/log_sales.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons class="menu-left" start>\n        <button class="start" ion-button ion-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <div class="home-title title-center" >\n        <ion-title >Log Sale</ion-title>\n      </div>\n      <ion-buttons class="logout-btn" end>\n        \n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <form [formGroup]="logSaleForm" (ngSubmit)="viewInvoice(logSaleForm)">\n      <ion-row>\n        <ion-col>\n          <label class="log_sale_label">Customer Full Name:</label>\n          <input class="log_sale_input" placeholder="Full Name" type="text" formControlName="name" required/>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <label class="log_sale_label">Invoice Number:</label>\n          <input class="log_sale_input" placeholder="Invoice Number" type="text" formControlName="invoicenumber" required/>\n        </ion-col>\n        <ion-col>\n          <label class="log_sale_label">Customer Phone:</label>\n          <input class="log_sale_input" placeholder="Phone Number" type="text" formControlName="phone"/>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <label class="log_sale_label">Customer Email:</label>\n          <input class="log_sale_input" placeholder="Email Address" type="email" formControlName="email" required/>\n        </ion-col>\n        <ion-col>\n          <label class="log_sale_label">Date:</label>\n          <input class="log_sale_input" placeholder="date" type="date" formControlName="date" required />\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <label class="log_sale_label">Customer Address:</label>\n          <textarea class="log_sale_input" placeholder="Address" type="textarea" formControlName="address">\n          </textarea>\n        </ion-col>\n      </ion-row>\n\n      <div formArrayName="items" id="item" class="sale_item_container" *ngFor="let control of logSaleForm.get(\'items\')?.controls; let i = index">\n        <div formGroupName={{i}}>\n          <div class="remove" (click)="remove_item(i)">\n            remove\n          </div>\n          <ion-row>\n            <ion-col size="3">\n              <label class="log_sale_label">Product Name:</label>\n              <input class="log_sale_input" placeholder="Product Name" formControlName="name" />\n            </ion-col>\n\n            <ion-col size="1" size-sm>\n              <label class="log_sale_label">Part Number:</label>\n              <input class="log_sale_input" placeholder="Part Number" formControlName="partnumber" />\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <label class="log_sale_label">Quantity:</label>\n              <input class="log_sale_input" type="number" formControlName="quantity" (input)="calculateTotal()" />\n            </ion-col>\n\n            <ion-col>\n              <label class="log_sale_label">Price:</label>\n              <input class="log_sale_input" type="number" formControlName="price" (input)="calculateTotal()" />\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n\n      <button id="add_item" (click)="add_item()" type="button" ion-button size="small">+ Add more items</button>\n\n      <ion-row>\n        <ion-col>\n          <label class="log_sale_label">Paid:</label>\n            <input class="log_sale_input" type="number" formControlName="paid" required/>\n        </ion-col>\n\n        <ion-col>\n          <label class="log_sale_label">Total:</label>\n          <h4 style="margin:6px 0">{{ total }}</h4>\n        </ion-col>\n      </ion-row>\n\n      <ion-row > \n        <ion-col>\n        </ion-col>\n        <ion-col>\n          <button type="submit" ion-button class="secondary_button" [disabled]="!logSaleForm.valid"> Save & View Invoice </button>\n        </ion-col>\n        <ion-col>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </ion-grid>\n\n\n\n \n</ion-content>\n'/*ion-inline-end:"/Users/chineduabalogu/work/filterland-app/src/pages/log_sales/log_sales.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], LogSalesPage);
    return LogSalesPage;
}());

//# sourceMappingURL=log_sales.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keyvalue_keyvalue__ = __webpack_require__(707);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__keyvalue_keyvalue__["a" /* KeyvaluePipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__keyvalue_keyvalue__["a" /* KeyvaluePipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyvaluePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the KeyvaluePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var KeyvaluePipe = /** @class */ (function () {
    function KeyvaluePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    KeyvaluePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value;
    };
    KeyvaluePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'keyvalue',
        })
    ], KeyvaluePipe);
    return KeyvaluePipe;
}());

//# sourceMappingURL=keyvalue.js.map

/***/ })

});
//# sourceMappingURL=0.js.map