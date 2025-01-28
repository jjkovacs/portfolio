'use strict';

/**
 * @ngdoc overview
 * @name personalApp
 * @description
 * # personalApp
 *
 * Main module of the application.
 */
angular
  .module('personalApp', [
    'ngRoute',
    'ngSanitize'
  ])
  .constant('ROUTES', {
    MAIN: '/',
    NAV: '/nav',
    ABOUT: '/about',
    NWS: '/nws',
    GM: '/gm',
    CONTACT: '/contact',
    EDUCATION: '/education'
  })
  .config(function ($routeProvider, ROUTES) {
    $routeProvider
      .when(ROUTES.MAIN, {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when(ROUTES.NAV, {
        templateUrl: 'views/nav.html',
        controller: 'NavCtrl'
      })
      .when(ROUTES.ABOUT, {
        templateUrl: 'views/info.html',
        controller: 'AboutCtrl'
      })
      .when(ROUTES.EDUCATION, {
        templateUrl: 'views/info.html',
        controller: 'EducationCtrl'
      })
      .when(ROUTES.NWS, {
        templateUrl: 'views/info.html',
        controller: 'NwsCtrl'
      })
      .when(ROUTES.GM, {
        templateUrl: 'views/info.html',
        controller: 'GmCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, $location, $route, ROUTES){
    $rootScope.toolbarLinks = [{
      text: 'Home',
      route: $route.routes[ROUTES.NAV],
      hash: '#' + ROUTES.NAV
    },{
      text: 'About',
      route: $route.routes[ROUTES.ABOUT],
      hash: '#' + ROUTES.ABOUT
    },{
      text: 'Edu',
      route: $route.routes[ROUTES.EDUCATION],
      hash: '#' + ROUTES.EDUCATION
    },{
      text: 'GM',
      route: $route.routes[ROUTES.GM],
      hash: '#' + ROUTES.GM
    },{
      text: 'NWS',
      route: $route.routes[ROUTES.NWS],
      hash: '#' + ROUTES.NWS
    }];
    
    $rootScope.isActive = function(route) {
      return $route.current.$$route === route;
    };

    $rootScope.$on('$routeChangeSuccess', function(e, current){
      console.log(current.$$route.originalPath);
      $rootScope.page = current.$$route.originalPath;
    });

    $rootScope.back = function(){
      $location.path(ROUTES.NAV);
    };
  });
