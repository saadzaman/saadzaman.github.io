webpackJsonp([1,5],{

/***/ 1030:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(654);


/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientsComponent = (function () {
    function ClientsComponent() {
    }
    ClientsComponent.prototype.ngOnInit = function () {
    };
    ClientsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(991)
        }), 
        __metadata('design:paramtypes', [])
    ], ClientsComponent);
    return ClientsComponent;
}());
//# sourceMappingURL=E:/guard/guard/src/clients.component.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GuardsComponent = (function () {
    function GuardsComponent() {
    }
    GuardsComponent.prototype.ngOnInit = function () {
    };
    GuardsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-guards',
            template: __webpack_require__(993)
        }), 
        __metadata('design:paramtypes', [])
    ], GuardsComponent);
    return GuardsComponent;
}());
//# sourceMappingURL=E:/guard/guard/src/guards.component.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_ui__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_location_add_location_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddClientComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddClientComponent = (function () {
    function AddClientComponent(_route) {
        this._route = _route;
    }
    AddClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.id = +params["id"];
        });
    };
    AddClientComponent.prototype.openPopup = function () {
        this.popup.open(__WEBPACK_IMPORTED_MODULE_2__add_location_add_location_component__["a" /* AddLocationComponent */], {
            closeWindow: true,
            classNames: 'large location-popup'
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ng2_ui__["Ng2PopupComponent"]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_ui__["Ng2PopupComponent"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_ui__["Ng2PopupComponent"]) === 'function' && _a) || Object)
    ], AddClientComponent.prototype, "popup", void 0);
    AddClientComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-client',
            template: __webpack_require__(989)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], AddClientComponent);
    return AddClientComponent;
    var _a, _b;
}());
//# sourceMappingURL=E:/guard/guard/src/add-client.component.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_ui__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_ui__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddLocationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddLocationComponent = (function () {
    function AddLocationComponent() {
    }
    AddLocationComponent.prototype.ngOnInit = function () {
    };
    AddLocationComponent.prototype.closePopUp = function () {
        this.popup.close();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ng2_ui__["Ng2PopupComponent"]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_ui__["Ng2PopupComponent"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_ui__["Ng2PopupComponent"]) === 'function' && _a) || Object)
    ], AddLocationComponent.prototype, "popup", void 0);
    AddLocationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-location',
            template: __webpack_require__(990)
        }), 
        __metadata('design:paramtypes', [])
    ], AddLocationComponent);
    return AddLocationComponent;
    var _a;
}());
//# sourceMappingURL=E:/guard/guard/src/add-location.component.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGuardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddGuardComponent = (function () {
    function AddGuardComponent(_route) {
        this._route = _route;
        this.clients = [];
    }
    AddGuardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.id = +params["id"];
        });
    };
    AddGuardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addguard',
            template: __webpack_require__(992)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], AddGuardComponent);
    return AddGuardComponent;
    var _a;
}());
//# sourceMappingURL=E:/guard/guard/src/addguard.component.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDutyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddDutyComponent = (function () {
    function AddDutyComponent(_route) {
        this._route = _route;
    }
    AddDutyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.id = +params["id"];
        });
    };
    AddDutyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-duty',
            template: __webpack_require__(994)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], AddDutyComponent);
    return AddDutyComponent;
    var _a;
}());
//# sourceMappingURL=E:/guard/guard/src/add-duty.component.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScheduleDetailComponent = (function () {
    function ScheduleDetailComponent() {
    }
    ScheduleDetailComponent.prototype.ngOnInit = function () {
    };
    ScheduleDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-schedule-detail',
            template: __webpack_require__(995)
        }), 
        __metadata('design:paramtypes', [])
    ], ScheduleDetailComponent);
    return ScheduleDetailComponent;
}());
//# sourceMappingURL=E:/guard/guard/src/schedule-detail.component.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScheduleComponent = (function () {
    function ScheduleComponent() {
    }
    ScheduleComponent.prototype.ngOnInit = function () {
    };
    ScheduleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(996)
        }), 
        __metadata('design:paramtypes', [])
    ], ScheduleComponent);
    return ScheduleComponent;
}());
//# sourceMappingURL=E:/guard/guard/src/schedule.component.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesheetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimesheetComponent = (function () {
    function TimesheetComponent() {
    }
    TimesheetComponent.prototype.ngOnInit = function () {
    };
    TimesheetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-timesheet',
            template: __webpack_require__(997)
        }), 
        __metadata('design:paramtypes', [])
    ], TimesheetComponent);
    return TimesheetComponent;
}());
//# sourceMappingURL=E:/guard/guard/src/timesheet.component.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(998)
        }), 
        __metadata('design:paramtypes', [])
    ], UserComponent);
    return UserComponent;
}());
//# sourceMappingURL=E:/guard/guard/src/user.component.js.map

/***/ }),

/***/ 653:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 653;


/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(773);



