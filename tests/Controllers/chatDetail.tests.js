// describe('ChatDetail', function () {
//     var $scope, ctrl;
//     var Chats = jasmine.createSpy('Chats');
//     beforeEach(module('ui.router')); // should the controllers also be delcared here?
//     beforeEach(function () {
//         module('starter.controllers');
//         Chats = jasmine.createSpyObj('Stock', ['all', 'get', 'update', 'updateBasket', 'order'])

//         inject(function ($rootScope, $controller) {
//             $scope = $rootScope.$new();

//             ctrl = $controller('ChatDetailCtrl', {
//                 $scope: $scope,
//         		Chats: Chats

//             });
//         });
//     });

//     it('should have a $scope variable', function() {
//         expect($scope).toBeDefined();
//     });

// });