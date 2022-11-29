"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = wrapWithProvider;
var _react = _interopRequireDefault(require("react"));
var _Provider = _interopRequireDefault(require("./theme/Provider"));
function wrapWithProvider(_ref) {
  var element = _ref.element;
  return /*#__PURE__*/_react.default.createElement(_Provider.default, null, element);
}