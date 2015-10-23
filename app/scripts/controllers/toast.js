'use strict';

/**
 * @ngdoc function
 * @name promiseApp.controller:ToastCtrl
 * @description
 * # ToastCtrl
 * Controller of the promiseApp
 */
angular.module('promiseApp')
  .controller('ToastCtrl', function ($mdToast) {

      var toast = this;

      toast.closeToast = function() {
        $mdToast.hide();
      };


  });
