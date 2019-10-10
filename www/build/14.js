webpackJsonp([14],{

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModalModule", function() { return InvoiceModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice__ = __webpack_require__(702);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InvoiceModalModule = /** @class */ (function () {
    function InvoiceModalModule() {
    }
    InvoiceModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__invoice__["a" /* InvoiceModal */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__invoice__["a" /* InvoiceModal */]),
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__invoice__["a" /* InvoiceModal */]]
        })
    ], InvoiceModalModule);
    return InvoiceModalModule;
}());

//# sourceMappingURL=invoice.module.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceModal; });
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


var InvoiceModal = /** @class */ (function () {
    function InvoiceModal(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    InvoiceModal.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InvoiceModal');
    };
    InvoiceModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'invoice',template:/*ion-inline-start:"/Users/chineduabalogu/work/filterland-app/src/pages/invoice/invoice.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons class="menu-left" start>\n        \n      </ion-buttons>\n      <div class="home-title title-center" >\n        <ion-title >Invoice</ion-title>\n      </div>\n      <ion-buttons class="" end>\n        <div class=""></div>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n  	<ion-col>\n  	  <div class="paid">Paid</div>\n  	</ion-col>\n  	<ion-col>\n  	  <div class="paid">Supplied</div>\n  	</ion-col>\n  </ion-row>\n  <div class="invoice-details">\n  	<p>Customer Name: </p>\n  	<p>Customer Address: </p>\n  	<p>Customer Phone: </p>\n  	<p>Customer Email: </p>\n  	<p>Date: </p>\n  </div>\n  <ion-grid>\n	  <div class="log_card">\n	      <ion-row>\n	        <ion-col>\n	          <p>Customer Name: <b>Chinedu Abalogu</b></p>\n	        </ion-col>\n	      </ion-row>\n\n	      <ion-row>\n	        <ion-col>\n	          <p>Carton/s: <b>N45000</b></p>\n	        </ion-col>\n	        <ion-col>\n	          <p>Price: <b>N45000</b></p>\n	        </ion-col>\n	      </ion-row> \n\n	      <ion-row>\n	        <ion-col>\n	          <p>Quantity:</p>\n	        </ion-col>\n	        <ion-col>\n	          <p>Total: <b>N45000</b></p>\n	        </ion-col>\n	      </ion-row>\n	  </div>\n\n	  <ion-row>\n	      <ion-col offset="3">\n	        <p style="text-align: center;">Total: <b>N90000</b></p>\n	      </ion-col>\n	    </ion-row>\n	    <ion-row> \n	      <ion-col>\n	      </ion-col>\n	      <ion-col>\n	        <button ion-button> Send to HQ </button>\n	      </ion-col>\n	      <ion-col>\n	      </ion-col>\n	  </ion-row>\n  </ion-grid>\n\n\n</ion-content>'/*ion-inline-end:"/Users/chineduabalogu/work/filterland-app/src/pages/invoice/invoice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], InvoiceModal);
    return InvoiceModal;
}());

//# sourceMappingURL=invoice.js.map

/***/ })

});
//# sourceMappingURL=14.js.map