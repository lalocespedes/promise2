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
    'ngTouch',
    'ui.router',
    'ui.bootstrap'
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
  }).config(function($stateProvider) {

      $stateProvider
      .state('modal', {
            template: 'views/modal.html2'

        //    views:{
        //  "modal": {
        //    templateUrl: "views/modal.html"
        //  }
        //},
        //abstract: true
      });

  });
