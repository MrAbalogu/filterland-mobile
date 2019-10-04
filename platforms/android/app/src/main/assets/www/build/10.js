webpackJsonp([10],{

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependentPageModule", function() { return DependentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dependent__ = __webpack_require__(703);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DependentPageModule = /** @class */ (function () {
    function DependentPageModule() {
    }
    DependentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dependent__["a" /* DependentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dependent__["a" /* DependentPage */]),
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__dependent__["a" /* DependentPage */]]
        })
    ], DependentPageModule);
    return DependentPageModule;
}());

//# sourceMappingURL=dependent.module.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DependentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
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
 * Generated class for the DependentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DependentPage = /** @class */ (function () {
    function DependentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nextPage = __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard__["a" /* DashboardPage */];
    }
    DependentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DependentPage');
    };
    DependentPage.prototype.goToBenefPage = function () {
        this.navCtrl.setRoot('BenefPage');
    };
    DependentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-dependent',template:/*ion-inline-start:"/Users/chineduabalogu/work/filterland-app/src/pages/dependent/dependent.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-buttons class="menu-left" start>\n    <button ion-button ion-only menuToggle>\n      <ion-icon ></ion-icon>\n    </button>\n\n      </ion-buttons>\n      <div class="title-center" >\n          <ion-title >My Profile</ion-title>\n        </div>\n      <ion-buttons end>\n          <button ion-button ion-only style="color: #12f3bb">\n              <ion-icon name="log-out"></ion-icon>\n            </button>\n\n          </ion-buttons>\n\n\n    </ion-navbar>\n  </ion-header>\n\n<ion-content>\n\n    <div class="profile-info">\n        <div class="pi-img">\n            <img src="assets/imgs/profile-picture.jpg">\n        </div>\n        <div class="pi-info">\n            <p>Full Name: &nbsp; &nbsp; Stephen Sowole</p>\n            <p>Policy Name: &nbsp;   Bronze Plan</p>\n            <p>ID Number:  &nbsp; &nbsp; AXA9494943N</p>\n            <p>HMO: &nbsp; &nbsp; &nbsp; AXA Mansard</p>\n        </div>\n        <div style="clear: both;"></div>\n    </div>\n    <button ion-button id="dp" class="profile-dependants" (click)="goToBenefPage()">DEPENDANTS</button>\n    <button ion-button id="bf" class="profile-benefits" >BENEFITS</button>\n    <div style="clear: both"></div>\n\n    <ion-list id="benefits">\n        <ion-item>\n\n          <h2 class="bl-info"> Regions covered:</h2>\n          <p class="bl-claims">Nigeria, India & Dubai</p>\n\n        </ion-item>\n\n        <ion-item>\n\n            <h2 class="bl-info"> Regions covered:</h2>\n            <p class="bl-claims"> Primary Eye Care Consultation, <br> Examination, Simple or Primary Infection or <br> Conditions and Medications</p>\n\n          </ion-item>\n      </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/chineduabalogu/work/filterland-app/src/pages/dependent/dependent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], DependentPage);
    return DependentPage;
}());

//# sourceMappingURL=dependent.js.map

/***/ })

});
//# sourceMappingURL=10.js.map