if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=E:/guard/guard/src/main.js.map

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(988)
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=E:/guard/guard/src/app.component.js.map

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_ui__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_datetime_picker__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_datetime_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_datetime_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap__ = __webpack_require__(944);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__clients_clients_routes__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__schedule_schedule_routes__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_guards_routes__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routes__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_user_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_addguard_addguard_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_guards_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__clients_clients_component__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__clients_add_client_add_client_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__clients_add_location_add_location_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__schedule_schedule_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__schedule_add_duty_add_duty_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__schedule_schedule_detail_schedule_detail_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__schedule_timesheet_timesheet_component__ = __webpack_require__(389);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_13__guards_addguard_addguard_component__["a" /* AddGuardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__guards_guards_component__["a" /* GuardsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__clients_clients_component__["a" /* ClientsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__clients_add_client_add_client_component__["a" /* AddClientComponent */],
                __WEBPACK_IMPORTED_MODULE_17__clients_add_location_add_location_component__["a" /* AddLocationComponent */],
                __WEBPACK_IMPORTED_MODULE_18__schedule_schedule_component__["a" /* ScheduleComponent */],
                __WEBPACK_IMPORTED_MODULE_19__schedule_add_duty_add_duty_component__["a" /* AddDutyComponent */],
                __WEBPACK_IMPORTED_MODULE_20__schedule_schedule_detail_schedule_detail_component__["a" /* ScheduleDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_21__schedule_timesheet_timesheet_component__["a" /* TimesheetComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__schedule_schedule_routes__["a" /* scheduleRouting */],
                __WEBPACK_IMPORTED_MODULE_7__clients_clients_routes__["a" /* clientsRouting */],
                __WEBPACK_IMPORTED_MODULE_9__guards_guards_routes__["a" /* guardsRouting */],
                __WEBPACK_IMPORTED_MODULE_10__app_routes__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4_ng2_ui__["Ng2UIModule"],
                __WEBPACK_IMPORTED_MODULE_5_ng2_datetime_picker__["Ng2DatetimePickerModule"],
                __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap__["a" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap__["b" /* ModalModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_17__clients_add_location_add_location_component__["a" /* AddLocationComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=E:/guard/guard/src/app.module.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_guards_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clients_clients_component__ = __webpack_require__(240);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot([
    { path: '', redirectTo: 'clients', pathMatch: 'full' },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_1__user_user_component__["a" /* UserComponent */] },
    { path: 'guards', component: __WEBPACK_IMPORTED_MODULE_2__guards_guards_component__["a" /* GuardsComponent */] },
    { path: 'clients', component: __WEBPACK_IMPORTED_MODULE_3__clients_clients_component__["a" /* ClientsComponent */] },
]);
//# sourceMappingURL=E:/guard/guard/src/app.routes.js.map

/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clients_component__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_client_add_client_component__ = __webpack_require__(383);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clientsRouting; });



var clientsRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild([
    { path: 'clients', component: __WEBPACK_IMPORTED_MODULE_1__clients_component__["a" /* ClientsComponent */] },
    { path: 'clients/add', component: __WEBPACK_IMPORTED_MODULE_2__add_client_add_client_component__["a" /* AddClientComponent */] },
    { path: 'clients/edit/:id', component: __WEBPACK_IMPORTED_MODULE_2__add_client_add_client_component__["a" /* AddClientComponent */] },
]);
//# sourceMappingURL=E:/guard/guard/src/clients.routes.js.map

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addguard_addguard_component__ = __webpack_require__(385);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return guardsRouting; });



var guardsRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild([
    { path: 'guards', component: __WEBPACK_IMPORTED_MODULE_1__guards_component__["a" /* GuardsComponent */] },
    { path: 'guards/add', component: __WEBPACK_IMPORTED_MODULE_2__addguard_addguard_component__["a" /* AddGuardComponent */] },
    { path: 'guards/edit/:id', component: __WEBPACK_IMPORTED_MODULE_2__addguard_addguard_component__["a" /* AddGuardComponent */] },
]);
//# sourceMappingURL=E:/guard/guard/src/guards.routes.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schedule_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_duty_add_duty_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schedule_detail_schedule_detail_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__timesheet_timesheet_component__ = __webpack_require__(389);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return scheduleRouting; });





var scheduleRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild([
    { path: 'schedule', component: __WEBPACK_IMPORTED_MODULE_1__schedule_component__["a" /* ScheduleComponent */] },
    { path: 'schedule/add', component: __WEBPACK_IMPORTED_MODULE_2__add_duty_add_duty_component__["a" /* AddDutyComponent */] },
    { path: 'schedule/edit/:id', component: __WEBPACK_IMPORTED_MODULE_2__add_duty_add_duty_component__["a" /* AddDutyComponent */] },
    { path: 'schedule/detail/:id', component: __WEBPACK_IMPORTED_MODULE_3__schedule_detail_schedule_detail_component__["a" /* ScheduleDetailComponent */] },
    { path: 'schedule/detail/:id/timesheet', component: __WEBPACK_IMPORTED_MODULE_4__timesheet_timesheet_component__["a" /* TimesheetComponent */] },
]);
//# sourceMappingURL=E:/guard/guard/src/schedule.routes.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=E:/guard/guard/src/environment.js.map

