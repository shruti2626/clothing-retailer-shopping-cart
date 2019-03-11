
"use strict";
describe('eCommerce.ShoppingCtrlSpec', function (){
    // load the controller's module
    beforeEach(module('ecommerceApp'));

    var $controller,
    $scope, 
    products,
    cartitems,
    $controller = $controller("ShoppingCtrl", { $scope: $scope, ProductDetailService: mockDataService});
      describe("test getProductList method", function () {
        it("initiate happy flow", function () {
                $scope.currentPage = 1;
                $scope.AccountsByPage = [null, [{"AccountId": "NA","Currency": "EUR", "Nickname": "Savings Account_NickName", "Account": {"SchemeName": "SortCodeAccountNumber", "Identification": "90154223682880","Name": null,"SecondaryIdentification": null},"Servicer": null,  "AccountType": "Current Account","AdditionalInformation": { "PAYER-JURISDICTION": "GREAT_BRITAIN","IBAN": "IE76BOFI90154223682838","ACCOUNT-NUMBER": "23682838","ACCOUNT-PERMISSION": "A","BICFI": "BOFIIE2DXXX","ACCOUNT-NSC": "901542"},"HashedValue": "416d29050vxcvxc643159e61405c0406241a2c43649f1cff02b352d811645640893ad6","selected": false,"accountDisabled": false}]] ;
                expect($scope.selectAllAcctBtnChecked).toBeDefined();
                $scope.selectAllAcctBtnChecked();
                expect($scope.selectAllAccBtnEnabled).toEqual(true);
            });
      });
});
