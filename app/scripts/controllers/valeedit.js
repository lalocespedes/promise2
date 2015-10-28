'use strict';

/**
 * @ngdoc function
 * @name promiseApp.controller:ValeeditCtrl
 * @description
 * # ValeeditCtrl
 * Controller of the promiseApp
 */
angular.module('promiseApp')
  .controller('ValeeditCtrl', function ($http, $routeParams, $uibModal) {

        var vale = this;

        var id = $routeParams.id;

        $http.get('//localhost:9000/api/vales/show/' + id, {
        }).then(function(response){

            vale.resource = response.data;

            vale.empleado = vale.resource.empleado;
            vale.items = vale.resource.items;

            //return response.data.map(function(item){
            //    return item;
            //});
        });

        vale.print = function() {

            window.print();

            //console.log("imprimir");

        };

        vale.recibir = function() {

            $uibModal.open({
                templateUrl: '',
                controller: 'ModalInstanceCtrl',
                size: 'md'
            });

            console.log("recibir");

        };

  });
