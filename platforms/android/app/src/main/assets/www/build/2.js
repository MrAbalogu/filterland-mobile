webpackJsonp([2],{

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintsPageModule", function() { return ComplaintsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complaints__ = __webpack_require__(702);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComplaintsPageModule = /** @class */ (function () {
    function ComplaintsPageModule() {
    }
    ComplaintsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__complaints__["a" /* ComplaintsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__complaints__["a" /* ComplaintsPage */]),
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__complaints__["a" /* ComplaintsPage */]]
        })
    ], ComplaintsPageModule);
    return ComplaintsPageModule;
}());

//# sourceMappingURL=complaints.module.js.map

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
        this.tab2Root = 'PendingLogs';
        this.tab3Root = 'BenefitsPage';
        this.myindex = NavParams.data.tabindex;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/chineduabalogu/work/filterland-app/src/pages/tabs/tabs.html"*/'<ion-tabs [selectedIndex]="myindex" color="toolbar">\n  <ion-tab  [root]="tab1Root" tabTitle="Dashboard" tabIcon="clock" tabsHideOnSubPages="false"></ion-tab>\n  <ion-tab  [root]="tab2Root" tabTitle="Benefits" tabIcon="stats" tabsHideOnSubPages="false"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="HIIS Chatbot" tabIcon="people" tabsHideOnSubPages="false"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/chineduabalogu/work/filterland-app/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummitPage; });
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
 * Generated class for the SummitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SummitPage = /** @class */ (function () {
    function SummitPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    SummitPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SummitPage');
    };
    SummitPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SummitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-summit',template:/*ion-inline-start:"/Users/chineduabalogu/work/filterland-app/src/pages/summit/summit.html"*/'<ion-content  class="main-view">\n\n    <div class="overlay" (click)="dismiss()"></div>\n  <ion-scroll class="modal_content" scrollY="true">\n\n\n\n       <ion-icon class="circle" name="ios-checkmark-circle-outline"></ion-icon>\n\n\n       <div class="check"><p><strong> Your Complaints has been Sent</strong></p></div>\n       <div class="overallcheck">\n       <div class="check-2"><p>Mail will be Sent to</p></div>\n       <div class="check-3"><p>chineduabalagu@nnpcgroup.com</p></div>\n       <div class="check-4"><p>with your reports</p></div> </div>\n\n\n\n\n\n\n\n\n\n    </ion-scroll>\n\n    </ion-content>\n'/*ion-inline-end:"/Users/chineduabalogu/work/filterland-app/src/pages/summit/summit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], SummitPage);
    return SummitPage;
}());

//# sourceMappingURL=summit.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__summit_summit__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(694);
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
 * Generated class for the ComplaintsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComplaintsPage = /** @class */ (function () {
    function ComplaintsPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    ComplaintsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComplaintsPage');
    };
    ComplaintsPage.prototype.showModalA = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__summit_summit__["a" /* SummitPage */]);
        modal.present();
    };
    ComplaintsPage.prototype.goToTabsPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    ComplaintsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-complaints',template:/*ion-inline-start:"/Users/chineduabalogu/work/filterland-app/src/pages/complaints/complaints.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-buttons class="menu-left" start>\n        <button ion-button (click)=goToTabsPage()>\n          <ion-icon name="arrow-back"></ion-icon>\n        </button>\n\n\n      </ion-buttons>\n      <div class="title-center" >\n          <ion-title >Log Complaints</ion-title>\n        </div>\n      <ion-buttons end>\n        <button ion-button ion-only style="color: #0decc7">\n          <ion-icon name="search">\n          </ion-icon>\n\n        </button>\n\n          </ion-buttons>\n\n\n    </ion-navbar>\n    </ion-header>\n\n<ion-content >\n\n\n\n\n\n        <button class="gender" ion-button  outline >\n            <ion-item >\n                <ion-label class="dropdown-name">Select option to report on</ion-label>\n\n                  <ion-select class="popover"  [(ngModel)]="gender" interface="popover">\n                      <ion-option class="dropdown-item" value="f">Claims</ion-option>\n                      <ion-option class="dropdown-item" value="m">Dependents</ion-option>\n                      <ion-option class="dropdown-item" value="g">Providers</ion-option>\n\n                </ion-select>\n              </ion-item>\n            </button>\n\n        <ion-input  class="lc-textfield" type="text" name="" placeholder="Type Subject here.."></ion-input>\n        <ion-textarea class="lc-textarea" rows="5" placeholder=" Type Complaint here.."  [(ngModel)]="netResponse" #ctl="ngModel"></ion-textarea>\n\n\n\n    <p style="margin: 10px">Request more +</p>\n    <div style="text-align: center;">\n       <button ion-button id="rq-btn" class="btn green-button"  (click)="showModalA()">Submit Complaint</button>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chineduabalogu/work/filterland-app/src/pages/complaints/complaints.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */]])
    ], ComplaintsPage);
    return ComplaintsPage;
}());

//# sourceMappingURL=complaints.js.map

/***/ })

});
//# sourceMappingURL=2.js.map