var ecommerceApp = angular.module("ecommerceApp", ['ngRoute']);
ecommerceApp.config(['$routeProvider',
function($routeProvider) {
$routeProvider
  .when('/getProduct', { templateUrl: 'views/products.html',
                            controller: 
                            "ShoppingCtrl" })
  .when('/cart', { templateUrl: 'views/cart-item.html',
                            controller: "ShoppingCtrl"})
       		.otherwise({ redirectTo: '/getProduct' });

}]);

   


