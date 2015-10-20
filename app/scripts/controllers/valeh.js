'use strict';

/**
 * @ngdoc function
 * @name promiseApp.controller:ValehCtrl
 * @description
 * # ValehCtrl
 * Controller of the promiseApp
 */
angular.module('promiseApp')
  .controller('ValehCtrl', function ($uibModal, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

        var vale = this;

        vale.post = {};
        vale.post.items = [];

        vale.addItem = function() {

            $uibModal.open({

                templateUrl: 'views/modals/add_item.html',
                controller: 'ModalitemCtrl',
                controllerAs: 'ModalItem'

            });

        };

        vale.save = function() {

            console.log(vale.post);

        };

        vale.getEmpleadoNombre = function(val) {

            return $http.get('//localhost:9000/api/empleado', {
                params: {
                    nombre: val
                }
            }).then(function(response){

                return response.data.map(function(item){
                    return item;
                });
            });
        };

        vale.getEmpleadoNumero = function(val) {

            return $http.get('//localhost:9000/api/empleado', {
                params: {
                    nombre: val
                }
            }).then(function(response){

                return response.data.map(function(item){
                    return item;
                });
            });
        };

        vale.onSelect = function ($item, $model, $label) {

            vale.post.numNomina = $item.numNomina;
            vale.post.nombre = $item.nombre;

            vale.post.empId = $item.id;

        };

        vale.getHerramienta = function(val) {

            return $http.get('//localhost:9000/api/herramienta', {
                params: {
                    q: val
                }
            }).then(function(response){

                return response.data.map(function(item){
                    return item;
                });
            });

        };

        vale.onSelectHerram = function ($item) {

            vale.post.items.push(
                {
                    codigo: $item.codigo,
                    descripcion: $item.descripcion
                }
            );

            vale.qty = 1;

            vale.herramienta = '';

        };

        vale.deleteThis = function(item){

            vale.post.items.splice(vale.post.items.indexOf(item), 1);
        }
  });
