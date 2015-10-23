'use strict';

/**
 * @ngdoc function
 * @name promiseApp.controller:ValehCtrl
 * @description
 * # ValehCtrl
 * Controller of the promiseApp
 */
angular.module('promiseApp')
  .controller('ValehCtrl', function ($uibModal, $http, $timeout, ValeHerramResource, $location, ngToast) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

        var vale = this;

        vale.post = {};
        vale.post.items = [];
        vale.empleado = [];

        vale.addItem = function() {

            $uibModal.open({

                templateUrl: 'views/modals/add_item.html',
                controller: 'ModalitemCtrl',
                controllerAs: 'ModalItem'

            });

        };

        vale.save = function() {

            ValeHerramResource.save(this.post,

                function success(data) {

                    ngToast.dismiss();

                    $location.path('/vales/edit/' + data.id);
                },

                function error(err){

                    angular.forEach(err.data, function(value, key) {

                        if(value) {

                            ngToast.create({
                                className: 'danger',
                                content: '<i class="fa fa-times fa-2x"></i> ' + value.message
                            });

                        }

                    });

                }

            );

        };

        vale.getEmpleado = function(val) {

            return $http.get('//localhost:9000/api/empleado', {
                params: {
                    q: val
                }
            }).then(function(response){

                return response.data.map(function(item){
                    return item;
                });
            });
        };

        vale.onSelect = function ($item) {

            vale.post.numNomina = $item.numNomina;
            vale.post.nombre = $item.nombre;
            vale.post.empId = $item.id;

            vale.empleado.nombre = $item.nombre;
            vale.empleado.numnomina = $item.numNomina;

            vale.searchempleado = '';

            vale.showempleado = true;

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
                    id: $item.id,
                    codigo: $item.codigo,
                    descripcion: $item.descripcion,
                    qty: 1
                }
            );

            vale.herramienta = '';

        };

        vale.deleteThis = function(item){

            vale.post.items.splice(item, 1);

        };

        vale.updateqty = function(item) {

            vale.disablebtn = true;

            $timeout(function() {

                var newvalue = vale.qty[item];

                if (newvalue == 0) {

                    ngToast.create({
                        className: 'danger',
                        content: '<i class="fa fa-times fa-2x"></i> Error: Cantidad'
                    });

                    return false;

                }

                ngToast.dismiss();

                var obj = vale.post.items[item];

                obj.qty = newvalue;

                vale.disablebtn = false;

            }, 2000);

        };
  });
