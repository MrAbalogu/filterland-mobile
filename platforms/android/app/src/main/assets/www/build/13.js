webpackJsonp([13],{

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractPageModule", function() { return AbstractPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abstract__ = __webpack_require__(699);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AbstractPageModule = /** @class */ (function () {
    function AbstractPageModule() {
    }
    AbstractPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__abstract__["a" /* AbstractPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__abstract__["a" /* AbstractPage */]),
            ],
        })
    ], AbstractPageModule);
    return AbstractPageModule;
}());

//# sourceMappingURL=abstract.module.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractPage; });
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
var AbstractPage = /** @class */ (function () {
    function AbstractPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AbstractPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AbstractPage');
    };
    AbstractPage.prototype.goToDashboardPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    AbstractPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-abstract',template:/*ion-inline-start:"/Users/chineduabalogu/work/filterland-app/src/pages/abstract/abstract.html"*/'<ion-header>\n    <ion-navbar>\n\n      <ion-buttons  class="menu-left"  start>\n        <ion-icon style="color:#50E3C2; font-size:2em"  ></ion-icon>\n\n      </ion-buttons>\n\n      <div class="title-center" >\n          <ion-title >  Recent Claims</ion-title>\n        </div>\n      <ion-buttons end>\n        <button ion-button ion-only style="color: #1af3bd">\n          <ion-icon name="log-out" ></ion-icon>\n        </button>\n\n      </ion-buttons>\n\n\n    </ion-navbar>\n  </ion-header>\n\n<ion-content>\n\n\n    <ion-list class="claims-list-cont">\n\n        <ion-item class="cl-summary">\n            <p>Current Balance: &nbsp;&nbsp;&nbsp;&nbsp; ₦100,900</p>\n            <p>Premium Paid: &nbsp;&nbsp;&nbsp;&nbsp; <span style="color: #50E3C2"> ₦120,000 </span></p>\n          </ion-item>\n\n        <ion-item class="cl-listitem">\n           SterlingSpecialistHospital: 16 NOV 18 <small>8:22pm</small>\n          <p>-₦10,230</p></ion-item>\n\n        <ion-item class="cl-listitem">\n            SterlingSpecialistHospital: 16 NOV 18 <small>8:22pm</small>\n           <p>-₦10,230</p></ion-item>\n\n        <ion-item class="cl-listitem">\n            SterlingSpecialistHospital: 16 NOV 18 <small>8:22pm</small>\n           <p>-₦10,230</p></ion-item>\n\n        <ion-item class="cl-listitem">\n            SterlingSpecialistHospital: 16 NOV 18 <small>8:22pm</small>\n           <p>-₦10,230</p></ion-item>\n\n        <ion-item class="cl-listitem">\n            SterlingSpecialistHospital: 16 NOV 18 <small>8:22pm</small>\n           <p>-₦10,230</p></ion-item>\n\n        <ion-item class="cl-listitem">\n            SterlingSpecialistHospital: 16 NOV 18 <small>8:22pm</small>\n           <p>-₦10,230</p></ion-item>\n\n        <ion-item class="cl-listitem">\n            SterlingSpecialistHospital: 16 NOV 18 <small>8:22pm</small>\n           <p>-₦10,230</p></ion-item>\n\n        <ion-item class="cl-listitem">\n            SterlingSpecialistHospital: 16 NOV 18 <small>8:22pm</small>\n           <p>-₦10,230</p></ion-item>\n\n        <ion-item class="cl-listitem">\n            SterlingSpecialistHospital: 16 NOV 18 <small>8:22pm</small>\n           <p>-₦10,230</p></ion-item>\n\n      </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/chineduabalogu/work/filterland-app/src/pages/abstract/abstract.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AbstractPage);
    return AbstractPage;
}());

//# sourceMappingURL=abstract.js.map

/***/ })

});
//# sourceMappingURL=13.js.map