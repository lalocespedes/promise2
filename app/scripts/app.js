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
    'ui.bootstrap',
    'ngMaterial',
    'ngToast',
    'angularUtils.directives.dirPagination'
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
      .when('/vales', {
        templateUrl: 'views/vales.html',
        controller: 'ValesCtrl',
        controllerAs: 'vales'
      })
      .when('/vales/edit/:id', {
        templateUrl: 'views/valeedit.html',
        controller: 'ValeeditCtrl',
        controllerAs: 'valeEdit'
      })
      .when('/AddItem', {
        templateUrl: 'views/additem.html',
        controller: 'AdditemCtrl',
        controllerAs: 'AddItem'
      })
      .when('/herramienta', {
        templateUrl: 'views/herramienta.html',
        controller: 'HerramientaCtrl',
        controllerAs: 'herramienta'
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

  }).config(['ngToastProvider', function(ngToastProvider) {
  ngToastProvider.configure({
    timeout: 8000,
    animation: 'slide', // or 'fade'
    verticalPosition: 'bottom',
    horizontalPosition: 'right'

  });
}]);