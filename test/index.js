var rewire = require('rewire');
var assert = require('chai').assert;
var expect = require('chai').expect;
var sps = rewire('../index.js');

isEmpty = sps.__get__('isEmpty');
getOrdinal = sps.__get__('getOrdinal');
getDayStr = sps.__get__('getDayStr');
getMonthStr = sps.__get__('getMonthStr');
getToday = sps.__get__('getToday');
iso2key = sps.__get__('iso2key');
iso2obj = sps.__get__('iso2obj');

describe ("SPS ALexa SKill Unit Tests", function () {
  describe("String empty utility check", function() {
      var empty = "";
      var blank = "         ";
      var undef;
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

  describe("Convert date to ISO key for hashmap", function() {
    var isoDate = '2017-05-01T20:07:54.064Z';
    var emptyDate = '';
    var badDate = '2017-05-A1T20:07:54.064Z';

    expect(iso2key(isoDate)).to.equal('20170501');
    expect(iso2key(emptyDate)).to.equal('');
    expect(iso2key(badDate)).to.equal('');
  });

  describe("Get day of week index", function() {
    var sun = 0; var mon = 1; var tue = 2;
    var wed = 3; var thur = 4; var fri = 5; var sat = 6;
    var bad = 7; var bad2 = -123; var bad3 = "asdlkj ";

    expect(getDayStr(sun)).to.equal('Sunday');
    expect(getDayStr(mon)).to.equal('Monday');
    expect(getDayStr(tue)).to.equal('Tuesday');
    expect(getDayStr(wed)).to.equal('Wednesday');
    expect(getDayStr(thur)).to.equal('Thursday');
    expect(getDayStr(fri)).to.equal('Friday');
    expect(getDayStr(sat)).to.equal('Saturday');
    expect(getDayStr(bad)).to.equal('');
    expect(getDayStr(bad2)).to.equal('');
    expect(getDayStr(bad3)).to.equal('');
  });

  describe("Get day of week index", function() {
    var sun = 0; var mon = 1; var tue = 2;
    var wed = 3; var thur = 4; var fri = 5; var sat = 6;
    var bad = 7; var bad2 = -123; var bad3 = "asdlkj ";

    expect(getDayStr(sun)).to.equal('Sunday');
    expect(getDayStr(mon)).to.equal('Monday');
    expect(getDayStr(tue)).to.equal('Tuesday');
    expect(getDayStr(wed)).to.equal('Wednesday');
    expect(getDayStr(thur)).to.equal('Thursday');
    expect(getDayStr(fri)).to.equal('Friday');
    expect(getDayStr(sat)).to.equal('Saturday');
    expect(getDayStr(bad)).to.equal('');
    expect(getDayStr(bad2)).to.equal('');
    expect(getDayStr(bad3)).to.equal('');
  });

  describe("Get month canonical", function() {
    var jan= 0; var mar= 2; var nov = 10; var dec= 11;
    var bad = 12; var bad2 = -123; var bad3 = "asdlkj ";

    expect(getMonthStr(jan)).to.equal('January');
    expect(getMonthStr(mar)).to.equal('March');
    expect(getMonthStr(nov)).to.equal('November');
    expect(getMonthStr(dec)).to.equal('December');
    expect(getMonthStr(bad)).to.equal('');
    expect(getMonthStr(bad2)).to.equal('');
    expect(getMonthStr(bad3)).to.equal('');
  });

  describe("Get today object", function() {
    var today = getToday();
    expect(today.hasOwnProperty('iso')).to.equal(true);
    expect(today.hasOwnProperty('key')).to.equal(true);
    expect(today.iso).to.contain('T');  // timezone offset
    expect(today.iso).to.contain('Z');  // zulu time
  });

  describe("Convert ISO date to date object", function() {
    var isoDate = '2017-05-02T20:07:54.064Z';
    var obj = iso2obj(isoDate);
    expect(obj.hasOwnProperty('day')).to.equal(true);
    expect(obj.hasOwnProperty('date')).to.equal(true);
    expect(obj.hasOwnProperty('month')).to.equal(true);
    expect(obj.hasOwnProperty('year')).to.equal(true);
    expect(obj.day).to.equal('Tuesday');
    expect(obj.date).to.equal(2);
    expect(obj.month).to.equal('May');
    expect(obj.year).to.equal(2017);
  });
});
