'use strict';

/**
 * @ngdoc overview
 * @name promiseApp
 * @description
 * # promiseApp
 *
 * Main module of the application.
 */
angular
  .module('promiseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/valeh', {
        templateUrl: 'views/valeh.html',
        controller: 'ValehCtrl',
        controllerAs: 'valeh'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
