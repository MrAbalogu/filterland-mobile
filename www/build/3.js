webpackJsonp([3],{

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products__ = __webpack_require__(704);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductsPageModule = /** @class */ (function () {
    function ProductsPageModule() {
    }
    ProductsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__products__["a" /* ProductsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__products__["a" /* ProductsPage */]),
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__products__["a" /* ProductsPage */]]
        })
    ], ProductsPageModule);
    return ProductsPageModule;
}());

//# sourceMappingURL=products.module.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
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

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(694);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsPage = /** @class */ (function () {
    function ProductsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProductsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductsPage');
        var nav = document.getElementById("searchNav");
        nav.style.display = "none";
    };
    ProductsPage.prototype.goToTabsPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    ProductsPage.prototype.searchProducts = function () {
        var nav = document.getElementById("searchNav");
        var mainnav = document.getElementById("mainNav");
        mainnav.style.display = "none";
        nav.style.display = "block";
    };
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-products',template:/*ion-inline-start:"/Users/chineduabalogu/work/filterland-app/src/pages/products/products.html"*/'<ion-header>\n  <ion-navbar id="mainNav">\n      <ion-buttons class="menu-left" start>\n        <button class="start" ion-button ion-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <div class="home-title title-center" >\n        <ion-title >Products</ion-title>\n      </div>\n      <ion-buttons class="logout-btn" end>\n        <button ion-button ion-only style="color: #CF7A7A" (click)="searchProducts()" >\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n  <ion-navbar id="searchNav">\n      <input placeholder="Search Products" type="search" name="searchProducts">\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list id="hospitals" class="hospitals">\n        <div class="h-listitem">\n            <img  class="hl-img" src="assets/imgs/kelina.jpg">\n\n        <ion-item  class="hl-info"><h5>Kelina Hospital</h5>\n          <ion-icon ios="ios-pin" md="md-pin"></ion-icon> <span style="color: #50E3C2;"> Abuja, Gwarimpa </span>\n          <p>Address: 10 Ayedun close, Area 11 Garki.</p>\n          <p><span> Hospital </span> <span style="float: right">0.1 miles away</span></p></ion-item>\n          <div style="clear: both"></div>\n\n        </div>\n        <div class="h-listitem">\n            <img  class="hl-img" src="assets/imgs/kelina.jpg">\n\n\n        <ion-item  class="hl-info"><h5>Kelina Hospital</h5>\n          <ion-icon ios="ios-pin" md="md-pin"></ion-icon> <span style="color: #50E3C2;"> Abuja, Gwarimpa </span>\n          <p>Address: 10 Ayedun close, Area 11 Garki.</p>\n          <p><span> Hospital </span> <span style="float: right">0.1 miles away</span></p></ion-item>\n          <div style="clear: both"></div>\n\n\n        </div>\n        <div class="h-listitem">\n            <img  class="hl-img" src="assets/imgs/kelina.jpg">\n\n        <ion-item  class="hl-info"><h5>Kelina Hospital</h5>\n          <ion-icon ios="ios-pin" md="md-pin"></ion-icon> <span style="color: #50E3C2;"> Abuja, Gwarimpa </span>\n          <p>Address: 10 Ayedun close, Area 11 Garki.</p>\n          <p><span> Hospital </span> <span style="float: right">0.1 miles away</span></p></ion-item>\n          <div style="clear: both"></div>\n\n\n        </div>\n        <div class="h-listitem">\n            <img  class="hl-img" src="assets/imgs/kelina.jpg">\n\n        <ion-item  class="hl-info"><h5>Kelina Hospital</h5>\n          <ion-icon ios="ios-pin" md="md-pin"></ion-icon> <span style="color: #50E3C2;"> Abuja, Gwarimpa </span>\n          <p>Address: 10 Ayedun close, Area 11 Garki.</p>\n          <p><span> Hospital </span> <span style="float: right">0.1 miles away</span></p></ion-item>\n          <div style="clear: both"></div>\n\n\n        </div>\n        <div class="h-listitem">\n            <img  class="hl-img" src="assets/imgs/kelina.jpg">\n\n        <ion-item  class="hl-info"><h5>Kelina Hospital</h5>\n          <ion-icon ios="ios-pin" md="md-pin"></ion-icon> <span style="color: #50E3C2;"> Abuja, Gwarimpa </span>\n          <p>Address: 10 Ayedun close, Area 11 Garki.</p>\n          <p><span> Hospital </span> <span style="float: right">0.1 miles away</span></p></ion-item>\n          <div style="clear: both"></div>\n\n\n        </div>\n        <div class="h-listitem">\n            <img  class="hl-img" src="assets/imgs/kelina.jpg">\n\n        <ion-item  class="hl-info"><h5>Kelina Hospital</h5>\n          <ion-icon ios="ios-pin" md="md-pin"></ion-icon> <span style="color: #50E3C2;"> Abuja, Gwarimpa </span>\n          <p>Address: 10 Ayedun close, Area 11 Garki.</p>\n          <p><span> Hospital </span> <span style="float: right">0.1 miles away</span></p></ion-item>\n          <div style="clear: both"></div>\n\n\n        </div>\n        <div class="h-listitem"  >\n            <img  class="hl-img" src="assets/imgs/kelina.jpg">\n\n        <ion-item  class="hl-info"><h5>Kelina Hospital</h5>\n          <ion-icon ios="ios-pin" md="md-pin"></ion-icon> <span style="color: #50E3C2;"> Abuja, Gwarimpa </span>\n          <p>Address: 10 Ayedun close, Area 11 Garki.</p>\n          <p><span> Hospital </span> <span style="float: right">0.1 miles away</span></p></ion-item>\n          <div style="clear: both"></div>\n\n\n        </div>\n      </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/chineduabalogu/work/filterland-app/src/pages/products/products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ })

});
//# sourceMappingURL=3.js.map