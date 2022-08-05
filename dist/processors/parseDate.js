"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseDate;

function parseDate(date) {
  try {
    if (isFinite(date)) {
      return date;
    }

    return Date.parse(date);
  } catch (error) {
    return false;
  }
}