/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 430,
	"./af.js": 430,
	"./ar": 437,
	"./ar-dz": 431,
	"./ar-dz.js": 431,
	"./ar-kw": 432,
	"./ar-kw.js": 432,
	"./ar-ly": 433,
	"./ar-ly.js": 433,
	"./ar-ma": 434,
	"./ar-ma.js": 434,
	"./ar-sa": 435,
	"./ar-sa.js": 435,
	"./ar-tn": 436,
	"./ar-tn.js": 436,
	"./ar.js": 437,
	"./az": 438,
	"./az.js": 438,
	"./be": 439,
	"./be.js": 439,
	"./bg": 440,
	"./bg.js": 440,
	"./bn": 441,
	"./bn.js": 441,
	"./bo": 442,
	"./bo.js": 442,
	"./br": 443,
	"./br.js": 443,
	"./bs": 444,
	"./bs.js": 444,
	"./ca": 445,
	"./ca.js": 445,
	"./cs": 446,
	"./cs.js": 446,
	"./cv": 447,
	"./cv.js": 447,
	"./cy": 448,
	"./cy.js": 448,
	"./da": 449,
	"./da.js": 449,
	"./de": 452,
	"./de-at": 450,
	"./de-at.js": 450,
	"./de-ch": 451,
	"./de-ch.js": 451,
	"./de.js": 452,
	"./dv": 453,
	"./dv.js": 453,
	"./el": 454,
	"./el.js": 454,
	"./en-au": 455,
	"./en-au.js": 455,
	"./en-ca": 456,
	"./en-ca.js": 456,
	"./en-gb": 457,
	"./en-gb.js": 457,
	"./en-ie": 458,
	"./en-ie.js": 458,
	"./en-nz": 459,
	"./en-nz.js": 459,
	"./eo": 460,
	"./eo.js": 460,
	"./es": 462,
	"./es-do": 461,
	"./es-do.js": 461,
	"./es.js": 462,
	"./et": 463,
	"./et.js": 463,
	"./eu": 464,
	"./eu.js": 464,
	"./fa": 465,
	"./fa.js": 465,
	"./fi": 466,
	"./fi.js": 466,
	"./fo": 467,
	"./fo.js": 467,
	"./fr": 470,
	"./fr-ca": 468,
	"./fr-ca.js": 468,
	"./fr-ch": 469,
	"./fr-ch.js": 469,
	"./fr.js": 470,
	"./fy": 471,
	"./fy.js": 471,
	"./gd": 472,
	"./gd.js": 472,
	"./gl": 473,
	"./gl.js": 473,
	"./gom-latn": 474,
	"./gom-latn.js": 474,
	"./he": 475,
	"./he.js": 475,
	"./hi": 476,
	"./hi.js": 476,
	"./hr": 477,
	"./hr.js": 477,
	"./hu": 478,
	"./hu.js": 478,
	"./hy-am": 479,
	"./hy-am.js": 479,
	"./id": 480,
	"./id.js": 480,
	"./is": 481,
	"./is.js": 481,
	"./it": 482,
	"./it.js": 482,
	"./ja": 483,
	"./ja.js": 483,
	"./jv": 484,
	"./jv.js": 484,
	"./ka": 485,
	"./ka.js": 485,
	"./kk": 486,
	"./kk.js": 486,
	"./km": 487,
	"./km.js": 487,
	"./kn": 488,
	"./kn.js": 488,
	"./ko": 489,
	"./ko.js": 489,
	"./ky": 490,
	"./ky.js": 490,
	"./lb": 491,
	"./lb.js": 491,
	"./lo": 492,
	"./lo.js": 492,
	"./lt": 493,
	"./lt.js": 493,
	"./lv": 494,
	"./lv.js": 494,
	"./me": 495,
	"./me.js": 495,
	"./mi": 496,
	"./mi.js": 496,
	"./mk": 497,
	"./mk.js": 497,
	"./ml": 498,
	"./ml.js": 498,
	"./mr": 499,
	"./mr.js": 499,
	"./ms": 501,
	"./ms-my": 500,
	"./ms-my.js": 500,
	"./ms.js": 501,
	"./my": 502,
	"./my.js": 502,
	"./nb": 503,
	"./nb.js": 503,
	"./ne": 504,
	"./ne.js": 504,
	"./nl": 506,
	"./nl-be": 505,
	"./nl-be.js": 505,
	"./nl.js": 506,
	"./nn": 507,
	"./nn.js": 507,
	"./pa-in": 508,
	"./pa-in.js": 508,
	"./pl": 509,
	"./pl.js": 509,
	"./pt": 511,
	"./pt-br": 510,
	"./pt-br.js": 510,
	"./pt.js": 511,
	"./ro": 512,
	"./ro.js": 512,
	"./ru": 513,
	"./ru.js": 513,
	"./sd": 514,
	"./sd.js": 514,
	"./se": 515,
	"./se.js": 515,
	"./si": 516,
	"./si.js": 516,
	"./sk": 517,
	"./sk.js": 517,
	"./sl": 518,
	"./sl.js": 518,
	"./sq": 519,
	"./sq.js": 519,
	"./sr": 521,
	"./sr-cyrl": 520,
	"./sr-cyrl.js": 520,
	"./sr.js": 521,
	"./ss": 522,
	"./ss.js": 522,
	"./sv": 523,
	"./sv.js": 523,
	"./sw": 524,
	"./sw.js": 524,
	"./ta": 525,
	"./ta.js": 525,
	"./te": 526,
	"./te.js": 526,
	"./tet": 527,
	"./tet.js": 527,
	"./th": 528,
	"./th.js": 528,
	"./tl-ph": 529,
	"./tl-ph.js": 529,
	"./tlh": 530,
	"./tlh.js": 530,
	"./tr": 531,
	"./tr.js": 531,
	"./tzl": 532,
	"./tzl.js": 532,
	"./tzm": 534,
	"./tzm-latn": 533,
	"./tzm-latn.js": 533,
	"./tzm.js": 534,
	"./uk": 535,
	"./uk.js": 535,
	"./ur": 536,
	"./ur.js": 536,
	"./uz": 538,
	"./uz-latn": 537,
	"./uz-latn.js": 537,
	"./uz.js": 538,
	"./vi": 539,
	"./vi.js": 539,
	"./x-pseudo": 540,
	"./x-pseudo.js": 540,
	"./yo": 541,
	"./yo.js": 541,
	"./zh-cn": 542,
	"./zh-cn.js": 542,
	"./zh-hk": 543,
	"./zh-hk.js": 543,
	"./zh-tw": 544,
	"./zh-tw.js": 544
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 934;


/***/ }),

