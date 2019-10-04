webpackJsonp([11],{

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitsPageModule", function() { return BenefitsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__benefits__ = __webpack_require__(700);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BenefitsPageModule = /** @class */ (function () {
    function BenefitsPageModule() {
    }
    BenefitsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__benefits__["a" /* BenefitsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__benefits__["a" /* BenefitsPage */]),
            ],
        })
    ], BenefitsPageModule);
    return BenefitsPageModule;
}());

//# sourceMappingURL=benefits.module.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BenefitsPage; });
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


var BenefitsPage = /** @class */ (function () {
    function BenefitsPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    BenefitsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BenefitsPage');
    };
    BenefitsPage.prototype.showToast = function (position) {
        var toast = this.toastCtrl.create({
            message: 'ummm,Logout',
            duration: 3000,
            position: position
        });
        toast.present(toast);
    };
    BenefitsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-benefits',template:/*ion-inline-start:"/Users/chineduabalogu/work/filterland-app/src/pages/benefits/benefits.html"*/'<ion-header>\n    <ion-navbar  >\n\n      <ion-buttons class="menu-left" start >\n    <button ion-button ion-only menuToggle>\n      <ion-icon  ></ion-icon>\n    </button>\n\n\n      </ion-buttons><div class="title-center" >\n          <ion-title >Chat</ion-title>\n        </div>\n      <ion-buttons end>\n        <button ion-button ion-only style="color: #12f3bb" (click)="showToast(\'top\')">\n          <ion-icon name="log-out"></ion-icon>\n        </button>\n\n          </ion-buttons>\n</ion-navbar>\n  </ion-header>\n\n<ion-content>\n\n\n        <div class="chat-cont">\n            <div class="chat-img">\n                <img class="headimg"src="assets/imgs/head.png">\n            </div>\n            <div class="chat-box">\n            What kind of insurance do you need?\n            </div>\n            <div style="clear: both"></div>\n            <button ion-button class="chat-obj-box"><strong>Personal</strong>(Perfect for individual or family)</button>\n            <button ion-button class="chat-obj-box"><strong>Corporate</strong> (Perfect for small or big company)</button>\n            <button ion-button class="chat-obj-box"><strong>Community</strong> (Perfect for small towns)</button>\n\n            <div class="chat-resp-box">Corporate Health Insurance</div>\n</div>\n\n\n            <ion-list inset style="bottom: 0em; position: absolute; width: 90%; border: ridge;">\n\n                <ion-item>\n                  <ion-label></ion-label>\n                  <ion-input type="text" placeholder="Text Here..."></ion-input>\n                </ion-item>\n\n        </ion-list>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/chineduabalogu/work/filterland-app/src/pages/benefits/benefits.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], BenefitsPage);
    return BenefitsPage;
}());

//# sourceMappingURL=benefits.js.map

/***/ })

});
//# sourceMappingURL=11.js.map