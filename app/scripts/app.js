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
    'ui.bootstrap',
    'ui.router'
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
      })
      .state('contacts', {
            template: 'views/modal.html',
            // trigger the modal to open when this route is active
            onEnter: ['$stateParams', '$state', '$modal',
              function($stateParams, $state, $modal) {
                $modal

                  // handle modal open
                    .open({
                      template: 'okokoooo',
                      controller: ['$scope',
                        function($scope) {
                          // handle after clicking Cancel button
                          $scope.cancel = function() {
                            $scope.$dismiss();
                          };
                          // close modal after clicking OK button
                          $scope.ok = function() {
                            $scope.$close(true);
                          };
                        }
                      ]
                    });
              }
            ]
      });

  });
