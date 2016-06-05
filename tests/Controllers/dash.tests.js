// describe('Dash Controller', function(){
//     var scope, controller, $ionicPopup, $state;
//     createController = function() {
//             return controller('DashCtrl', {
//                 $scope: scope,
//                 $ionicPopup: $ionicPopup,
//                 $state: $state
//             });
//         // TypeError: undefined is not a constructor (evaluating 'controller') in /Users/tim/angular/ionic/forms-testing/tests/Controllers/dash.tests.js (line 4)
//     };
//     beforeEach(module('ui.router'));
//     beforeEach(module('starter.controllers'));
//     beforeEach(inject(function (
//         $rootScope,
//         $controller,
//         $ionicPopup,
//         $state) {
//         scope = $rootScope.$new();
//         // the usual method
//         // controller = $controller('DashCtrl', {
//         //     $rootScope: rootScope,
//         //     $scope: scope,
//         //     $ionicPopup: $ionicPopup,
//         //     $state: $state
//         // });
//     }));

//     it("should have a scope variable defined", function() {
//         controller = createController();
//         console.log('scope',scope);
//         expect(scope).toBeDefined();
//     });

//     // tests start here
//     it('should have a user name', function() {
//         controller = createController();
//     	console.log('scope.authorization.username',scope.authorization);
//         expect(scope.authorization.username).toEqual('guest');
//     });

// });