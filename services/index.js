"use strict";

var _serviceAccount = _interopRequireDefault(require("./serviceAccount"));
var _serviceCustomer = _interopRequireDefault(require("./serviceCustomer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var service = {
  serviceAccount: _serviceAccount["default"],
  serviceCustomer: _serviceCustomer["default"]
};
module.exports = service;