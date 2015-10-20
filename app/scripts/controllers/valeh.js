'use strict';

/**
 * @ngdoc function
 * @name promiseApp.controller:ValehCtrl
 * @description
 * # ValehCtrl
 * Controller of the promiseApp
 */
angular.module('promiseApp')
  .controller('ValehCtrl', function ($uibModal, $http, EmpleadosResource) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

        var vale = this;

        vale.addItem = function() {

            $uibModal.open({

                templateUrl: 'views/modals/add_item.html',
                controller: 'ModalitemCtrl',
                controllerAs: 'ModalItem'

            });

        };

        this.save = function() {

            console.log("guardar");

        };

        this.getLocation = function(val) {

            return $http.get('//localhost:9000/api/empleado', {
                params: {
                    nombre: val
                }
            }).then(function(response){

                //console.log(response.data);

                return response.data.map(function(item){
                    return item;
                });
            });
        };

        this.filter = function(val) {

            EmpleadosResource.get({nombre: val})
                .$promise.then(function(response){
                    return response.map(function(item){
                        //console.log(item.nombre)
                        return item.nombre;
                    });
                });

        };
  });