/***/ 988:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\n    <div class=\"navbar-header\">\n\n        <a class=\"navbar-brand\" href=\"index.html\">Guard v1.0</a>\n        <a href=\"index.html\"><img class=\"mar-top-5\" src=\"assets/guard.png\" height=\"40\" width=\"40\" /></a>\n    </div>\n\n    <div class=\"navbar-default sidebar\" role=\"navigation\">\n        <div class=\"sidebar-nav navbar-collapse\">\n            <ul class=\"nav\" id=\"side-menu\">\n                <!-- <li>\n                    <a href=\"index.html\"><i class=\"fa fa-dashboard fa-fw\"></i> Dashboard</a>\n                </li> -->\n                <li>\n                    <a href=\"javacript:;\"  [routerLink]=\"['/clients']\"><i class=\"fa fa-bar-chart-o fa-fw\"></i>Client Management</a>\n                </li>\n                <li>\n                    <a href=\"javascript:;\" [routerLink]=\"['/guards']\"><i class=\"fa fa-table fa-fw\"></i>Guards Management</a>\n                </li>\n                <li>\n                    <a href=\"javascript:;\" [routerLink]=\"['/schedule']\"><i class=\"fa fa-edit fa-fw\"></i>Scheduling & Time Sheet</a>\n                </li>\n                <!-- <li>\n                    <a href=\"#\"><i class=\"fa fa-wrench fa-fw\"></i>Reports</a>\n                </li> -->\n\n            </ul>\n\n\n        </div>\n\n    </div>\n</nav>\n\n\n<div id=\"page-wrapper\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 989:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t  <ng2-popup #popup></ng2-popup>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-5\">\n\t\t\t<h3>\n\t\t\t\t{{!!id ? 'Edit' : 'Add New'}} Client\n\t\t\t</h3>\n\t\t\t<form class=\"mar-top-20 pad-top-10\" role=\"form\">\n\t\t\t\t<div class=\"form-group\">\n\n\t\t\t\t\t<label for=\"exampleInputEmail1\">\n\t\t\t\t\t\tContact Person\n\t\t\t\t\t</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"personName\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\n          <label for=\"exampleInputEmail1\">\n            Contact\n          </label>\n          <input type=\"text\" class=\"form-control\" id=\"contact\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\n          <label for=\"exampleInputEmail1\">\n\t\t\t\t\t\tEmail address\n\t\t\t\t\t</label>\n\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" />\n\t\t\t\t</div>\n\n\t\t\t\t<button type=\"submit\" class=\"btn btn-default\">\n\t\t\t\t\tSave\n\t\t\t\t</button>\n\t\t\t</form>\n\t\t\t<h3>\n\t\t\t\tClients\n\t\t\t</h3>\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\n\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\tIncident\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\tTimestamp\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\tLocation\n\t\t\t\t\t\t</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t01/04/2012\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tDefault\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t\t<div class=\"col-md-7\">\n\t\t\t<div class=\"row pad-bottom-20\">\n\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t<h3>\n\t\t\t\t\t\tClient's Location\n\t\t\t\t\t</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-5 pad-top-20\">\n\n\t\t\t\t\t<button type=\"button\"   (click)=\"openPopup('small', 'Hello Small Popup')\" class=\"fl-right btn btn-default\">\n\t\t\t\t\t\tAdd New Location\n\t\t\t\t\t</button>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\n\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>\n\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\tCode\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\tName\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\tAddress\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr class=\"active\">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\"><span class=\"glyphicon glyphicon-edit\"></span></a>\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\"><span class=\"glyphicon glyphicon-remove\"></span></a>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t01/04/2012\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tDefault\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 990:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-9\">\n\n      <form class=\"form-horizontal\">\n<fieldset>\n\n<!-- Form Name -->\n<legend>Add Location</legend>\n\n<!-- Text input-->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"name\">Name</label>\n<div class=\"col-md-4\">\n<input id=\"name\" name=\"name\" type=\"text\" placeholder=\"Name\" class=\"form-control input-md\" required=\"\">\n\n</div>\n</div>\n\n<!-- Textarea -->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"address\">Address</label>\n<div class=\"col-md-4\">\n  <textarea class=\"form-control\" id=\"address\" name=\"address\">Enter Address</textarea>\n</div>\n</div>\n\n<!-- Text input-->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"contact\">Contact</label>\n<div class=\"col-md-4\">\n<input id=\"contact\" name=\"contact\" type=\"text\" placeholder=\"Phone number\" class=\"form-control input-md\" required=\"\">\n\n</div>\n</div>\n\n<!-- Select Basic -->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"City\">City</label>\n<div class=\"col-md-4\">\n  <select id=\"City\" name=\"City\" class=\"form-control\">\n    <option value=\"1\">Alaska</option>\n    <option value=\"2\">Boston</option>\n  </select>\n</div>\n\n\n<label class=\"col-md-2 control-label\" for=\"country\">Country</label>\n<div class=\"col-md-4\">\n  <select id=\"country\" name=\"country\" class=\"form-control\">\n    <option value=\"1\">US</option>\n    <option value=\"2\">USA</option>\n  </select>\n</div>\n</div>\n\n\n<!-- Text input-->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"lat\">Latitude</label>\n<div class=\"col-md-4\">\n<input id=\"lat\" name=\"lat\" type=\"text\" placeholder=\"Enter Latitude\" class=\"form-control input-sm\" required=\"\">\n\n</div>\n\n\n<label class=\"col-md-2 control-label\" for=\"longitude\">Longitude</label>\n<div class=\"col-md-4\">\n<input id=\"longitude\" name=\"longitude\" type=\"text\" placeholder=\"Longitude\" class=\"form-control input-sm\" required=\"\">\n\n</div>\n</div>\n\n\n\n<!-- Text input-->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"zip\">Zip</label>\n<div class=\"col-md-4\">\n<input id=\"zip\" name=\"zip\" type=\"text\" placeholder=\"Zip Code\" class=\"form-control input-md\">\n\n</div>\n</div>\n\n<!-- Text input-->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"code\">Code</label>\n<div class=\"col-md-4\">\n<input id=\"code\" name=\"code\" type=\"text\" placeholder=\"Code\" class=\"form-control input-md\" required=\"\">\n\n</div>\n</div>\n\n<!-- Multiple Checkboxes (inline) -->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"doqr\">Generate QR</label>\n<div class=\"col-md-4\">\n  <label class=\"checkbox-inline\" for=\"doqr-0\">\n    <input type=\"checkbox\" name=\"doqr\" id=\"doqr-0\" value=\"1\">\n    Yes\n  </label>\n</div>\n</div>\n\n<!-- Select Basic -->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"status\">Status</label>\n<div class=\"col-md-4\">\n  <select id=\"status\" name=\"status\" class=\"form-control\">\n    <option value=\"1\">Active</option>\n    <option value=\"2\">In Active</option>\n  </select>\n</div>\n</div>\n\n<!-- Button (Double) -->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"submit\"></label>\n<div class=\"col-md-8\">\n  <button id=\"submit\" name=\"submit\" type=\"submit\" class=\"btn btn-success\">Submit</button>\n  <button id=\"cancel\" name=\"cancel\" type=\"reset\" (click)=\"closePopUp()\" class=\"btn btn-danger\">Cancel</button>\n</div>\n</div>\n\n</fieldset>\n</form>\n\n\n\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n      <div class=\"row qr-location\">\n\n         <img alt=\"Bootstrap Image Preview\" src=\"http://lorempixel.com/140/140/\" />\n         <div class=\"qr-location-buttons\">\n           <button id=\"regen\" name=\"regen\"  class=\"fl-right btn btn-sm btn-default\">Submit</button>\n           <!-- <button id=\"cancel\" name=\"cancel\" type=\"reset\" class=\"btn btn-danger\">Cancel</button> -->\n         </div>\n\n      </div>\n\n\n\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 991:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-md-12 client-top\">\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<h3>Clients</h3>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-9\">\r\n\t\t\t<div class=\"btn-section pull-right\">\r\n\t\t\t\t<button class=\"btn btn-primary btn-success\" [routerLink]=\"['add']\" ng-show=\"!asd\">Add</button>\r\n\r\n\t\t\t</div>\r\n\t\t\t<div class=\"btn-section col-md-6 pull-right\">\r\n\t\t\t\t<div class=\"form-group has-feedback\">\r\n\t                <label for=\"search\" class=\"sr-only\">Search</label>\r\n\t                <input type=\"text\" class=\"form-control\" ng-model=\"searchKeyword\" placeholder=\"search\" ng-change=\"currentPage=1;\">\r\n\t                <span class=\"glyphicon glyphicon-search form-control-feedback\"></span>\r\n\t            </div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"row\">\r\n\t<div class=\"col-md-12\">\r\n\t    <div class=\"panel panel-default\">\r\n\t        <div class=\"panel-body\">\r\n\t            <div class=\"table-responsive\">\r\n\t                <table class=\"table\">\r\n\t                    <thead>\r\n\t                        <tr>\r\n\t                            <th></th>\r\n\t                            <th>Name</th>\r\n\t                            <th>Contact Person</th>\r\n\t                            <th>Contact</th>\r\n\t                            <th>Email</th>\r\n\t                            <th>Locations</th>\r\n\t                        </tr>\r\n\t                    </thead>\r\n\t                    <tbody>\r\n\t                        <tr ng-repeat=\"client in clients\">\r\n\t                            <td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" [routerLink]=\"['edit/1']\"><span class=\"glyphicon glyphicon-edit\"></span></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\"><span class=\"glyphicon glyphicon-remove\"></span></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t                            <td>Saad</td>\r\n\t                            <td>Saad</td>\r\n\t                            <td>Saad</td>\r\n\t                            <td>Saad</td>\r\n\t                            <td>Saad</td>\r\n\t                        </tr>\r\n\t                    </tbody>\r\n\t                </table>\r\n\t            </div>\r\n\t        </div>\r\n\t    </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 992:
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\">\r\n<fieldset>\r\n\r\n<!-- Form Name -->\r\n<legend>{{!!id ? 'Edit' : 'Add New'}} Guard</legend>\r\n\r\n<!-- File Button -->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"photo\">Photo</label>\r\n  <div class=\"col-md-4\">\r\n    <input id=\"photo\" name=\"photo\" class=\"input-file\" type=\"file\">\r\n  </div>\r\n</div>\r\n\r\n<!-- Text input-->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"Name\">Guard Name</label>\r\n  <div class=\"col-md-4\">\r\n  <input id=\"Name\" name=\"Name\" type=\"text\" placeholder=\"Guard Name\" class=\"form-control input-md\" required=\"\">\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- Text input-->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"pin\">PIN Code</label>\r\n  <div class=\"col-md-4\">\r\n  <input id=\"pin\" name=\"pin\" type=\"text\" placeholder=\"Guards PIN Code\" class=\"form-control input-md\" required=\"\">\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- Textarea -->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"address\">Address</label>\r\n  <div class=\"col-md-4\">\r\n    <textarea class=\"form-control\" id=\"address\" name=\"address\">- </textarea>\r\n  </div>\r\n</div>\r\n\r\n<!-- Text input-->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"contact\">Contact</label>\r\n  <div class=\"col-md-4\">\r\n  <input id=\"contact\" name=\"contact\" type=\"text\" placeholder=\"Contact Number\" class=\"form-control input-md\" required=\"\">\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- Text input-->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"emal\">Email</label>\r\n  <div class=\"col-md-4\">\r\n  <input id=\"emal\" name=\"emal\" type=\"text\" placeholder=\"Email address\" class=\"form-control input-md\" required=\"\">\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- Multiple Radios -->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"radios\">Status</label>\r\n  <div class=\"col-md-4\">\r\n  <div class=\"radio\">\r\n    <label for=\"radios-0\">\r\n      <input type=\"radio\" name=\"radios\" id=\"radios-0\" value=\"0\" checked=\"checked\">\r\n      Active\r\n    </label>\r\n\t</div>\r\n  <div class=\"radio\">\r\n    <label for=\"radios-1\">\r\n      <input type=\"radio\" name=\"radios\" id=\"radios-1\" value=\"1\">\r\n      Inactive\r\n    </label>\r\n\t</div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"form-group\">\r\n<label class=\"col-md-4 control-label\" for=\"submit\"></label>\r\n<div class=\"col-md-4\">\r\n  <button id=\"submit\" name=\"submit\" type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n  <button id=\"cancel\" name=\"cancel\" type=\"reset\" Class=\"btn btn-danger\">Cancel</button>\r\n</div>\r\n</div>\r\n\r\n</fieldset>\r\n</form>\r\n"

