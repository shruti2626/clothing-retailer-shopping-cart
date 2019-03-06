"use strict";
angular.module("ecommerceApp").controller("ShoppingCtrl", ["$scope", "ProductDetailsService",function ($scope,  ProductDetailsService) {
        $scope.products = [];
        $scope.cartItem = [];
        var self = this;
        $scope.discountAmount = null;
        $scope.categoryFootwear = true;
        $scope.displayFinalAmount = false;
        $scope.validVoucher = false;
        this.cartName = "Angular Store";
        
      
    
        $scope.getProduct=function() {
            ProductDetailsService.getProducts().
                then(function (resp) {
                    if (resp.status == 200) {
                        $scope.products = resp.data;
                    }
                    else{
                        $scope.noProducts="No products to show"
                    }
                    //load the items from local storage to cartItem array 
                    //adjust the item quantity corresponding to quantity in products array
                    $scope.loadItems();
                });
         };

        //load items for local storage into cartItem array
        $scope.loadItems = function () {
            var items = localStorage != null ? localStorage[this.cartName + "_items"] : null;
            if (items != null && JSON != null) {
                try {
                    var items = JSON.parse(items);
                    for (var i = 0; i < items.length; i++) {
                        var item = items[i];
                        if (item.productName != null && item.price != null && item.category != null && item.quantity != null) {
                            item = new $scope.newCartItem(item.productName, item.price, item.quantity,item.category);
                            this.cartItem.push(item);
                        }
                    }
                    for(var i=0 ; i<$scope.cartItem.length;i++){
                        var cart = $scope.cartItem[i];
                        for(var j=0;j<$scope.products.length;j++){
                            if(cart.productName == $scope.products[j].productName){
                                $scope.products[j].quantityInStock = $scope.products[j].quantityInStock - cart.quantity;
                            }
                        }
                    }
                } 
                catch (err) {// ignore errors while loading...
                }
            }
            $scope.getTotalPrice();
            $scope.getTotalCount();
        };

        // save items to local storage
        $scope.saveItems = function () {
            if (localStorage != null && JSON != null) {
                localStorage[this.cartName + "_items"] = JSON.stringify(this.cartItem);
            }
            $scope.getTotalPrice();
            $scope.getTotalCount();
        };

        //validate quantity is number
        $scope.toNumber=function(value) {
            value = value * 1;
            return isNaN(value) ? 0 : value;
        };

        //add new item to cartItem array  
        //if item already exist in cartItem array increase the quantity count by 1
        //reduce the quantity of item from products array
        $scope.addItem = function (productName, price, quantity, category) {
            quantity = $scope.toNumber(quantity);
            var updateAll = false;
            if (quantity != 0) {
                for(var i = 0;i<$scope.products.length;i++){
                    var item = $scope.products[i];
                    if(item.productName == productName && quantity <= item.quantityInStock){                       
                        var found = false;
                        for (var i = 0; i < $scope.cartItem.length && !found; i++) {
                            var item = $scope.cartItem[i];
                            if (item.productName == productName) {
                                found = true;
                                item.quantity = $scope.toNumber(item.quantity + quantity);
                                if (item.quantity <= 0) {
                                    $scope.cartItem.splice(i, 1);
                                    //console.log($scope.cartItem);
                                    
                                }
                                updateAll = true;
                            }
                            if(updateAll){
                                break;
                            }
                        }
                        // new item, add now
                        if (!found) {
                            var item = new $scope.newCartItem(productName, price, quantity, category);
                            $scope.cartItem.push(item);
                            updateAll = true;
                        }
                        break;
                    }
                }
            }
            if(updateAll){
                $scope.saveItems();
                $scope.updateProducts(productName, price, quantity);                
            }
            else{
                $scope.outOfStockMsg='OUT OF STOCK !';
            }
        };

        //Reduce the quantity of particular item in products array
        $scope.updateProducts = function (productName, price, quantity) {            
            for(var i = 0;i<$scope.products.length;i++){
                var item = $scope.products[i];
                if(item.productName == productName){
                    item.quantityInStock = item.quantityInStock - quantity;
                }
            }
            
        };

        // get the total price for all items currently in the cart
        $scope.getTotalPrice = function(productName) {
            $scope.total = 0;
            for (var i = 0; i < $scope.cartItem.length; i++) {
                var item = $scope.cartItem[i];
                if (productName == null || item.productName == productName) {
                    $scope.total += $scope.toNumber(item.quantity * item.price);
                }
            };
            return $scope.total;
        };

        // get the total count for all items currently in the cart
        $scope.getTotalCount = function(productName) {
            $scope.count = 0;
            for (var i = 0; i < $scope.cartItem.length; i++) {
                var item = $scope.cartItem[i];
                if (productName == null || item.productName == productName) {
                    $scope.count += $scope.toNumber(item.quantity);
                }
            };
            return $scope.count;
        };

        //create key value pair of new cart item to be added to cartItem array
        $scope.newCartItem= function (productName, price, quantity, category) {
            this.productName = productName;
            this.price = price * 1;
            this.quantity = quantity * 1;
            this.category = category;
        }

        //remove all the items from the cartItem array
        //Adjust the quantity of items present in cartItem array with products array
        $scope.clearItems = function(){
            for(var i=0; i < $scope.cartItem.length;i++){
                for(var j=0; j<$scope.products.length;j++){
                    if($scope.cartItem[i].productName == $scope.products[j].productName){
                        $scope.products[j].quantityInStock = $scope.products[j].quantityInStock + $scope.cartItem[i].quantity;
                    }
                }
            }
            $scope.cartItem.length=[];
            $scope.saveItems();
        }
             //apply voucher tru
        $scope.checkValidVoucher = function(){
            if(($scope.voucherCode === "001" && $scope.total>=5))
            { $scope.applyDiscount(5); }
            else if($scope.voucherCode === "002" && $scope.total>=50){
                $scope.applyDiscount(10);
            }
            else if($scope.voucherCode === "003" && $scope.total>=75){
                $scope.applyDiscount(15);
            }
            else {
              $scope.validVoucher = true;
              $scope.voucherMessage = false;
            }
        };
       $scope.applyDiscount=function(discountAmount){
        $scope.total -= discountAmount;
        $scope.discountAmount = discountAmount;
        $scope.validVoucher = false;
        $scope.voucherMessage = true;
        $scope.voucherCode = "";
     };
     $scope.getProduct();
    }]);