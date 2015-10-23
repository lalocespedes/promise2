'use strict';

describe('Controller: AdditemCtrl', function () {

  // load the controller's module
  beforeEach(module('promiseApp'));

  var AdditemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdditemCtrl = $controller('AdditemCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdditemCtrl.awesomeThings.length).toBe(3);
  });
});
