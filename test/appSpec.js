"use strict";
describe("eCommerce.app_test", function () {
    var  $httpBackend;

     beforeEach(inject(function (_$rootScope_, _$httpBackend_, _$fraudAnalyze_) {
        $rootScope = _$rootScope_;
        config = _config_;
        $location = _$location_;
        $fraudAnalyze = _$fraudAnalyze_;
        q = $q;
        deferred = q.defer();
        $httpBackend = _$httpBackend_;
        spyOn($location, "path").and.returnValue("/");
        spyOn($rootScope, "$broadcast").and.callThrough();
        //spyOnProperty($fraudAnalyze, 'loaded').and.returnValue(deferred.promise);
        //jasmine.createSpy($fraudAnalyze.loaded).and.callThrough()
    }));
  

    describe('myApp/myState', function() {
        var $state, $injector, myServiceMock, fontloaderService;
        var cispState = 'cispAccount';

        beforeEach(function() {
            myServiceMock = {
                isFontLoad: function () {
                    deferred = q.defer();
                    return deferred.promise;
                }
            };

          inject(function(_$rootScope_, _$state_, _$injector_, $templateCache) {
            $rootScope = _$rootScope_;
            $state = _$state_;
            $injector = _$injector_;
          //  $templateCache.put('views/cisp-funds-check.html', '');
          })
        });

        it('should CISP respond to URL', function() {
          expect($state.href(cispState)).toEqual('#!/cisp-account');
        });

        it('should CISP resolve data', function() {
          myServiceMock.isFontLoad = jasmine.createSpy('isFontLoad').and.returnValue('isFontLoad');
          $state.go(cispState);
         // $rootScope.$digest();
        });
      });
});
