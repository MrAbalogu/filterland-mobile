webpackJsonp([15],{

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intro__ = __webpack_require__(701);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntroPageModule = /** @class */ (function () {
    function IntroPageModule() {
    }
    IntroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */]),
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */]]
        })
    ], IntroPageModule);
    return IntroPageModule;
}());

//# sourceMappingURL=intro.module.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
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


/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nextpage = 'LoginPage';
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroPage');
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"/Users/chineduabalogu/work/filterland-app/src/pages/intro/intro.html"*/'<ion-slides pager>\n  <ion-slide>\n      <div id="wrapper">\n          <!-- Page Content -->\n          <div class="exp1-wrapper">\n              <div class="exp-header">\n                  <img class="float-right" src="assets/imgs/logo-small.png">\n                  <div style="clear:both"></div>\n              </div>\n              <div class="exp-landing">\n                  <h2 class="exp1-text">Genuine Oil & Gas Filters for Cars</h2>\n              </div>\n\n                  <div class="exp-circles">\n                      <a href="exp1.html"> <div class="circle current-circle float-left"></div> </a>\n                      <a href="exp2.html"> <div class="circle float-left"></div> </a>\n                      <a href="exp3.html"> <div class="circle float-left"></div> </a>\n                  </div>\n              </div>\n          </div>\n          <!-- /#page-content-wrapper -->\n          <div class="skip">\n              <button ion-button color="mywhite" round outline [navPush]="nextpage"> Skip! </button>\n            </div>\n</ion-slide>\n<ion-slide>\n    <div id="wrapper">\n        <!-- Page Content -->\n        <div class="exp2-wrapper">\n            <div class="exp-header">\n                <img class="float-right" src="assets/imgs/logo-small.png">\n                <div style="clear:both"></div>\n            </div>\n            <div class="exp-landing">\n                <h2 class="exp1-text">Genuine Oil, Gas & Air Filters for Trucks</h2>\n            </div>\n\n                <div class="exp-circles">\n                    <a href="exp1.html"> <div class="circle float-left"></div> </a>\n                    <a href="exp2.html"> <div class="circle current-circle float-left"></div> </a>\n                    <a href="exp3.html"> <div class="circle float-left"></div> </a>\n                </div>\n                </div>\n                </div>\n                <div class="skip">\n                    <button ion-button color="mywhite" round outline [navPush]="nextpage"> Skip! </button>\n                  </div>\n\n</ion-slide>\n</ion-slides>\n'/*ion-inline-end:"/Users/chineduabalogu/work/filterland-app/src/pages/intro/intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ })

});
//# sourceMappingURL=15.js.map