'use strict';

describe('Controller: ValesCtrl', function () {

  // load the controller's module
  beforeEach(module('promiseApp'));

  var ValesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ValesCtrl = $controller('ValesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ValesCtrl.awesomeThings.length).toBe(3);
  });
});
