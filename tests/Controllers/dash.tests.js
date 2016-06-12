'use strict';
describe('Dash Controller', function() {
    var scope;
    var controller; 
    var $ionicPopup;
    var $state;
    var Chats;
    //  $state, $rootScope, $ionicPopup

    beforeEach(module('$'));
    beforeEach(module('ionic'));
    beforeEach(module('ui.router'));
    beforeEach(module('ngMessages'));
    beforeEach(module('starter'));

    beforeEach(inject(function ($rootScope, $state, $ionicPopup) {
      scope = $rootScope.$new();
    }));

    beforeEach(inject(function (_Chats_) {
      Chats = _Chats_;
    }));

    beforeEach(inject(function (_ionicPopup_) {
      ionicPopup = _ionicPopup_;
    }));

    beforeEach(inject(function ($controller) {
      $controller('DashCtrl', {
        $scope: scope
      });
    }));

    it("should have a scope variable defined", function() {
        //controller = createController();
        expect(scope).toBeDefined();
    });

    // tests start here
    // it('should have a user name', function() {
    //     //controller = createController();
    // 	//console.log('scope.authorization.username',scope.authorization);
    //     expect(scope.authorization.username).toEqual('guest');
    // });

});
