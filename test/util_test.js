/**
 * @license
 * Copyright 2017 CJ Barker. All Rights Reserved
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const assert = require('chai').assert;
const expect = require('chai').expect;
const util = require('../util');

describe ("Utility Unit Tests for SPS Alexa Skills", function () {
  describe("String empty utility check", function() {
      var empty = "";
      var blank = "         ";
      var undef;
      var full = " testing  if   full string  ";

      expect(util.isEmpty(empty)).to.equal(true);
      expect(util.isEmpty(blank)).to.equal(true);
      expect(util.isEmpty(undef)).to.equal(true);
      expect(util.isEmpty(full)).to.equal(false);
  });

  describe("Date is date utility check", function() {
    var today = new Date();
    var isoDate = '2017-05-01T20:07:54.064Z';
    var bad = '2017-05-01AT20:07:54.064Z';
    var bad2 = "";

    expect(util.isDate(today)).to.equal(true);
    expect(util.isDate(new Date(isoDate))).to.equal(true);
    expect(util.isDate(new Date(bad))).to.equal(false);
    expect(util.isDate(bad2)).to.equal(false);
  });

  describe("Convert numbers to ordinals", function() {
    var st = 21;
    var nd = 2;
    var rd = 333;
    var th = 5114;
    var nan = 'nan fail';
    var zero = 0;

    expect(util.getOrdinal(st)).to.equal('st');
    expect(util.getOrdinal(nd)).to.equal('nd');
    expect(util.getOrdinal(rd)).to.equal('rd');
    expect(util.getOrdinal(th)).to.equal('th');
    expect(util.getOrdinal(zero)).to.equal('th');
    expect(util.getOrdinal(nan)).to.equal('');
  });

  describe("Convert date to ISO key for hashmap", function() {
    var isoDate = '2017-05-01T20:07:54.064Z';
    var emptyDate = '';
    var badDate = '2017-05-A1T20:07:54.064Z';

    expect(util.iso2key(isoDate)).to.equal('20170501');
    expect(util.iso2key(emptyDate)).to.equal('');
    expect(util.iso2key(badDate)).to.equal('');
  });

  describe("Get day of week index", function() {
    var sun = 0; var mon = 1; var tue = 2;
    var wed = 3; var thur = 4; var fri = 5; var sat = 6;
    var bad = 7; var bad2 = -123; var bad3 = "asdlkj ";

    expect(util.getDayStr(sun)).to.equal('Sunday');
    expect(util.getDayStr(mon)).to.equal('Monday');
    expect(util.getDayStr(tue)).to.equal('Tuesday');
    expect(util.getDayStr(wed)).to.equal('Wednesday');
    expect(util.getDayStr(thur)).to.equal('Thursday');
    expect(util.getDayStr(fri)).to.equal('Friday');
    expect(util.getDayStr(sat)).to.equal('Saturday');
    expect(util.getDayStr(bad)).to.equal('');
    expect(util.getDayStr(bad2)).to.equal('');
    expect(util.getDayStr(bad3)).to.equal('');
  });

  describe("Determine if weekday", function() {
    var sun = 0; var mon = 1; var tue = 2;
    var wed = 3; var thur = 4; var fri = 5; var sat = 6;
    var bad = 7; var bad2 = -123; var bad3 = "asdlkj ";

    expect(util.isWeekday(mon)).to.equal(true);
    expect(util.isWeekday(tue)).to.equal(true);
    expect(util.isWeekday(wed)).to.equal(true);
    expect(util.isWeekday(thur)).to.equal(true);
    expect(util.isWeekday(fri)).to.equal(true);
    expect(util.isWeekday(sat)).to.equal(false);
    expect(util.isWeekday(sun)).to.equal(false);
    expect(util.isWeekday(bad)).to.equal(false);
    expect(util.isWeekday(bad2)).to.equal(false);
    expect(util.isWeekday(bad3)).to.equal(false);
  });

  describe("Get month canonical", function() {
    var jan= 0; var mar= 2; var nov = 10; var dec= 11;
    var bad = 12; var bad2 = -123; var bad3 = "asdlkj ";

    expect(util.getMonthStr(jan)).to.equal('January');
    expect(util.getMonthStr(mar)).to.equal('March');
    expect(util.getMonthStr(nov)).to.equal('November');
    expect(util.getMonthStr(dec)).to.equal('December');
    expect(util.getMonthStr(bad)).to.equal('');
    expect(util.getMonthStr(bad2)).to.equal('');
    expect(util.getMonthStr(bad3)).to.equal('');
  });

  describe("Get today object", function() {
    var today = util.getToday();
    expect(today.hasOwnProperty('iso')).to.equal(true);
    expect(today.hasOwnProperty('key')).to.equal(true);
    expect(today.iso).to.contain('T');  // timezone offset
    expect(today.iso).to.contain('Z');  // zulu time
  });

  describe("Convert ISO date to date object", function() {
    var isoDate = '2017-05-02T20:07:54.064Z';
    var obj = util.iso2obj(isoDate);
    expect(obj.hasOwnProperty('day')).to.equal(true);
    expect(obj.hasOwnProperty('date')).to.equal(true);
    expect(obj.hasOwnProperty('month')).to.equal(true);
    expect(obj.hasOwnProperty('year')).to.equal(true);
    expect(obj.day).to.equal('Tuesday');
    expect(obj.date).to.equal(2);
    expect(obj.month).to.equal('May');
    expect(obj.year).to.equal(2017);

    var isoDateBad = '2017-05-A2T20:07:54.064Z';
    var objBad = util.iso2obj(isoDateBad);
    expect(objBad).to.be.a('null');
  });

  describe("Convert ISO Obj to flattened string", function() {
    var isoDate = '2017-05-02T20:07:54.064Z';
    var obj = util.iso2obj(isoDate);
    var objStr = util.isoObj2String(obj);
    expect(objStr).to.equal('Tuesday the 2nd of May 2017');
  });

  describe("Parse date", function() {
    var ccyymmdd = '20170507';
    var bad = '2as0170507';
    var date = util.parseDate(ccyymmdd);
    var badDate = util.parseDate(bad);

    expect(ccyymmdd).to.equal(util.iso2key(date));
    expect(badDate).to.be.a('null');
  });
});
