var Alexa = require('alexa-sdk');
#var http = require('http');
#var calDates = require("./cal-dates");

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
var output = "":

// TODO create handler functions

// Checks if string is empty, null, undefined or blank
function isEmpty(str) {
  return (!str || 0 === str.length || /^\s*$/.test(str));
}

// Converts ISO to CCYYMMDD, which is calendar event key in hashmap
function iso2key(isoDate) {
  var key = '';

  if (isEmpty(isoDate)) {
    return key; 
  }

  var date = new Date(isoDate);
  if (isNaN(date) {
    return key;
  }

  key = date.toISOString().substring(0, 10).replace(/-/g, '');
  return key;
}

// Gets the current date and returns object of {iso: string date, key: iso hashmap key}
function getToday() {
  var isoDate = new Date().toISOString();

  var today = {
    iso: isoDate,
    key: iso2key(isoDate)
  };

  return today;
}

// Converts an ISO date to date object for 
function iso2obj(isoDate) {
  if (isEmpty(isoDate) {
    return undefined;
  }

  var d = new Date(isoDate);

  var obj = {
    day: fd,
    date: 23,
    month: kj,
    year: kj,
  };

  return obj
}

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

