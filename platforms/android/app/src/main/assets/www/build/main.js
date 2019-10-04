webpackJsonp([16],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SettingsProvider = /** @class */ (function () {
    function SettingsProvider(HttpClient) {
        this.HttpClient = HttpClient;
        this.theme = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["BehaviorSubject"]('dark-theme');
    }
    SettingsProvider.prototype.setActiveTheme = function (val) {
        this.theme.next(val);
    };
    SettingsProvider.prototype.getActiveTheme = function () {
        return this.theme.asObservable();
    };
    SettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SettingsProvider);
    return SettingsProvider;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthproviderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_util__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PROVIDER = 'provider';
var AuthproviderProvider = /** @class */ (function () {
    function AuthproviderProvider(http, storage, utility, appCtrl) {
        this.http = http;
        this.storage = storage;
        this.utility = utility;
        this.appCtrl = appCtrl;
        this.baseUrl = 'http://hiis.herokuapp.com/api/v1';
    }
    AuthproviderProvider.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post(this.baseUrl + "/enroleeauth/sign_in", { email: email, password: password })
            .toPromise()
            .then(function (provider) {
            console.log(provider);
            return _this.storage.set(PROVIDER, provider);
        })
            .then(function () {
            return Promise.resolve();
        })
            .catch(function (error) {
            console.log(error);
            return Promise.reject(error.statusText);
        });
    };
    AuthproviderProvider.prototype.logout = function (navCtrl) {
        var _this = this;
        this.utility.presentAlertConfirm('Confirm Logout..', 'Are you sure you want to <strong>Log out</strong> of this application?', function () {
            _this.storage.remove(PROVIDER)
                .then(function (res) {
                _this.appCtrl.getRootNav().setRoot('IntroPage');
            })
                .catch(function (err) {
                console.error(err);
            });
        });
    };
    AuthproviderProvider.prototype.hasAuthentication = function () {
        return this.storage.get(PROVIDER).then(function (res) {
            if (res) {
                return Promise.resolve(true);
            }
            else {
                return Promise.resolve(false);
            }
        });
    };
    AuthproviderProvider.prototype.forgotPassword = function (email) {
        return this.http.post(this.baseUrl + "/enroleeauth/password", { email: email })
            .toPromise()
            .then(function (res) {
            return Promise.resolve(res);
        })
            .catch(function (err) {
            return Promise.reject(err);
        });
    };
    AuthproviderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], AuthproviderProvider);
    return AuthproviderProvider;
}());

//# sourceMappingURL=authprovider.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(73);
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



