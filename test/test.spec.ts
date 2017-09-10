import {HttpPlusService,GET,POST,PUT,DELETE} from '../src';


describe('Ng2HttpPlus Test', () => {
    let httpPlusService: HttpPlusService;

    beforeAll( ()=> {
        httpPlusService = new HttpPlusService(null);
    });

    it('Method types returns appropriate verbs', () => {
        expect(GET).toEqual("GET");
        expect(POST).toEqual("POST");
        expect(PUT).toEqual("PUT");
        expect(DELETE).toEqual("DELETE");
    });

    it('Calls the setUrl method', () => {

        spyOn(httpPlusService, 'setUrl');
        httpPlusService.setUrl('http://google.com');
        expect(httpPlusService.setUrl).toHaveBeenCalledWith('http://google.com');
    });

    it('Calls the setQueryString method', () => {

        spyOn(httpPlusService, 'setQueryString');
        httpPlusService.setQueryString('user_id',5);
        expect(httpPlusService.setQueryString).toHaveBeenCalledWith('user_id',5);
    });

    it('Calls the setHeader method', () => {

        spyOn(httpPlusService, 'setHeader');
        httpPlusService.setHeader('application/json');
        expect(httpPlusService.setHeader).toHaveBeenCalledWith('application/json');
    });

    it('Calls the setCustomHeader method', () => {

        spyOn(httpPlusService, 'setCustomHeader');
        httpPlusService.setCustomHeader('x-access','xyxyxy');
        expect(httpPlusService.setCustomHeader).toHaveBeenCalledWith('x-access','xyxyxy');
    });

    it('Calls the send method', () => {

        spyOn(httpPlusService, 'send');
        httpPlusService.send(POST,{name:'John Doe', age: 24});
        expect(httpPlusService.send).toHaveBeenCalledWith(POST,{name:'John Doe', age: 24});
    });
});