'use strict';

describe('Controller: ValehCtrl', function () {

  // load the controller's module
  beforeEach(module('promiseApp'));

  var ValehCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ValehCtrl = $controller('ValehCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ValehCtrl.awesomeThings.length).toBe(3);
  });
});
