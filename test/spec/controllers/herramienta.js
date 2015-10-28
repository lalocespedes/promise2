'use strict';

describe('Controller: HerramientaCtrl', function () {

  // load the controller's module
  beforeEach(module('promiseApp'));

  var HerramientaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HerramientaCtrl = $controller('HerramientaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HerramientaCtrl.awesomeThings.length).toBe(3);
  });
});
