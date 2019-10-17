webpackJsonp([11],{

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesTodayPageModule", function() { return SalesTodayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sales_today__ = __webpack_require__(715);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SalesTodayPageModule = /** @class */ (function () {
    function SalesTodayPageModule() {
    }
    SalesTodayPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sales_today__["a" /* SalesTodayPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sales_today__["a" /* SalesTodayPage */]),
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__sales_today__["a" /* SalesTodayPage */]]
        })
    ], SalesTodayPageModule);
    return SalesTodayPageModule;
}());

//# sourceMappingURL=sales_today.module.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesTodayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SalesTodayPage = /** @class */ (function () {
    function SalesTodayPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    SalesTodayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SalesTodayPage');
    };
    SalesTodayPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SalesTodayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sales_today-page',template:/*ion-inline-start:"/Users/chineduabalogu/work/filterland-app/src/pages/sales_today/sales_today.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons class="menu-left" start>\n        <button class="start" ion-button ion-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <div class="home-title title-center" >\n        <ion-title >Sales Today</ion-title>\n      </div>\n      <ion-buttons class="logout-btn" end>\n        <button ion-button ion-only style="color: #CF7A7A"   (click)="logout()" >\n          <ion-icon name="log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>'/*ion-inline-end:"/Users/chineduabalogu/work/filterland-app/src/pages/sales_today/sales_today.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], SalesTodayPage);
    return SalesTodayPage;
}());

//# sourceMappingURL=sales_today.js.map

/***/ })

});
//# sourceMappingURL=11.js.map