/***/ }),

/***/ 993:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-12 client-top\">\n\t\t<div class=\"col-md-3\">\n\t\t\t<h3>Guards</h3>\n\t\t</div>\n\t\t<div class=\"col-md-9\">\n\t\t\t<div class=\"btn-section pull-right\">\n\t\t\t\t<button class=\"btn btn-primary btn-success\" [routerLink]=\"['add']\" ng-show=\"!asd\">Add</button>\n\n\n\t\t\t</div>\n\t\t\t<div class=\"btn-section col-md-6 pull-right\">\n\t\t\t\t<div class=\"form-group has-feedback\">\n\t                <label for=\"search\" class=\"sr-only\">Search</label>\n\t                <input type=\"text\" class=\"form-control\" ng-model=\"searchKeyword\" placeholder=\"search\" ng-change=\"currentPage=1;\">\n\t                <span class=\"glyphicon glyphicon-search form-control-feedback\"></span>\n\t            </div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-md-12\">\n\t    <div class=\"panel panel-default\">\n\t        <div class=\"panel-body\">\n\t            <div class=\"table-responsive\">\n\t                <table class=\"table\">\n\t                    <thead>\n\t                        <tr>\n\t                            <th></th>\n\t                            <th>Name</th>\n\t                            <th>Contact Person</th>\n\t                            <th>Contact</th>\n\t                            <th>Email</th>\n\t                            <th>Locations</th>\n\t                        </tr>\n\t                    </thead>\n\t                    <tbody>\n\t                        <tr ng-repeat=\"client in clients\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\" [routerLink]=\"['edit/1']\" ><span class=\"glyphicon glyphicon-edit\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\"><span class=\"glyphicon glyphicon-remove\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t                            <td>Saad</td>\n\t                            <td>Saad</td>\n\t                            <td>Saad</td>\n\t                            <td>Saad</td>\n\t                            <td>Saad</td>\n\t                        </tr>\n\t                    </tbody>\n\t                </table>\n\t            </div>\n\t        </div>\n\t    </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 994:
/***/ (function(module, exports) {

module.exports = "<form ngNoForm class=\"form-horizontal\">\r\n<fieldset>\r\n\r\n<!-- Form Name -->\r\n<legend>{{!!id ? 'Edit' : 'Add New'}} Duty</legend>\r\n\r\n<!-- Select Basic -->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"guard\">Guard</label>\r\n  <div class=\"col-md-4\">\r\n    <select id=\"guard\" name=\"guard\" class=\"form-control\">\r\n      <option value=\"1\">Option one</option>\r\n      <option value=\"2\">Option two</option>\r\n    </select>\r\n  </div>\r\n</div>\r\n\r\n<!-- Select Basic -->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"client\">Client</label>\r\n  <div class=\"col-md-4\">\r\n    <select id=\"client\" name=\"client\" class=\"form-control\">\r\n      <option value=\"1\">Option one</option>\r\n      <option value=\"2\">Option two</option>\r\n    </select>\r\n  </div>\r\n</div>\r\n\r\n<!-- Select Basic -->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"location\">Location</label>\r\n  <div class=\"col-md-4\">\r\n    <select id=\"location\" name=\"location\" class=\"form-control\">\r\n      <option value=\"1\">Option one</option>\r\n      <option value=\"2\">Option two</option>\r\n    </select>\r\n  </div>\r\n</div>\r\n\r\n<!-- Text input-->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"textinput\">Date</label>\r\n  <div class=\"col-md-4\">\r\n  <!-- <input id=\"textinput\" name=\"textinput\" type=\"text\" placeholder=\"placeholder\" class=\"form-control input-md\"> -->\r\n  <input class=\"form-control input-md\"\r\n     [(ngModel)]=\"date2\"\r\n      ng2-datetime-picker\r\n    date-format=\"YYYY-MM-DD\"\r\n     year=\"2014\"\r\n     month=\"12\"\r\n     day=\"31\"\r\n     hour=\"23\"\r\n     minute='59'\r\n     date-only=\"true\"\r\n     [close-on-select]=\"false\"  />\r\n  <span class=\"help-block\">Click to select date</span>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"fromTime\">From</label>\r\n  <div class=\"col-md-4\">\r\n  <!-- <input id=\"textinput\" name=\"textinput\" type=\"text\" placeholder=\"placeholder\" class=\"form-control input-md\"> -->\r\n  <input class=\"form-control input-md\"\r\n     [(ngModel)]=\"fromTime\"\r\n      ng2-datetime-picker\r\n      date-format=\"hh:mm a\"\r\n     hour=\"12\"\r\n     minute='59'\r\n     time-only=\"true\"\r\n     [close-on-select]=\"false\"  />\r\n  <span class=\"help-block\">Click to select starting time</span>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"fromTime\">To</label>\r\n  <div class=\"col-md-4\">\r\n  <!-- <input id=\"textinput\" name=\"textinput\" type=\"text\" placeholder=\"placeholder\" class=\"form-control input-md\"> -->\r\n  <input class=\"form-control input-md\"\r\n     [(ngModel)]=\"toTime\"\r\n      ng2-datetime-picker\r\n      date-format=\"hh:mm a\"\r\n     hour=\"12\"\r\n     minute='59'\r\n     time-only=\"true\"\r\n     [close-on-select]=\"false\"  />\r\n  <span class=\"help-block\">Click to set ending time</span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"form-group\">\r\n<label class=\"col-md-4 control-label\" for=\"submit\"></label>\r\n<div class=\"col-md-4\">\r\n  <button id=\"submit\" name=\"submit\" type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n  <button id=\"cancel\" name=\"cancel\" type=\"reset\" (click)=\"closePopUp()\" class=\"mar-left-5 btn btn-danger\">Cancel</button>\r\n</div>\r\n</div>\r\n\r\n</fieldset>\r\n</form>\r\n"

/***/ }),

