"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatDate;

var _config = require("./config");

function formatDate(timestamp, type) {
  if (type !== "relative") {
    var date = new Date(timestamp);
  }

  const now = Date.now();

  if (typeof type === "object") {
    try {
      return date.toLocaleString(type);
    } catch (error) {
      console.error(_config.errorMessages[3] + error);
      return "";
    }
  }

  try {
    if (type === "static") {
      return date.toLocaleString();
    }
  } catch (error) {
    console.error(_config.errorMessages[2] + date + " - " + error);
    return "";
  }

  if (type !== "relative") {
    throw new Error(_config.errorMessages[4] + type);
  }

  let difference = now - timestamp;

  if (Math.abs(difference) < Math.abs(now - timestamp * 1000)) {
    difference = Math.round(difference / 1000);
  }

  let dateString = "";
  let future = false;

  if (difference < 0) {
    dateString += "in ";
    difference = Math.abs(difference);
    future = true;
  }

  let timeIndex = 0;

  for (let i = 0; i < _config.timeStampNames.length; i++) {
    if (difference <= _config.timeStampNames[i][0]) {
      break;
    }

    timeIndex = i;
  }

  const count = Math.floor(difference / _config.timeStampNames[timeIndex][0]);

  if (isNaN(count) && difference <= 1) {
    dateString += "just now";
  } else if (isNaN(count) && difference > 1) {
    dateString = "";
    console.warn(_config.errorMessages[2] + timestamp);
  } else {
    dateString += count + " " + _config.timeStampNames[timeIndex][1];

    if (count > 1) {
      // Add 's' for plural
      dateString += "s";
    }

    if (difference > 15 && future === false) {
      dateString += " ago";
    }
  }

  return dateString;
}