'use strict';

describe('Controller: ModalitemCtrl', function () {

  // load the controller's module
  beforeEach(module('promiseApp'));

  var ModalitemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModalitemCtrl = $controller('ModalitemCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ModalitemCtrl.awesomeThings.length).toBe(3);
  });
});
