
"use strict";
describe("eCommerce.ProductDetailService_test", function () {

    beforeEach(module("ecommerceApp"));

    var service, output, $httpBackend
    beforeEach(inject(function ($injector, _$httpBackend_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.whenGET('views/products.html').respond('');
        service = $injector.get("ProductDetailService");
    }));

    describe("test getProduct", function () {
        it("test with response data", function () {
            inject(function ($http) {
                spyOn($http, "get").and.returnValue("output");
               output = service.getProducts();
                expect($http.get).toHaveBeenCalledWith(reqData);
                expect(output).toBe("output");
            });
        });
        
    });
    
});
