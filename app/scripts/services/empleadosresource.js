'use strict';

/**
 * @ngdoc service
 * @name promiseApp.EmpleadosResource
 * @description
 * # EmpleadosResource
 * Service in the promiseApp.
 */
angular.module('promiseApp')
  .service('EmpleadosResource', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function


      return $resource("//jsonplaceholder.typicode.com/posts", {});

  });
