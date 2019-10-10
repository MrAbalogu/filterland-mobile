webpackJsonp([6],{

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(704);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 697:
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authprovider_authprovider__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_util__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, AuthproviderProvider, loadingCtrl, alertCtrl, utility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AuthproviderProvider = AuthproviderProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.utility = utility;
        this.nextpage = __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */];
        this.userData = {};
    }
    LoginPage.prototype.ngOnInit = function () {
        this.loginForm.resetForm();
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    //Method to handle login
    LoginPage.prototype.login = function (form) {
        var _this = this;
        if (form.invalid) {
            this.utility.showToast('Login form cannot be empty.', 3000, 'toast-danger');
            return;
        }
        if (!this.utility.validateEmail(form.value.email)) {
            this.utility.showToast('Please enter a valid email.', 3000, 'toast-danger');
            return;
        }
        this.loading = this.utility.showLoading();
        this.AuthproviderProvider.login(form.value.email, form.value.password)
            .then(function () {
            _this.loading.dismiss();
            _this.navCtrl.push('TabsPage');
        })
            .catch(function (err) {
            _this.loading.dismiss();
            if (err === 'Unknown Error') {
                return _this.utility.showToast('Cannot connect to server. Check network connection.', 3000, 'toast-danger');
            }
            _this.utility.showToast('Invalid Login Credentials.', 3000, 'toast-danger');
        });
    };
    // public forgotPassword(): void{
    //   this.presentAlertPrompt((data, alert) =>{
    //     if(this.utility.validateData(data)){
    //       this.loading = this.utility.showLoading();
    //       this.authProvider.forgotPassword(data.email)
    //         .then((res: {success: boolean; message: string}) => {
    //           if (res.success) {
    //             this.loading.dismiss();
    //             this.utility.showToast('A password reset email has been sent to your email. Check your email for further instructions', 4000, 'toast-success');
    //             alert.dismiss();
    //           }
    //         })
    //         .catch((err: HttpErrorResponse) => {
    //           if (err.status === 404) {
    //             this.loading.dismiss();
    //             this.utility.showToast('A provider associated with such email doesn\'t exist, please check and try again', 3000, 'toast-danger');
    //           }
    //         });
    //     }
    //     else{
    //       this.utility.showToast('Field must contain a valid email, and musn\'t be empty', 3000, 'toast-danger');
    //       return false;
    //     }~
    //   });
    // }
    LoginPage.prototype.presentAlertPrompt = function (okayCallBack) {
        console.log('Alert called');
        var alert = this.alerter.create({
            subTitle: 'Kindly enter your provider email to reset passsword',
            cssClass: 'prompt-alert',
            inputs: [
                {
                    name: 'email',
                    type: 'email',
                    placeholder: 'Provider Email'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary-button',
                    handler: function () {
                        console.log('Confirm Cancel');
                    }
                }, {
                    text: 'Ok',
                    cssClass: 'primary-button',
                    handler: function (data) {
                        var dataIsValid = okayCallBack(data, alert);
                        if (!dataIsValid) {
                            return false;
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('loginForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */])
    ], LoginPage.prototype, "loginForm", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/chineduabalogu/work/filterland-app/src/pages/login/login.html"*/'\n\n   <ion-header>\n    <ion-navbar>\n\n        <ion-icon style="width:2em" ></ion-icon>\n\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding class="background-image">\n    <div class="logo-wrapper animated fadeInDown">\n      <img src="assets/imgs/logo-small.png">\n    </div>\n    <form #loginForm="ngForm" (ngSubmit)="login(loginForm)">\n      <div class="hiis-inputs">\n        <ion-item>\n          <ion-input placeholder="Email" type="email" name="email" ngModel #email="ngModel" required></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input placeholder="Password" type="password" name="password" ngModel #password="ngModel" required></ion-input>\n        </ion-item>\n      </div>\n      <button  ion-button color="primary" type="submit" round outline >LOGIN</button>\n    </form>\n    <a class="forgot-password" >Forgot Password?</a>\n\n  </ion-content>\n'/*ion-inline-end:"/Users/chineduabalogu/work/filterland-app/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_authprovider_authprovider__["a" /* AuthproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_util_util__["a" /* UtilProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=6.js.map