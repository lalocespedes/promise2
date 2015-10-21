'use strict';

/**
 * @ngdoc function
 * @name promiseApp.controller:ValeeditCtrl
 * @description
 * # ValeeditCtrl
 * Controller of the promiseApp
 */
angular.module('promiseApp')
  .controller('ValeeditCtrl', function ($http, $routeParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

        var vale = this;

        var id = $routeParams.id;

        $http.get('//localhost:9000/api/vales/show/' + id, {
        }).then(function(response){

            vale.resource = response.data;

            //return response.data.map(function(item){
            //    return item;
            //});
        });

    });
