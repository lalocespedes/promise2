'use strict';

describe('Controller: ValeeditCtrl', function () {

  // load the controller's module
  beforeEach(module('promiseApp'));

  var ValeeditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ValeeditCtrl = $controller('ValeeditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ValeeditCtrl.awesomeThings.length).toBe(3);
  });
});
