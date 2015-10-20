'use strict';

/**
 * @ngdoc service
 * @name promiseApp.HerramientaResource
 * @description
 * # HerramientaResource
 * Service in the promiseApp.
 */
angular.module('promiseApp')
  .service('HerramientaResource', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

      return $resource("//localhost:9000/api/herramienta", {

      } , {

        get: {
          method: 'GET',
          isArray: true
        }
      });

  });
