"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeStampNames = exports.errorMessages = void 0;
const errorMessages = ["Unknown parameters, ignoring it", "Timestamp expects the `date` parameter, none given", "Can't parse date: ", "Unable to parse options for DateTimeFormat: ", "Unknown type: "];
exports.errorMessages = errorMessages;
const timeStampNames = [[0, "just now"], [15, "second"], [60, "minute"], [3600, "hour"], [86400, "day"], [2.678e6, "month"], [3.154e7, "year"]];
exports.timeStampNames = timeStampNames;