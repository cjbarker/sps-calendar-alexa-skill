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

module.exports = {
  /**
   * Denotes if given string is empty, null, undefined, or blank
   * @param {string} str
   * @returns {Boolean} denoting if empty or not
   */
  isEmpty: function(str) {
    return (!str || 0 === str.length || /^\s*$/.test(str));
  },

  /**
   * Denotes if input is Date object
   * @param {Date} date input to check
   * @returns {Boolean} denoting date else false
   */
  isDate: function(date) {
    if (this.isEmpty(date)) {
      return false;
    }
    return (date instanceof Date && isFinite(date));
  },

  /**
   * Determines the ordinal for a given number
   * @param {Number} number to check ordinal for
   * @return {string} ordinal ex: st, nd, rd, or th
   */
  getOrdinal: function(num) {
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
  },

  /** 
   * Converts ISO to CCYYMMDD, which is used as calendar event key in hashmap.
   * @param {Date} isoDate
   * @return {string} CCYYMMDD is converted ISO string
   */
  iso2key: function(isoDate) {
    var key = '';

    if (this.isEmpty(isoDate)) {
      return key; 
    }

    var date = new Date(isoDate);
    if (isNaN(date)){
      return key;
    }

    key = date.toISOString().substring(0, 10).replace(/-/g, '');
    return key;
  },

  /** 
   * Gets the current date and returns object of today
   * @return {Object} today that is {iso: string date, key: iso hashmapkey}
   */
  getToday: function() {
    var isoDate = new Date().toISOString();

    var today = {
      iso: isoDate,
      key: this.iso2key(isoDate)
    };

    return today;
  },

  /**
   * Converts a date.getDay() array index to String of the day
   * @param {Number} 0-6 of getDay() index 
   * @return {string} represents day of the week
   */
  getDayStr: function(dayIndex) {
    if (dayIndex < 0 || dayIndex > 6) {
      return '';
    }
    if (isNaN(dayIndex)) {
      return '';
    }
    switch (dayIndex) {
      case 0: return 'Sunday';
      case 1: return 'Monday';
      case 2: return 'Tuesday';
      case 3: return 'Wednesday';
      case 4: return 'Thursday';
      case 5: return 'Friday';
      case 6: return 'Saturday';
      default: return '';
    }
  },

  /**
   * Check if day is weekday or not
   * @return {Boolean} true if week day else false weekend or bad input
   */
  isWeekday: function(dayIndex) {
    if (isNaN(dayIndex)) {
      return false;
    }
    else if (dayIndex < 0 || dayIndex > 6) {
      return false;
    }
    else if (dayIndex === 0 || dayIndex == 6) {
      return false;
    } 
    else {
      return true;
    }
  },

  /**
   * Converts a date.getMonth() array index to String of the month
   * @param {Number} 0-11 of getMonth() index 
   * @return {string} represents month of a date
   */
  getMonthStr: function(monIndex) {
    if (monIndex < 0 || monIndex > 11) {
      return '';
    }
    if (isNaN(monIndex)) {
      return '';
    }
    switch (monIndex) {
      case 0: return 'January';
      case 1: return 'February';
      case 2: return 'March';
      case 3: return 'April';
      case 4: return 'May';
      case 5: return 'June';
      case 6: return 'July';
      case 7: return 'August';
      case 8: return 'September';
      case 9: return 'October';
      case 10: return 'November';
      case 11: return 'December';
      default: return '';
    }
  },

  /** 
   * Converts an ISO date to date object for easy string conversation
   * @return {Object} date object represented 
   */
  iso2obj: function(isoDate) {
    if (this.isEmpty(isoDate)) {
      return null;
    }

    var d = new Date(isoDate);
    if (isNaN(d)) {
      return null;
    }

    var dateObj = {
      day: this.getDayStr(d.getDay()),
      date: d.getDate(),
      month: this.getMonthStr(d.getMonth()),
      year: d.getFullYear()
    };

    return dateObj;
  },

  /**
   * Converts the iso date object to a string
   * @param {Object} iso date object
   * @return {string} Flatten object in string representation - ex: Tuesday the 12th of May 2017
   */
  isoObj2String: function(isoObj) {
    if (isoObj === undefined) {
      return '';
    }
    return isoObj.day + " the " + isoObj.date + this.getOrdinal(isoObj.date) + " of " + isoObj.month + " " + isoObj.year;
  }
};
