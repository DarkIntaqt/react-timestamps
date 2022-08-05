"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = timestampToString;

var _config = require("./config");

var _parseDate = _interopRequireDefault(require("./parseDate"));

var _formatDate = _interopRequireDefault(require("./formatDate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function timestampToString(parameters) {
  let date = 0;
  let type = "relative";

  function isset(issetVar) {
    if (typeof issetVar === "undefined") {
      return false;
    }

    return true;
  }

  if (Object.keys(parameters).length > 2) {
    console.warn(_config.errorMessages[0]);
  }

  if (!isset(parameters["date"])) {
    throw new Error(_config.errorMessages[1]);
  }

  date = parameters["date"];

  if (isset(parameters["type"])) {
    type = parameters["type"];
  }

  const parsedDate = (0, _parseDate.default)(date);

  if (typeof parsedDate === "boolean") {
    console.error(_config.errorMessages[2] + date);
    return "";
  }

  return (0, _formatDate.default)(date, type);
}