/***/ 995:
/***/ (function(module, exports) {

module.exports = "<h3>McDonalds Schedule</h3>\n\n\n\n<h4> Locations </h4>\n\n<div class=\"panel-group\" id=\"accordion\">\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h4 class=\"panel-title\">\n      <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\">\n        Askari 4\n      </a>\n    </h4>\n  </div>\n  <div id=\"collapseOne\" class=\"panel-collapse collapse in\">\n    <div class=\"panel-body\">\n\n      <div class=\"row pad-bottom-20 pad-right-20\">\n      <div class=\"btn-section pull-right\">\n        <button class=\"btn btn-primary btn-success\" [routerLink]=\"['timesheet']\" ng-show=\"!asd\">View Time Sheet</button>\n\n\n      </div>\n      </div>\n\n\n      <div class=\"panel panel-default\">\n\t        <div class=\"panel-body\">\n\t            <div class=\"table-responsive\">\n\t                <table class=\"table\">\n\t                    <thead>\n\t                        <tr>\n\t                            <th></th>\n\t                            <th>Name</th>\n\t                            <th>Contact Person</th>\n\t                            <th>Contact</th>\n\t                            <th>Email</th>\n\t                            <th>Locations</th>\n\t                        </tr>\n\t                    </thead>\n\t                    <tbody>\n\t                        <tr ng-repeat=\"client in clients\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\" [routerLink]=\"['/schedule/edit/1']\" ><span class=\"glyphicon glyphicon-edit\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\"><span class=\"glyphicon glyphicon-remove\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t                            <td>Saad</td>\n\t                            <td>Saad</td>\n\t                            <td>Saad</td>\n\t                            <td>Saad</td>\n\t                            <td>Saad</td>\n\t                        </tr>\n\t                    </tbody>\n\t                </table>\n\t            </div>\n\t        </div>\n\t    </div>\n    </div>\n  </div>\n</div>\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h4 class=\"panel-title\">\n      <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\">\n        Sea View\n      </a>\n    </h4>\n  </div>\n  <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\n    <div class=\"panel-body\">\n      <div class=\"panel panel-default\">\n\t        <div class=\"panel-body\">\n\t            <div class=\"table-responsive\">\n\t                <table class=\"table\">\n\t                    <thead>\n\t                        <tr>\n\t                            <th></th>\n\t                            <th>Name</th>\n\t                            <th>Contact Person</th>\n\t                            <th>Contact</th>\n\t                            <th>Email</th>\n\t                            <th>Locations</th>\n\t                        </tr>\n\t                    </thead>\n\t                    <tbody>\n\t                        <tr ng-repeat=\"client in clients\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\" [routerLink]=\"['edit/1']\" ><span class=\"glyphicon glyphicon-edit\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\"><span class=\"glyphicon glyphicon-remove\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t                            <td>Saad</td>\n\t                            <td>Saad</td>\n\t                            <td>Saad</td>\n\t                            <td>Saad</td>\n\t                            <td>Saad</td>\n\t                        </tr>\n\t                    </tbody>\n\t                </table>\n\t            </div>\n\t        </div>\n\t    </div>\n    </div>\n  </div>\n</div>\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h4 class=\"panel-title\">\n      <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\">\n        Gul Plaza\n      </a>\n    </h4>\n  </div>\n  <div id=\"collapseThree\" class=\"panel-collapse collapse\">\n    <div class=\"panel-body\">\n      <div class=\"panel panel-default\">\n\t        <div class=\"panel-body\">\n\t            <div class=\"table-responsive\">\n\t                <table class=\"table\">\n\t                    <thead>\n\t                        <tr>\n\t                            <th></th>\n\t                            <th>Name</th>\n\t                            <th>Contact Person</th>\n\t                            <th>Contact</th>\n\t                            <th>Email</th>\n\t                            <th>Locations</th>\n\t                        </tr>\n\t                    </thead>\n\t                    <tbody>\n\t                        <tr ng-repeat=\"client in clients\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\" [routerLink]=\"['edit/1']\" ><span class=\"glyphicon glyphicon-edit\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\"><span class=\"glyphicon glyphicon-remove\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t                            <td>Saad</td>\n\t                            <td>Saad</td>\n\t                            <td>Saad</td>\n\t                            <td>Saad</td>\n\t                            <td>Saad</td>\n\t                        </tr>\n\t                    </tbody>\n\t                </table>\n\t            </div>\n\t        </div>\n\t    </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ 996:
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-section pull-right\">\n  <button class=\"btn btn-primary btn-success\" [routerLink]=\"['add']\" ng-show=\"!asd\">Add Duty</button>\n\n</div>\n<tabset>\n  <tab heading=\"Client Schedules\">\n\n    <div class=\"row pad-top-20\">\n\n    \t<div class=\"col-md-12\">\n    \t    <div class=\"panel panel-default\">\n    \t        <div class=\"panel-body\">\n    \t            <div class=\"table-responsive\">\n    \t                <table class=\"table\">\n    \t                    <thead>\n    \t                        <tr>\n\n    \t                            <th>Client</th>\n    \t                            <th>Number Of Locations</th>\n    \t                            <th>Status</th>\n    \t                            <th></th>\n\n    \t                        </tr>\n    \t                    </thead>\n    \t                    <tbody>\n    \t                        <tr ng-repeat=\"client in clients\">\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Mc Donalds</td>\n    \t                            <td>3</td>\n    \t                            <td>Active</td>\n    \t                            <td><a href=\"javascript:;\" [routerLink]=\"['detail/1']\" >View Schedule</a></td>\n\n    \t                        </tr>\n    \t                    </tbody>\n    \t                </table>\n    \t            </div>\n    \t        </div>\n    \t    </div>\n        </div>\n    </div>\n\n\n  </tab>\n\n\n\n\n  <tab heading=\"Guards Schedule\">\n\n\n    <div class=\"row pad-top-20\">\n\n      <div class=\"col-md-12\">\n          <div class=\"panel panel-default\">\n              <div class=\"panel-body\">\n                  <div class=\"table-responsive\">\n                      <table class=\"table\">\n                          <thead>\n                              <tr>\n\n                                  <th>Guards</th>\n                                  <th>Number Of Duties</th>\n                                  <th>Status</th>\n                                  <th></th>\n                              </tr>\n                          </thead>\n                          <tbody>\n                              <tr ng-repeat=\"client in clients\">\n                                <td>John Mac</td>\n                                  <td>3</td>\n                                  <td>Active</td>\n                                  <td><a href=\"javascript:;\" [routerLink]=\"['detail/1']\" >View Schedule</a></td>\n                              </tr>\n                          </tbody>\n                      </table>\n                  </div>\n              </div>\n          </div>\n        </div>\n    </div>\n\n\n\n\n\n  </tab>\n</tabset>\n"

/***/ }),

