"use strict";
describe('eCommerce.ShoppingCtrlSpec', function (){
    // load the controller's module
    beforeEach(module('ecommerceApp'));

    var $controller,
    $scope, ShoppingCtrl, $httpBackend, items,
     productsList = [
        {
                "category": "Women’s Footwear",
               "productName" : "Almond Toe Court Shoes,Patent Black",
               "quantityInStock":5,
               "price" : "99.00"
             }, 
             {
              "category": "Women’s Footwear",
              "productName" : "Suede Shoes, Blue Women’s Footwear",
              "quantityInStock":4,
              "price" : "42.00"
            },
        {
          "category": "Men’s Footwear",
           "productName" : "Leather Driver Saddle Loafers, Tan",
            "quantityInStock":12,
            "price" : 34.00
            }, 
            {
             "category": "Men’s Footwear",
             "productName" : "Flip Flops, Red",
             "quantityInStock":6,
             "price" : 19.00
           },
           {
            "category": "Men’s Footwear",
            "productName" : "Flip Flops, Blue",
            "quantityInStock":0,
            "price" : 19.00
          },
            
       
           {
            "category": "Women’s Casualwear ",
            "productName" : "Gold Button Cardigan, Black",
            "quantityInStock":6,
            "price" : 167.00
          }, 
          {
            "category": "Women’s Casualwear ",
           "productName" : "Cotton Shorts, Medium Red",
           "quantityInStock":5,
           "price" : 30.00
         },
       
      {
       
            "category": "Men’s Casualwear ",
            "productName" : "Fine Stripe Short Sleeve Shirt, Grey",
            "quantityInStock":9,
            "price" : "49.99"
          }, 
          {
            "category": "Men’s Casualwear ",
           "productName" : "Fine Stripe Short Sleeve Shirt, Green",
           "quantityInStock":3,
           "price" : "39.00"
         },
         
        {
            "category": "Men’s Formalwear ",
            "productName" : "Sharkskin Waistcoat,Charcoal",
            "quantityInStock":2,
            "price" : "75.00"
          }, 
          {
            "category": "Men’s Formalwear ",
           "productName" : "Lightweight Patch Pocket Blazer, Deer",
           "quantityInStock":1,
           "price" : "175.00"
          },
      
        {
           "category": "Women's Formalwear ",
            "productName" : "Bird Print Dress, Black",
            "quantityInStock":10,
            "price" : "270.00"
          }, 
          {
            "category": "Women's Formalwear ",
           "productName" : "Mid Twist Cut-Out Dress,Pink",
           "quantityInStock":5,
           "price" : "540.00"
         }
      
      ];
               
      describe("test getProduct method", function () {
        beforeEach(inject(function(_$httpBackend_,$http,$rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            http = $http;
            items = $httpBackend.expectGET('mock/products.json');
            scope = $rootScope.$new();
            ctrl = $controller('ShoppingCtrl', {$scope: scope});
          }));
        it("initiate happy flow", function () {
            http.get('mock/products.json').then(function(response){
              expect(scope.products).toEqualData(productsList);
            });
           });
           it("initiate error flow", function () {
            expect(scope.products).toBeUndefined();
            });
           });
        });
    });

    