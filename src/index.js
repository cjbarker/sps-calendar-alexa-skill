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

exports.handler = function(event, context, callback) {
  alexa = Alexa.handler(event, context);
  alexa.appId = APP_ID;
  //alexa.registerHandlers(handlers); TODO create handlers
  alexa.execute();
};
