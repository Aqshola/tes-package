"use strict";

var _inquiryAccount = _interopRequireDefault(require("./inquiryAccount"));
var _inquiryCustomer = _interopRequireDefault(require("./inquiryCustomer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var inquiry = {
  inqAccount: _inquiryAccount["default"],
  inqCustomer: _inquiryCustomer["default"]
};
module.exports = inquiry;