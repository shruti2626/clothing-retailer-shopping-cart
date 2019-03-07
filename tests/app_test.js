"use strict";
describe("ecommerce.app_test", function () {
    beforeEach(module("ecommerceApp"));
    beforeEach(module('ngRoute'));

    it('should map routes to controllers', function () {
        inject(function ($route, $rootScope, $location) {

            expect($route.current).toBeUndefined();
            $location.path('/phones/1');
            $rootScope.$digest();

            expect($route.routes['/getProduct'].controller).toBe('ShoppingCtrl');
            expect($route.routes['/getProduct'].templateUrl).
                toEqual('views/products.html');
                
            $location.path('/otherwise');
            $rootScope.$digest();

            expect($route.routes['/cart'].templateUrl).
                toEqual('partials/cart-iteml.html');
            expect($route.routes['/cart'].controller).
                toEqual('ShoppingCtrl');

            // otherwise redirect to
            expect($route.routes[null].redirectTo).toEqual('/getProduct')
        });
    });

});
