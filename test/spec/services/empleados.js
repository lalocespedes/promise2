'use strict';

describe('Service: empleados', function () {

  // load the service's module
  beforeEach(module('promiseApp'));

  // instantiate service
  var empleados;
  beforeEach(inject(function (_empleados_) {
    empleados = _empleados_;
  }));

  it('should do something', function () {
    expect(!!empleados).toBe(true);
  });

});
