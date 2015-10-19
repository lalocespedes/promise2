'use strict';

/**
 * @ngdoc function
 * @name promiseApp.controller:ModalitemCtrl
 * @description
 * # ModalitemCtrl
 * Controller of the promiseApp
 */
angular.module('promiseApp')
  .controller('ModalitemCtrl', function ($modalInstance) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

        var Modalitem = this;

        Modalitem.save = function () {

            console.log("q save");
        };

        Modalitem.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

  });
