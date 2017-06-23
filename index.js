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
const cal = require("./cal-dates2016-2017");

// global variables for reference
var alexa;  // alexa SDK 
const APP_ID = "";    // @todo set
const SKILL_NAME = "Seattle Public Schools Calendar";

// Various messages based on intents/events
const WELCOME_MSG = "Welcome to " + SKILL_NAME + ". You can ask if SPS is in session today. Search for school holidays by date";
const WELCOME_REPROMPT = "For instructions on what you can say, please say help me.";
const HELP_MSG = "Here are some things you can say: Is school in session today? Is there school on the 19th of March?";
const HELP_REPROMPT = "You can ask things like is there school on December 1st or when is the next school holiday, or you can say exit...Now, what can I help you with?";
const NO_DATA_MSG = "There is no information found for that date. Would you like to search again?";
const SHUTDOWN_MSG = "Okay see you later";

// Output for Alexa
var output = "";

function isSchoolInSession(date) {
    if (util.isEmpty(date)) {
      return false; 
    }
    else if (!util.isDate(date)) {
      return false;
    }
    else {
      var d = Number( util.iso2key(date) ) ;
      var begin = Number(cal.schoolBegin);
      var end = Number(cal.schoolEnd);
      return (d >= begin && d <= end);
    }
}

/**
 * Determines when the next school day is based off current date.
 * @param {Date} date to begin checking from if null will grab current date
 * @return {Object} ISO Date of next school day
 */
function nextSchoolDay(startDate) {
  startDate = util.isDate(startDate) ? startDate : null;
  var date = (util.isEmpty(startDate)) ? new Date() : startDate;
  var nextDay = null;

  // don't iterate more than 100 days - could be summer
  var i; var keyDate; var dayEvent;

  for (i=1; i <= 100; i++) {
    date.setDate(date.getDate() + i); 

    if (!util.isWeekDay(date.getDay())) {
      continue;
    }

    // weekday and see if no holiday or early dismissal
    keyDate = util.iso2key(date);
    dayEvent = cal.events[keyDate];

    // no event
    if (util.isEmpty(dayEvent) && isSchoolInSession(date)) {
      nextDay = date;
      break;
    }
    // event - see if early dismissal or holiday
    else {
      if (dayEvent.isEarlyDismissal){
        nextDay = date;
        break;
      }
    }
  }

  return nextDay;
} 

/**
 * Determines when the next school holiday is based off current date.
 * @param {Date} date to begin checking from if null will grab current date
 * @return {Object} ISO Date of next holiday (day off school)
 */
function nextHoliday(startDate) {
  startDate = util.isDate(startDate) ? startDate : null;
  var date = (util.isEmpty(startDate)) ? new Date() : startDate;
  var nextDay = null;

  // don't iterate more than 100 days - could be summer
  var i; var keyDate; var dayEvent;

  for (i=1; i <= 100; i++) {
    date.setDate(date.getDate() + i); 

    if (isSchoolInSession(date)) {
      break;
    }

    keyDate = util.iso2key(date);
    dayEvent = cal.events[keyDate];

    // no event
    if (util.isEmpty(dayEvent)) {
      continue;
    }
    // event - see if holiday
    else {
      if (dayEvent.hasNoSchool){
        nextDay = date;
        break;
      }
    }
  }

  return nextDay;
}

var handlers = {
  'LaunchRequest': function() {
    this.emit(':ask', WELCOME_MSG, WELCOME_REPROMPT);
  },
  'SpsCalIntent': function () {
    var itemSlot = this.event.request.intent.slots.Item;
    var itemName;
    if (itemSlot && itemSlot.value) {
      itemName = itemSlot.value.toLowerCase();
    }

    var dayEvent =  cal.events[itemName];

    if (dayEvent) {
      // @todo create unique intents per requests for school day, early dismissal, no school or holiday
      this.emit(':tell', 'Found event would load here for ' + dayEvent);    
    } else {
      this.emit(':tell', 'Did not find event would load here for ask on this date ' + dayEvent);    
    }
  },
  'AMAZON.HelpIntent': function () {
    this.emit(':ask', HELP_MSG, HELP_REPROMPT);
  },
  'AMAZON.CancelIntent': function () {
    this.emit(':tell', SHUTDOWN_MSG);
  },
  'AMAZON.StopIntent': function () {
    this.emit(':tell', SHUTDOWN_MSG);
  }
};

// register handlers
exports.handler = function(event, context, callback) {
  alexa = Alexa.handler(event, context);
  alexa.appId = APP_ID;
  alexa.registerHandlers(handlers); 
  alexa.execute();
};
