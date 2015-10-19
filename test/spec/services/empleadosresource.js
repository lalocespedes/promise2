'use strict';

describe('Service: EmpleadosResource', function () {

  // load the service's module
  beforeEach(module('promiseApp'));

  // instantiate service
  var EmpleadosResource;
  beforeEach(inject(function (_EmpleadosResource_) {
    EmpleadosResource = _EmpleadosResource_;
  }));

  it('should do something', function () {
    expect(!!EmpleadosResource).toBe(true);
  });

});
