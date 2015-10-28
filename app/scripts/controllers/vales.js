'use strict';

/**
 * @ngdoc function
 * @name promiseApp.controller:ValesCtrl
 * @description
 * # ValesCtrl
 * Controller of the promiseApp
 */
angular.module('promiseApp')
  .controller('ValesCtrl', function (ValeHerramResource, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

        var vales = this;

        vales.currentPage = 1;

        vales.results = ValeHerramResource.get();

        vales.ver = function(id) {

            $location.path('/vales/edit/' + id);

        };

  });
