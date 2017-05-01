var rewire = require('rewire');
var assert = require('chai').assert;
var expect = require('chai').expect;
var sps = rewire('../index.js');

isEmpty = sps.__get__('isEmpty');
getOrdinal = sps.__get__('getOrdinal');

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

  describe("Convert numbers to ordinals", function() {
    var st = 21;
    var nd = 2;
    var rd = 333;
    var th = 5114;
    var nan = 'nan fail';
    var zero = 0;

    expect(getOrdinal(st)).to.equal('st');
    expect(getOrdinal(nd)).to.equal('nd');
    expect(getOrdinal(rd)).to.equal('rd');
    expect(getOrdinal(th)).to.equal('th');
    expect(getOrdinal(zero)).to.equal('th');
    expect(getOrdinal(nan)).to.equal('');
  });
});
