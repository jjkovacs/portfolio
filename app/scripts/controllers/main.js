'use strict';

angular.module('personalApp')
  .controller('MainCtrl', function ($scope, $timeout, $location, ROUTES) {
    var messages = [{
      msg: 'Hello!',
      timeout: 1500,
    }, {
      msg: 'My name is James Kovacs.',
      timeout: 2000,
    }, {
      msg: 'Welcome to my portfolio!',
      timeout: 2000
    }];
    
    $timeout(displayWelcomeMessage.bind(null, 0), 500);
    
    function displayWelcomeMessage(index) {
      var m = messages[index];
      $scope.msg = m.msg;
      $scope.show = true;
      
      $timeout(incrementMessage.bind(null, index), m.timeout);
    }
    
    function incrementMessage(currentIndex) {
      currentIndex++;
      if(currentIndex === messages.length){
        $timeout(goToNav);
        return;
      }
      
      $scope.show = false;
      $timeout(displayWelcomeMessage.bind(null, currentIndex), 1000);
    }
    
    function goToNav() {
      $location.path(ROUTES.NAV);
    }
  });
