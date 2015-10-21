'use strict';

describe('Service: ValeHerramResource', function () {

  // load the service's module
  beforeEach(module('promiseApp'));

  // instantiate service
  var ValeHerramResource;
  beforeEach(inject(function (_ValeHerramResource_) {
    ValeHerramResource = _ValeHerramResource_;
  }));

  it('should do something', function () {
    expect(!!ValeHerramResource).toBe(true);
  });

});
