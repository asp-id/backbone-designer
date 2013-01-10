/**
 * BaseModel test suite
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2013
 */

describe('BaseModel', function () {
  'use strict';

  var BaseModel;

  beforeEach(function () {
    var done = false;

    require(['models/BaseModel'], function (BaseModelConstructor) {
      BaseModel = BaseModelConstructor;

      done = true;
    });

    waitsFor(function () {
      return done;
    });
  });

  describe('constructor', function () {

  });

  describe('instance', function () {
    beforeEach(function () {
      this.instance = new BaseModel();
    });

    afterEach(function () {
      delete this.instance;
    });
  });
});
