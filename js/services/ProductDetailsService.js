"use strict";
angular.module("ecommerceApp").factory("ProductDetailsService", ["$http", function ($http) {
        return {
        getProducts: function(){        
                return $http.get("./mock/product.json");
        }        
    };
}]);
