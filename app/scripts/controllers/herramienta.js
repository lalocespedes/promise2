'use strict';

/**
 * @ngdoc function
 * @name promiseApp.controller:HerramientaCtrl
 * @description
 * # HerramientaCtrl
 * Controller of the promiseApp
 */
angular.module('promiseApp')
  .controller('HerramientaCtrl', function ($http) {

      var herramienta =  this;

      herramienta.getHerramienta2 = function(val) {

        return $http.get('//localhost:9000/api/vales/herramienta', {
          params: {
            q: val
          }
        }).then(function(response){

          return response.data.map(function(item){
            return item;
          });
        });
      };


      herramienta.getHerramienta = function(val) {

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


      herramienta.onSelectHerram = function ($item) {

        //vale.post.items.push(
        //    {
        //      id: $item.id,
        //      codigo: $item.codigo,
        //      descripcion: $item.descripcion,
        //      qty: 1
        //    }
        //);

        //herramienta.vales = [];

        $http.get('//localhost:9000/api/vales/herramienta', {
          params: {
            q: $item.codigo
          }
        }).then(function(response){


          herramienta.vales = response.data;

          //return response.data.map(function(item){

            //return item;

            //herramienta.vales = item;

            //herramienta.vales = item;

          //});
        });


        //console.log(herramienta.vales);


      };

  });
