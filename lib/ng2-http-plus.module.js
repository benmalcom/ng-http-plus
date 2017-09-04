"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_plus_service_1 = require("./http-plus.service");
var Ng2HttpPlusModule = (function () {
    function Ng2HttpPlusModule() {
    }
    Ng2HttpPlusModule = __decorate([
        core_1.NgModule({
            providers: [http_plus_service_1.HttpPlusService]
        })
    ], Ng2HttpPlusModule);
    return Ng2HttpPlusModule;
}());
exports.Ng2HttpPlusModule = Ng2HttpPlusModule;
//# sourceMappingURL=ng2-http-plus.module.js.map