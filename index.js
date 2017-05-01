/**
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

//var Alexa = require('alexa-sdk');
//var http = require('http');
//var calDates = require("./cal-dates");

// global variables for reference
var alexa;  // alexa SDK 
var APP_ID = undefined;
var skillName = "Seattle Public Schools Calendar";

// Various messages based on intents/events
var welcomeMsg = "You can ask if SPS is in session today. Search for school holidays by date";
var helpMsg = "Here are some things you can say: Is school in session today? Is there school on the 19th of March?";
var helpDescpMsg = "Here are some things you can say: Is there school today";
var noDataMsg = "There is no information found for that date. Would you like to search again?";
var shutdownMsg = "Okay see you later";

// Output for Alexa
var output = "";

// TODO create handler functions

/**
 * Denotes if given string is empty, null, undefined, or blank
 * @param {string} str
 * @returns {Boolean} denoting if empty or not
 */
function isEmpty(str) {
  return (!str || 0 === str.length || /^\s*$/.test(str));
}

/** 
 * Converts ISO to CCYYMMDD, which is used as calendar event key in hashmap.
 * @param {Date} isoDate
 * @return {string} CCYYMMDD is converted ISO string
 */
function iso2key(isoDate) {
  var key = '';

  if (isEmpty(isoDate)) {
    return key; 
  }

  var date = new Date(isoDate);
  if (isNaN(date)){
    return key;
  }

  key = date.toISOString().substring(0, 10).replace(/-/g, '');
  return key;
}

/** 
 * Gets the current date and returns object of today
 * @return {Object} today that is {iso: string date, key: iso hashmapkey}
 */
function getToday() {
  var isoDate = new Date().toISOString();

  var today = {
    iso: isoDate,
    key: iso2key(isoDate)
  };

  return today;
}

/** 
 * Converts an ISO date to date object for easy string conversation
 * @return {Object} date object represented 
 */
function iso2obj(isoDate) {
  if (isEmpty(isoDate)) {
    return undefined;
  }

  var d = new Date(isoDate);

  // @todo implement
  var dateObj = {
    day: fd,
    date: 23,
    month: kj,
    year: kj
  };

  return dateObj;
}

/**
 * Determines the ordinal for a given number
 * @param {Number} number to check ordinal for
 * @return {string} ordinal ex: st, nd, rd, or th
 */
function getOrdinal(num) {
  if (isNaN(num)) {
    return '';
  }
  
  num = Math.abs(num);

  if (num > 3 && num < 21) {
    return 'th';
  }

  switch (num % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

/**
 * Converts the iso date object to a string
 * @param {Object} iso date object
 * @return {string} Flatten object in string representation - ex: Tuesday the 12th of May 2017
 */
function isoObj2String(isoObj) {
  if (isoObj === undefined) {
    return '';
  }
  return isoObj.day + " the " + isoObj.date + getOrdinal(isoObj.date) + " of " + isoObj.month + " " + isoObj.year;
}

exports.handler = function(event, context, callback) {
  alexa = Alexa.handler(event, context);
  alexa.appId = APP_ID;
  //alexa.registerHandlers(handlers); TODO create handlers
  alexa.execute();
};
