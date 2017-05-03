'use strict';

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

/**
 * Seattle Public Schools (SPS) calendar dates
 */
const KEY_DATES = {};     // Hashmap: Key is CCYYMMDD dates string format with value of event object
const SCHOOL_BEGIN = '20160907';
const SCHOOL_END   = '20170626';

// Load up key dates for 2016-17
KEY_DATES['20160907'] = {isEarlyDismissal: false, hasNoSchool: false, description: "Start of school"};
KEY_DATES['20160912'] = {isEarlyDismissal: false, hasNoSchool: false, description: "Kindergarten starts"};
KEY_DATES['20160928'] = {isEarlyDismissal: true, hasNoSchool: false, description: "2 hour early dismissal"};
KEY_DATES['20161014'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Teach Profesional Development Day"};
KEY_DATES['20161026'] = {isEarlyDismissal: true, hasNoSchool: false, description: "2 hour early dismissal"};
KEY_DATES['20161111'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Veterans Day"};
KEY_DATES['20161124'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Thanksgiving Holiday"};
KEY_DATES['20161125'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Thanksgiving Holiday"};
KEY_DATES['20161216'] = {isEarlyDismissal: true, hasNoSchool: false, description: "1 hour early dismissal"};
KEY_DATES['20161219'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Winter break"};
KEY_DATES['20161220'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Winter break"};
KEY_DATES['20161221'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Winter break"};
KEY_DATES['20161222'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Winter break"};
KEY_DATES['20161223'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Winter break"};
KEY_DATES['20161224'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Winter break"};
KEY_DATES['20161225'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Winter break"};
KEY_DATES['20161226'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Winter break"};
KEY_DATES['20161227'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Winter break"};
KEY_DATES['20161228'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Winter break"};
KEY_DATES['20161229'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Winter break"};
KEY_DATES['20161230'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Winter break"};
KEY_DATES['20170102'] = {isEarlyDismissal: false, hasNoSchool: true, description: "New Year's Day Observed"};
KEY_DATES['20170116'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Martin Luther King Jr. Day"};
KEY_DATES['20170201'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Day between semesters. No school"};
KEY_DATES['20170220'] = {isEarlyDismissal: false, hasNoSchool: true, description: "President's Day"};
KEY_DATES['20170221'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Mid winter break"};
KEY_DATES['20170222'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Mid winter break"};
KEY_DATES['20170223'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Mid winter break"};
KEY_DATES['20170224'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Mid winter break"};
KEY_DATES['20170322'] = {isEarlyDismissal: true, hasNoSchool: false, description: "2 hour early dismissal"};
KEY_DATES['20170410'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Spring break"};
KEY_DATES['20170411'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Spring break"};
KEY_DATES['20170412'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Spring break"};
KEY_DATES['20170413'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Spring break"};
KEY_DATES['20170414'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Spring break"};
KEY_DATES['20170510'] = {isEarlyDismissal: true, hasNoSchool: false, description: "2 hour early dismissal"};
KEY_DATES['20170529'] = {isEarlyDismissal: false, hasNoSchool: true, description: "Memorial Day"};
KEY_DATES['20170626'] = {isEarlyDismissal: true, hasNoSchool: false, description: "Last day of schol. 1 hour early dismissal"};

module.exports.events = KEY_DATES;
module.exports.schoolBegin = SCHOOL_BEGIN;
module.exports.schoolEnd   = SCHOOL_END;
