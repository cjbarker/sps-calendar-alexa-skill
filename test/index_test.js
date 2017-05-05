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

const rewire = require('rewire');
const assert = require('chai').assert;
const expect = require('chai').expect;
const cal = require('../cal-dates2016-2017.js');
const util = require('../util.js');
const sps = rewire('../index.js');

isSchoolInSession = sps.__get__('isSchoolInSession');
nextSchoolDay = sps.__get__('nextSchoolDay');
nextHoliday = sps.__get__('nextHoliday');

describe ("SPS Alexa SKill Unit Tests", function () {
  describe("Validate Date range of school start and end dates", function() {
    var good = util.parseDate(cal.schoolBegin);
    good.setDate(good.getDate() + 20);
    var bad = util.parseDate(cal.schoolEnd);
    bad.setDate(bad.getDate() + 20);

    expect(isSchoolInSession(good)).to.equal(true);
    expect(isSchoolInSession(bad)).to.equal(false);
  });
});
