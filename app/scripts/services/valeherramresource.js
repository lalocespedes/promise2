'use strict';

/**
 * @ngdoc service
 * @name promiseApp.ValeHerramResource
 * @description
 * # ValeHerramResource
 * Service in the promiseApp.
 */
angular.module('promiseApp')
  .service('ValeHerramResource', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function

      return $resource("//localhost:9000/api/vales", {

      } , {

        get: {
          method: 'GET',
          isArray: true
        }
      });

  });
