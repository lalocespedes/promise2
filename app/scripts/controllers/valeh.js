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

            return $http.get('//localhost:9000/api/vales/all', {
                params: {
                    name: val,
                }
            }).then(function(response){

                return response.data.map(function(item){
                    return item.name;
                });
            });
        };

  });

