/**
 * Created by ben on 02/09/2017.
 */
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams, Response} from "@angular/http";
import {POST, PUT, DELETE, GET} from "./helper";
import {Observable} from "rxjs/Observable";



@Injectable()
export class HttpPlusService {

    private http: Http;
    private queryString: URLSearchParams;
    private headers: Headers;
    private requestUrl;
    private requestOptions: RequestOptions;

    constructor(http: Http) {
        this.http = http;
        this.queryString = new URLSearchParams();
        this.requestOptions = new RequestOptions();
        this.headers = new Headers();
    }

    /*Set the url you are sending the request to. Throws error if not set*/
    public setUrl(url: string) {
        this.clear();
        this.requestUrl = url;
        return this;
    }

    /*Set optional query string to append to url*/
    public setQueryString(prop: string, value: any) {
        if (prop && value)
            this.queryString.set(prop, value);
        return this;
    }


    /*Set header with 'Content-Type' key to accompany request*/
    public setHeader(value: any) {
        if (value) {
            this.headers.set('Content-Type', value);
        }
        return this;
    }

    /*Set header with custom key to accompany request*/
    public setCustomHeader(prop: string, value: string) {
        if (prop && value)
            this.headers.set(prop, value);
        return this;
    }


    /*Finally send the request after building it*/
    public send(method: string = GET, body: any = {}){
        if (!this.requestUrl) {
            throw new Error("Error: the request url is not set.");
        }
        return this.buildRequest(method, body);
    }


    /*Build the request with the available options*/
    private buildRequest(method: string, body: any = {})   : Observable<Response> {
        method = method.toUpperCase();
        this.requestOptions['headers'] = this.headers;
        this.requestOptions['search'] = this.queryString;

        let requestOptions = this.requestOptions;
        let url: string = this.requestUrl;
        let httpRequest = null;
        switch (method) {
            case POST :
                httpRequest = this.http.post(url, body, requestOptions);
                break;
            case PUT :
                httpRequest = this.http.put(url, body, requestOptions);
                break;
            case DELETE :
                httpRequest = this.http.delete(url, requestOptions);
                break;
            case GET :
                httpRequest = this.http.get(url, requestOptions);
                break;
            default:
                httpRequest = this.http.get(url, requestOptions);
                break;

        }

        if (!httpRequest) {
            throw new Error("Error: Nothing to send. Follow the instructions in setting up your request");
        }

        return httpRequest;
    }

    private clear() {
        this.queryString = new URLSearchParams();
        this.requestOptions = new RequestOptions();
        this.headers = new Headers();
    }
}