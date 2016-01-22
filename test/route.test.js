const expect = require('chai').expect;
const cleanup = require('../lib/cleanup');

describe('route parser', function () {

  before(function () {
    /*tmp = '.\\tmp'
    if fs.existsSync tmp
    rimraf.sync tmp
        
    fs.mkdirSync tmp*/
  });

  it('returns the route tree', function () {
    const result = cleanup.buildRoutes('tests/dummy/app');
    expect(result).to.equal({});
  });
     
});