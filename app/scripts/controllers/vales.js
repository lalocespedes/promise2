'use strict';

/**
 * @ngdoc function
 * @name promiseApp.controller:ValesCtrl
 * @description
 * # ValesCtrl
 * Controller of the promiseApp
 */
angular.module('promiseApp')
  .controller('ValesCtrl', function (ValeHerramResource) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

        var vales = this;

        vales.results = ValeHerramResource.get();

  });
