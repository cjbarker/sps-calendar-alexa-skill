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

const Alexa = require('alexa-sdk');
const util = require("./util");
const calDates = require("./cal-dates2016-2017");

// global variables for reference
var alexa;  // alexa SDK 
const APP_ID = "";    // @todo set
const skillName = "Seattle Public Schools Calendar";

// Various messages based on intents/events
const welcomeMsg = "You can ask if SPS is in session today. Search for school holidays by date";
const helpMsg = "Here are some things you can say: Is school in session today? Is there school on the 19th of March?";
const helpDescpMsg = "Here are some things you can say: Is there school today";
const noDataMsg = "There is no information found for that date. Would you like to search again?";
const shutdownMsg = "Okay see you later";

// Output for Alexa
var output = "";

var handlers = {
  'blahintent': function() {
    this.emit(':tell', 'Hello World!');
  }
};

// register handlers
exports.handler = function(event, context, callback) {
  alexa = Alexa.handler(event, context);
  alexa.appId = APP_ID;
  alexa.registerHandlers(handlers); 
  alexa.execute();
};
