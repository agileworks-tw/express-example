'use strict';

var expect = require('expect.js');

describe('unit test', function () {
  it('returns the task model', function () {
    var models = require('../../models');
    expect(models.Task).to.be.ok();
  });

  it('returns the user model', function () {
    var models = require('../../models');
    expect(models.User).to.be.ok();
  });

  it('display your name', function () {
    var config = require('./../../config/config');
    expect(config.username).to.be.equal("smlsunxie");
    require("../../dojo/dojo_start");
  });

});
