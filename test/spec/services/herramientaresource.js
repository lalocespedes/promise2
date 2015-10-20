'use strict';

describe('Service: HerramientaResource', function () {

  // load the service's module
  beforeEach(module('promiseApp'));

  // instantiate service
  var HerramientaResource;
  beforeEach(inject(function (_HerramientaResource_) {
    HerramientaResource = _HerramientaResource_;
  }));

  it('should do something', function () {
    expect(!!HerramientaResource).toBe(true);
  });

});
