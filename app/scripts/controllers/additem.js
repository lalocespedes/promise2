'use strict';

/**
 * @ngdoc function
 * @name promiseApp.controller:AdditemCtrl
 * @description
 * # AdditemCtrl
 * Controller of the promiseApp
 */
angular.module('promiseApp')
  .controller('AdditemCtrl', function () {

      var additem = this;

      additem.save = function() {

        console.log("guardar");

      };


  });