/***/ 997:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-12 client-top\">\n\t\t<div class=\"col-md-3 mar-bottom-10\">\n\t\t\t<h3>Time Sheet</h3>\n\t\t</div>\n\n\t</div>\n\t<div class=\"col-md-12\">\n\t    <div class=\"panel panel-default\">\n\t        <div class=\"panel-body\">\n\t            <div class=\"table-responsive\">\n\t                <table class=\"table\">\n\t                    <thead>\n\t                        <tr>\n\n\t                            <th>Guard</th>\n\t                            <th>CheckIn</th>\n\t                            <th>CheckOut</th>\n\t                            <th>Status</th>\n\t                            <th>Break Dur</th>\n                              <th>Total Dur</th>\n\t                        </tr>\n\t                    </thead>\n\t                    <tbody>\n\t                        <tr ng-repeat=\"client in clients\">\n\n\t                            <td>Saad</td>\n\t                            <td>8:00 am</td>\n\t                            <td>9:15 pm</td>\n\t                            <td><span class=\"label label-success\">Success</span></td>\n\t                            <td>5</td>\n                              <td>75</td>\n\t                        </tr>\n\t                    </tbody>\n                      <tbody>\n\t                        <tr ng-repeat=\"client in clients\">\n\n\t                            <td>John</td>\n\t                            <td>10:00 am</td>\n\t                            <td>11:15 pm</td>\n\t                            <td><span class=\"label label-info\">Delayed</span></td>\n\t                            <td>15</td>\n                              <td>75</td>\n\t                        </tr>\n\t                    </tbody>\n\t                </table>\n\t            </div>\n\t        </div>\n\t    </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 998:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-5\">\n\t\t\t<h3>\n\t\t\t\th3. Lorem ipsum dolor sit amet.\n\t\t\t</h3>\n\t\t\t<form role=\"form\">\n\t\t\t\t<div class=\"form-group\">\n\n\t\t\t\t\t<label for=\"exampleInputEmail1\">\n\t\t\t\t\t\tContact Person\n\t\t\t\t\t</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"personName\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\n          <label for=\"exampleInputEmail1\">\n            Contact\n          </label>\n          <input type=\"text\" class=\"form-control\" id=\"contact\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\n          <label for=\"exampleInputEmail1\">\n\t\t\t\t\t\tEmail address\n\t\t\t\t\t</label>\n\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" />\n\t\t\t\t</div>\n\n\t\t\t\t<button type=\"submit\" class=\"btn btn-default\">\n\t\t\t\t\tSave\n\t\t\t\t</button>\n\t\t\t</form>\n\t\t\t<h3>\n\t\t\t\th3. Lorem ipsum dolor sit amet.\n\t\t\t</h3>\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t#\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\tProduct\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\tPayment Taken\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\tStatus\n\t\t\t\t\t\t</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t1\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t01/04/2012\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tDefault\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr class=\"active\">\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t1\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t01/04/2012\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tApproved\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr class=\"success\">\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t2\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t02/04/2012\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tDeclined\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr class=\"warning\">\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t3\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t03/04/2012\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tPending\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr class=\"danger\">\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t4\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t04/04/2012\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tCall in to confirm\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t\t<div class=\"col-md-7\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t<h3>\n\t\t\t\t\t\th3. Lorem ipsum dolor sit amet.\n\t\t\t\t\t</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-5\">\n\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\">\n\t\t\t\t\t\tDefault\n\t\t\t\t\t</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\">\n\t\t\t\t\t\tDefault\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n        <div class=\"col-md-12\">\n\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-default\">\n\t\t\t\t\t\tDefault\n\t\t\t\t\t</button>\n          <button type=\"button\" class=\"btn btn-sm btn-default\">\n\t\t\t\t\t\tDefault\n\t\t\t\t\t</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-default\">\n\t\t\t\t\t\tDefault\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t#\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\tProduct\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\tPayment Taken\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\tStatus\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t1\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t01/04/2012\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tDefault\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"active\">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t1\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t01/04/2012\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tApproved\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"success\">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t2\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t02/04/2012\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tDeclined\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"warning\">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t3\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t03/04/2012\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tPending\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"danger\">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t4\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t04/04/2012\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tCall in to confirm\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ })

},[1030]);
//# sourceMappingURL=main.bundle.map