webpackJsonp([12],{

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders__ = __webpack_require__(701);
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

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AbstractPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrdersPage = /** @class */ (function () {
    function OrdersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OrdersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AbstractPage');
    };
    OrdersPage.prototype.goToDashboardPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'orders-page',template:/*ion-inline-start:"/Users/chineduabalogu/work/filterland-app/src/pages/orders/orders.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons class="menu-left" start>\n        <button class="start" ion-button ion-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <div class="home-title title-center" >\n        <ion-title >Recent Orders</ion-title>\n      </div>\n      <ion-buttons class="logout-btn" end>\n        <button ion-button ion-only style="color: #CF7A7A"   (click)="logout()" >\n          <ion-icon name="log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n\n    <ion-list class="claims-list-cont">\n\n        <ion-item class="cl-summary">\n            <p>Current Balance: &nbsp;&nbsp;&nbsp;&nbsp; ₦100,900</p>\n            <p>Premium Paid: &nbsp;&nbsp;&nbsp;&nbsp; <span style="color: #50E3C2"> ₦120,000 </span></p>\n          </ion-item>\n\n        <ion-item class="cl-listitem">\n           SterlingSpecialistHospital: 16 NOV 18 <small>8:22pm</small>\n          <p>-₦10,230</p></ion-item>\n\n        <ion-item class="cl-listitem">\n            SterlingSpecialistHospital: 16 NOV 18 <small>8:22pm</small>\n           <p>-₦10,230</p></ion-item>\n\n        <ion-item class="cl-listitem">\n            SterlingSpecialistHospital: 16 NOV 18 <small>8:22pm</small>\n           <p>-₦10,230</p></ion-item>\n\n        <ion-item class="cl-listitem">\n            SterlingSpecialistHospital: 16 NOV 18 <small>8:22pm</small>\n           <p>-₦10,230</p></ion-item>\n\n        <ion-item class="cl-listitem">\n            SterlingSpecialistHospital: 16 NOV 18 <small>8:22pm</small>\n           <p>-₦10,230</p></ion-item>\n\n        <ion-item class="cl-listitem">\n            SterlingSpecialistHospital: 16 NOV 18 <small>8:22pm</small>\n           <p>-₦10,230</p></ion-item>\n\n        <ion-item class="cl-listitem">\n            SterlingSpecialistHospital: 16 NOV 18 <small>8:22pm</small>\n           <p>-₦10,230</p></ion-item>\n\n        <ion-item class="cl-listitem">\n            SterlingSpecialistHospital: 16 NOV 18 <small>8:22pm</small>\n           <p>-₦10,230</p></ion-item>\n\n        <ion-item class="cl-listitem">\n            SterlingSpecialistHospital: 16 NOV 18 <small>8:22pm</small>\n           <p>-₦10,230</p></ion-item>\n\n      </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/chineduabalogu/work/filterland-app/src/pages/orders/orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ })

});
//# sourceMappingURL=12.js.map