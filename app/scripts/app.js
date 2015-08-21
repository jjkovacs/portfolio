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
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .constant('ROUTES', {
    MAIN: '/',
    NAV: '/navigation',
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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when(ROUTES.NAV, {
        templateUrl: 'views/nav.html',
        controller: 'NavCtrl',
        controllerAs: 'nav'
      })
      .when(ROUTES.ABOUT, {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when(ROUTES.EDUCATION, {
        templateUrl: 'views/education.html',
        controller: 'EducationCtrl',
        controllerAs: 'education'
      })
      .when(ROUTES.NWS, {
        templateUrl: 'views/nws.html',
        controller: 'NwsCtrl',
        controllerAs: 'nws'
      })
      .when(ROUTES.GM, {
        templateUrl: 'views/gm.html',
        controller: 'GMCtrl',
        controllerAs: 'gm'
      })
      .when(ROUTES.CONTACT, {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