var UtilProvider = /** @class */ (function () {
    function UtilProvider(http, toaster, alerter, loadingCtrl) {
        this.http = http;
        this.toaster = toaster;
        this.alerter = alerter;
        this.loadingCtrl = loadingCtrl;
    }
    UtilProvider.prototype.showToast = function (message, duration, typeClass) {
        typeClass = 'hiis-toast ' + typeClass;
        var toast = this.toaster.create({
            message: message,
            duration: duration,
            position: 'top',
            cssClass: typeClass
        });
        toast.present();
    };
    UtilProvider.prototype.showLoading = function () {
        var loading = this.loadingCtrl.create({
            content: "<div class=\"spinner\">\n                  <div class=\"cube1\"></div>\n                  <div class=\"cube2\"></div>\n                </div>"
        });
        loading.present();
        return loading;
    };
    UtilProvider.prototype.presentAlertConfirm = function (title, message, okayCallBack) {
        var alert = this.alerter.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    cssClass: 'secondary-button',
                    handler: function (blah) {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Yes',
                    cssClass: 'primary-button',
                    handler: function () {
                        console.log('Confirm Okay');
                        okayCallBack();
                    }
                }
            ]
        });
        alert.present();
    };
    UtilProvider.prototype.validateData = function (data) {
        if (data) {
            if (data.email) {
                if (!this.validateEmail(data.email)) {
                    return false;
                }
                return true;
            }
        }
        return false;
    };
    UtilProvider.prototype.setEnrolleeOtp = function (otp) {
        this.enrolleeOtp = otp;
    };
    UtilProvider.prototype.getEnrolleeOtp = function () {
        return this.enrolleeOtp;
    };
    UtilProvider.prototype.compareEnrolleeOtp = function (otpProvided) {
        return this.enrolleeOtp == otpProvided;
    };
    UtilProvider.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    UtilProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]])
    ], UtilProvider);
    return UtilProvider;
}());

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		678,
		4
	],
	"../pages/abstract/abstract.module": [
		679,
		13
	],
	"../pages/benef/benef.module": [
		681,
		12
	],
	"../pages/benefits/benefits.module": [
		680,
		11
	],
	"../pages/complaints/complaints.module": [
		682,
		2
	],
	"../pages/dashboard/dashboard.module": [
		683,
		15
	],
	"../pages/dependent/dependent.module": [
		684,
		10
	],
	"../pages/index/index.module": [
		685,
		9
	],
	"../pages/intro/intro.module": [
		686,
		8
	],
	"../pages/login/login.module": [
		687,
		3
	],
	"../pages/pending_logs/pending_logs.module": [
		688,
		14
	],
	"../pages/provider/provider.module": [
		689,
		0
	],
	"../pages/reports/reports.module": [
		690,
		1
	],
	"../pages/requests/requests.module": [
		691,
		7
	],
	"../pages/summit/summit.module": [
		693,
		6
	],
	"../pages/tabs/tabs.module": [
		692,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 208;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authprovider_authprovider__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams, settings, storage, auth, AlertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settings = settings;
        this.storage = storage;
        this.auth = auth;
        this.AlertController = AlertController;
        this.nextPage = 'AboutPage';
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Dashboard2Page');
    };
    DashboardPage.prototype.toggleAppTheme = function () {
        if (this.selectedTheme === 'dark-themes') {
            this.settings.setActiveTheme('light-theme');
        }
        else {
            this.settings.setActiveTheme('dark-theme');
        }
    };
    DashboardPage.prototype.goToAbstractPage = function () {
        this.navCtrl.push('AbstractPage');
    };
    DashboardPage.prototype.logout = function () {
        this.auth.logout(this.navCtrl);
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard2',
            templateUrl: 'dashboard2.html'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingsProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_authprovider_authprovider__["a" /* AuthproviderProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_authprovider_authprovider__["a" /* AuthproviderProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object])
    ], DashboardPage);
    return DashboardPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(353);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_authprovider_authprovider__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_util_util__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/abstract/abstract.module#AbstractPageModule', name: 'AbstractPage', segment: 'abstract', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/benefits/benefits.module#BenefitsPageModule', name: 'BenefitsPage', segment: 'benefits', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/benef/benef.module#BenefPageModule', name: 'BenefPage', segment: 'benef', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/complaints/complaints.module#ComplaintsPageModule', name: 'ComplaintsPage', segment: 'complaints', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#Dashboard2PageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dependent/dependent.module#DependentPageModule', name: 'DependentPage', segment: 'dependent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/index/index.module#IndexPageModule', name: 'IndexPage', segment: 'index', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pending_logs/pending_logs.module#PendingLogsModule', name: 'PendingLogs', segment: 'pending_logs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/provider/provider.module#ProviderPageModule', name: 'ProviderPage', segment: 'provider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reports/reports.module#ReportsPageModule', name: 'ReportsPage', segment: 'reports', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/requests/requests.module#RequestsPageModule', name: 'RequestsPage', segment: 'requests', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/summit/summit.module#SummitPageModule', name: 'SummitPage', segment: 'summit', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__["a" /* SettingsProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_util_util__["a" /* UtilProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_authprovider_authprovider__["a" /* AuthproviderProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_dashboard_dashboard__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    // navCtrl: any;
    function MyApp(platform, statusBar, splashScreen, settings, storage) {
        var _this = this;
        this.settings = settings;
        this.storage = storage;
        this.rootPage = 'IntroPage';
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; }); //Themeoption
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { title: 'Find a Provider ', component: 'ProviderPage', icon: 'ios-search', index: 0.2, },
            { title: 'Request a Report', component: 'ReportsPage', icon: 'ios-trending-up', index: 0.2, },
            { title: 'Log a Complaints', component: 'ComplaintsPage', icon: 'ios-repeat', index: 0.2, },
            { title: 'About HIIS', component: 'AboutPage', icon: 'ios-call', index: 0.2, },
            { title: 'Share', component: 'AboutPage', icon: 'ios-share', index: 0.2, },
            { title: 'Setting', component: 'AboutPage', icon: 'ios-settings', index: 0.2, },
        ];
        this.activepage = this.pages[0];
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
        this.activepage = __WEBPACK_IMPORTED_MODULE_0__pages_dashboard_dashboard__["a" /* DashboardPage */];
    };
    MyApp.prototype.checkActive = function (page) {
        return page == this.activepage;
    };
    MyApp.prototype.dashboard = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_dashboard_dashboard__["a" /* DashboardPage */]);
    };
    MyApp.prototype.about = function () {
        this.nav.setRoot('TabsPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/chineduabalogu/work/filterland-app/src/app/app.html"*/'<ion-menu style="color: aquamarine" [content]="content">\n  <ion-content padding style="background-color: #C4F2E8 !important">\n  <ion-grid no-padding style="margin-top: 4vh">\n\n\n  <ion-row align-center-end class="image_container">\n  <ion-col col-auto>\n    <div class="sliderlogo-cont">\n      <img class="side-img" src="assets/imgs/logo.png">\n    </div>\n  </ion-col>\n  </ion-row>\n  <ion-row align-center-end>\n\n      <button ion-button clear class="fami"  menuClose *ngFor="let p of pages"  [class.activeHighlight]="checkActive(p)" (click)="openPage(p)">\n          <ion-list>\n      <ion-col col-auto  (click)="dashboard()">\n\n          <ion-icon class="components" item-start [name]="p.icon" ></ion-icon>\n\n\n      </ion-col>\n\n      {{p.title}}\n    </ion-list>\n    </button>\n    </ion-row>\n  </ion-grid>\n  </ion-content>\n\n  </ion-menu>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  <ion-nav  [root]="rootPage" #content swipeBackEnabled="false" [class]="selectedTheme"></ion-nav>\n'/*ion-inline-end:"/Users/chineduabalogu/work/filterland-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[348]);
//# sourceMappingURL=main.js.map