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

const expect = require('chai').expect;
const cal = require('../cal-dates2016-2017.js');

describe ("SPS Alexa SKill Unit Tests - Calendar Events", function () {
  describe("Validate basic dates", function() {
    expect(isNaN(cal.schoolBegin)).to.equal(false);
    expect(isNaN(cal.schoolEnd)).to.equal(false);
    expect(Object.keys(cal.events).length > 0).to.equal(true);
    var obj = cal.events['20170116'];
    expect(obj.hasOwnProperty('isEarlyDismissal')).to.equal(true);
    expect(obj.hasOwnProperty('hasNoSchool')).to.equal(true);
    expect(obj.hasOwnProperty('description')).to.equal(true);
  });

  // @todo add event look-ups validating specific dates and results
  describe("Specific event date look-ups", function() {
    var earlyDismiss = cal.events['20160928'];
    expect(earlyDismiss.isEarlyDismissal).to.equal(true);
    expect(earlyDismiss.hasNoSchool).to.equal(false);
    expect(earlyDismiss.description).to.equal('2 hour early dismissal');

    var vetDay  = cal.events['20170116'];
    expect(vetDay.isEarlyDismissal).to.equal(false);
    expect(vetDay.hasNoSchool).to.equal(true);
    expect(vetDay.description).to.equal('Martin Luther King Jr. Day');

    var noEvent = cal.events['20170101'];
    expect(noEvent).to.be.an('undefined');
  });

  // @todo add next event based on current date
  // @todo add next school day based on current date
});
