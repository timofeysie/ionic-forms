'use strict';
describe("Chats Conttroller", function () {
    //var rootScope;
  	var scope;
  	//var Chats;

  	beforeEach(module('starter'));
    //beforeEach(module('starter.services'));
    //beforeEach(module('starter.controllers'));
    //beforeEach(module('ui.router'));

    beforeEach(inject(function ($rootScope) {
      //rootScope = $rootScope;
      scope = $rootScope.$new();
    }));

    beforeEach(inject(function ($controller) {
      $controller('ChatsCtrl', {
        $scope: scope
      });
    }));

    // beforeEach(inject(function (_Chats_) {
    //   Chats = _Chats_;
    // }));

    it("should have a $scope variable", function() {
        expect(scope).toBeDefined();
    });

});