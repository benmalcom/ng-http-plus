import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
export declare class HttpPlusService {
    private http;
    private queryString;
    private headers;
    private requestUrl;
    private requestOptions;
    constructor(http: Http);
    setUrl(url: string): this;
    setQueryString(prop: string, value: any): this;
    setHeader(value: any): this;
    setCustomHeader(prop: string, value: string): this;
    send(method?: string, body?: any): Observable<Response>;
    private buildRequest(method, body?);
    private clear();
}
