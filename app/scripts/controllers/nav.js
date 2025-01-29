'use strict';

angular.module('personalApp')
  .controller('NavCtrl', function ($scope, $timeout, $location, $window, $q, ROUTES) {
    $scope.navWidgets = [{
      background: 'assets/images/facebook_selfie.jpg',
      callback: function(){
        hideNavAndDelay()
          .then(function(){
            $location.path(ROUTES.ABOUT);
          });
      }
    }, {
      background: 'assets/images/gm.jpg',
      callback: function(){
        hideNavAndDelay()
          .then(function(){
            $location.path(ROUTES.GM);
          });
      }
    }, {
      background: 'assets/images/nws.jpg',
      callback: function(){
        hideNavAndDelay()
          .then(function(){
            $location.path(ROUTES.NWS);
          });
      }
    }, {
      background: 'assets/images/blockm.jpg',
      callback: function(){
        hideNavAndDelay()
          .then(function(){
            $location.path(ROUTES.EDUCATION);
          });
      }
    }, {
      background: 'assets/images/at.jpg',
      callback: function(){
        $window.location.href = 'mailto:jjkovacs89@gmail.com';
      }
    }, {
      background: 'assets/images/in.jpg',
      callback: function(){
        hideNavAndDelay()
          .then(function(){
            $window.location.href = 'https://www.linkedin.com/in/jjkovacs89';
          });
      }
    }];
    
    $timeout(showNav, 500);
    
    function showNav() {
      $scope.show = true;
    }
    
    function hideNavAndDelay() {
      var deferred = $q.defer();
      
      $scope.show = false;
      
      $timeout(deferred.resolve, 1000);
      
      return deferred.promise;
    }
  });
