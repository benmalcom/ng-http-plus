# **ng2-http-plus**

   Provides a fun and simple way to send http requests with angular2.
   
   *Just a few lines of code, written on top of angular2 http.*
  
### Installation

***

     npm install --save ng2-http-plus
     
### Getting Started

***

Import the `Ng2HttpPlusModule` in your module:
    
```javascript
import {NgModule} from '@angular/core';
import {Ng2HttpPlusModule} from 'ng2-http-plus';
 
 @NgModule({
    imports: [
        // ...
        Ng2HttpPlusModule
     ],
    // ...
 })
 export class AppModule {}
```
     
To send requests, import the `HttpPlusService` and http verbs in your component or service:

```javascript
 import {HttpPlusService,GET,PUT,POST} from 'ng2-http-plus';
 import {Component, OnInit} from '@angular/core';
 
 @Component({
     selector: 'some',
     templateUrl: 'some-url.html'
 })
 class SomeComponent implements OnInit {
  
 
    // Inject HttpPlusService
     constructor(private httpPlus: HttpPlusService) {}
 
     ngOnInit() {
         // Let's send requests
         
         //Simplest form of a GET request
         this.httpPlus.setUrl('http://example-url.com');
         this.httpPlus.send(GET);
     }
 }
```
     
If a request method(GET,POST,PUT ....) is not specified, the request will be a GET request 
by default.

### Methods & Options

*** 

#### setUrl(url: string)
   This is the first method to be called on the HttpPlusService instance, it sets 
   the url your request will be sent to. This method returns an HttpPlusService instance
   for method chaining. This method is mandatory.
   
```javascript
//example
this.httpPlus.setUrl('http://example-url.com'); 
```
   
#### setQueryString(prop: string, value: any)
   When you need to append a query string to your url, this is the method to invoke.
   This method returns an HttpPlusService instance for method chaining.

```javascript
this.httpPlus.setQueryString('user_id',3); 
// url looks like this => 'http://example-url.com?user_id=3'
```
    
Invoke the method multiple times to set multiple query strings
 
#### setHeader(value: any)
   This method sets a header property 'Content-Type' to be equal to the value.
   This method returns an HttpPlusService instance for method chaining.

```javascript
this.httpPlus.setHeader('application/json'); 
//=> 'Content-Type': 'application/json'
```
    
Invoke the method multiple times to set multiple headers
   

#### setCustomHeader(prop: string, value: any)
   This method sets a user-defined header property to be equal to the 
   provided value.
   This method returns an HttpPlusService instance for method chaining.

```javascript
this.httpPlus.setCustomHeader('x-user-token', 'xxxxxxxxxx'); 
//=> 'x-user-token': 'xxxxxxxxxx'
```
    
Invoke the method multiple times to set multiple custom headers
   
#### send(method: string, body: any)
   This method sends the request. It can be called immediately after the 
    `setUrl()` method.
   The method accepts the request method and optional payload.
   This method returns an Observable type of Response.

```javascript
this.httpPlus.send(POST, {name: 'John Doe'}); 
```
   
   
### Sample Usage
This is a sample POST request.

```javascript
this.httpPlus
    .setUrl('http://example-url.com')
    .setQueryString('user_id',5)
    .setHeader('application/json')
    .setCustomHeader('x-access','xyxyxy')
    .send(POST,{name:'John Doe', age: 24})
    .subscribe( 
      success => {},
      error => {},
      () => console.log('Request Complete')
    );
```

