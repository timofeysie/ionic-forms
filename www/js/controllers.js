angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $state, $rootScope, $ionicPopup) {
  $("#example_id").ionRangeSlider({
    type: "double",
    min: 100000,
    max: 10000000,
    from: 1000000,
    to: 1100000,
    step: 10000,
    grid: true,
    grid_num: 100,
    force_edges: true,
    drag_interval: true,
    prettify_enabled: true,
    prettify_separator: ",",
    prefix: "$"
  });
  var slider = $("#example_id").data("ionRangeSlider");
  slider.reset();
  console.log('slider',slider);

  $scope.authorization = {
    username: 'guest',
    password : ''    
  };
  console.log('$scope.authorization.username',$scope.authorization.username);
  $scope.signIn = function(form) {
    if (form.$valid) {
      var guest = 'guest';
      var pass  = 'password';
      if ($scope.authorization.username === guest
        && $scope.authorization.password === pass) {
        $rootScope.username = $scope.authorization.username;
        $state.go('tab.account');
      } else {
        $ionicPopup.alert({
          title: 'Login failed :(',
          template: 'Please try again.'
        });
      }
    }
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // listen for when this page is active 
  $scope.$on('$ionicView.enter', function(e) {
    console.log('chats active');
  });

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
