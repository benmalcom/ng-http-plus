var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { POST, PUT, DELETE } from "./helper";
var HttpPlusService = (function () {
    function HttpPlusService(http) {
        this.http = http;
        this.queryString = new URLSearchParams();
        this.requestOptions = new RequestOptions();
        this.headers = new Headers();
    }
    HttpPlusService.prototype.setUrl = function (url) {
        this.clear();
        this.requestUrl = url;
        return this;
    };
    HttpPlusService.prototype.setQueryString = function (prop, value) {
        if (prop && value)
            this.queryString.set(prop, value);
        return this;
    };
    HttpPlusService.prototype.setHeader = function (value) {
        if (value) {
            this.headers.set('Content-Type', value);
        }
        return this;
    };
    HttpPlusService.prototype.setCustomHeader = function (key, value) {
        if (key && value)
            this.headers.set(key, value);
        return this;
    };
    HttpPlusService.prototype.send = function (method, body) {
        if (body === void 0) { body = {}; }
        if (!this.requestUrl) {
            throw new Error("Error: Call the setUrl method to set the request url before building your request.");
        }
        return this.buildRequest(method, body);
    };
    HttpPlusService.prototype.buildRequest = function (method, body) {
        if (body === void 0) { body = {}; }
        method = method.toUpperCase();
        this.requestOptions['headers'] = this.headers;
        this.requestOptions['search'] = this.queryString;
        var requestOptions = this.requestOptions;
        var url = this.requestUrl;
        var httpRequest = this.http.get(url, requestOptions);
        switch (method) {
            case POST:
                httpRequest = this.http.post(url, body, requestOptions);
                break;
            case PUT:
                httpRequest = this.http.put(url, body, requestOptions);
                break;
            case DELETE:
                httpRequest = this.http.delete(url, requestOptions);
                break;
        }
        return httpRequest;
    };
    HttpPlusService.prototype.clear = function () {
        this.queryString = new URLSearchParams();
        this.requestOptions = new RequestOptions();
        this.headers = new Headers();
    };
    HttpPlusService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], HttpPlusService);
    return HttpPlusService;
}());
export { HttpPlusService };
//# sourceMappingURL=http-plus.service.js.map