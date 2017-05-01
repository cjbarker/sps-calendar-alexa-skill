var rewire = require('rewire');
var assert = require('chai').assert;
var expect = require('chai').expect;
var sps = rewire('../index.js');

isEmpty = sps.__get__('isEmpty');

describe ("SPS ALexa SKill Unit Tests", function () {
  describe("String empty utility check", function() {
      var empty = "";
      var blank = "         ";
      var undef = undefined;
      var full = " testing  if   full string  ";

      expect(isEmpty(empty)).to.equal(true);
      expect(isEmpty(blank)).to.equal(true);
      expect(isEmpty(undef)).to.equal(true);
      expect(isEmpty(full)).to.equal(false);
  });
});
