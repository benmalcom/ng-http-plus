import { HttpPlusService, GET, POST, PUT, DELETE } from '../src';
describe('Ng2HttpPlus Test', function () {
    var httpPlusService;
    beforeAll(function () {
        httpPlusService = new HttpPlusService(null);
    });
    it('Method types returns appropriate verbs', function () {
        expect(GET).toEqual("GET");
        expect(POST).toEqual("POST");
        expect(PUT).toEqual("PUT");
        expect(DELETE).toEqual("DELETE");
    });
    it('Calls the setUrl method', function () {
        spyOn(httpPlusService, 'setUrl');
        httpPlusService.setUrl('http://google.com');
        expect(httpPlusService.setUrl).toHaveBeenCalledWith('http://google.com');
    });
    it('Calls the setQueryString method', function () {
        spyOn(httpPlusService, 'setQueryString');
        httpPlusService.setQueryString('user_id', 5);
        expect(httpPlusService.setQueryString).toHaveBeenCalledWith('user_id', 5);
    });
    it('Calls the setHeader method', function () {
        spyOn(httpPlusService, 'setHeader');
        httpPlusService.setHeader('application/json');
        expect(httpPlusService.setHeader).toHaveBeenCalledWith('application/json');
    });
    it('Calls the setCustomHeader method', function () {
        spyOn(httpPlusService, 'setCustomHeader');
        httpPlusService.setCustomHeader('x-access', 'xyxyxy');
        expect(httpPlusService.setCustomHeader).toHaveBeenCalledWith('x-access', 'xyxyxy');
    });
    it('Calls the send method', function () {
        spyOn(httpPlusService, 'send');
        httpPlusService.send(POST, { name: 'John Doe', age: 24 });
        expect(httpPlusService.send).toHaveBeenCalledWith(POST, { name: 'John Doe', age: 24 });
    });
});
//# sourceMappingURL=test.spec.js.map