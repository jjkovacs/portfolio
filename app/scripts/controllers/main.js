'use strict';

/**
 * @ngdoc function
 * @name personalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the personalApp
 */
angular.module('personalApp')
  .controller('MainCtrl', function ($timeout, $location, ROUTES) {
    var controller = this;
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
      controller.msg = m.msg;
      controller.show = true;
      
      $timeout(incrementMessage.bind(null, index), m.timeout);
    }
    
    function incrementMessage(currentIndex) {
      currentIndex++;
      if(currentIndex === messages.length){
        $timeout(goToNav);
        return;
      }
      
      controller.show = false;
      $timeout(displayWelcomeMessage.bind(null, currentIndex), 1000);
    }
    
    function goToNav() {
      $location.path(ROUTES.NAV);
    }
  });
