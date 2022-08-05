"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _timestampToString = _interopRequireDefault(require("./processors/timestampToString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Timestamp extends _react.Component {
  constructor(props) {
    super(props);
    this.parameters = props;
  }

  componentDidUpdate(prevProps) {
    this.parameters = this.props;
  }

  render() {
    return (0, _timestampToString.default)(this.props);
  }

}

exports.default = Timestamp;