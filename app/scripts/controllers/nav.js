'use strict';

/**
 * @ngdoc function
 * @name personalApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the personalApp
 */
angular.module('personalApp')
  .controller('NavCtrl', function ($timeout, $location, $window, ROUTES) {
    var controller = this;
    
    controller.navWidgets = [{
      background: 'assets/images/selfie.jpg',
      callback: function(){
        $location.path(ROUTES.ABOUT);
      }
    }, {
      background: 'assets/images/blockm.jpg',
      callback: function(){
        $location.path(ROUTES.EDUCATION);
      }
    }, {
      background: 'assets/images/gm.jpg',
      callback: function(){
        $location.path(ROUTES.GM);
      }
    }, {
      background: 'assets/images/nws.jpg',
      callback: function(){
        $location.path(ROUTES.NWS);
      }
    }, {
      background: 'assets/images/at.jpg',
      callback: function(){
        $location.path(ROUTES.CONTACT);
      }
    }, {
      background: 'assets/images/in.jpg',
      callback: function(){
        $window.location.href = 'https://www.linkedin.com/in/jjkovacs89';
      }
    }];
    
    $timeout(showNav, 500);
    
    function showNav() {
      controller.show = true;
    }
  });
