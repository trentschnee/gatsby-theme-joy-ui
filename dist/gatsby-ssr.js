"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.wrapRootElement = exports.onRenderBody = void 0;
var _joy = require("@mui/joy");
var _WrapRootElement = _interopRequireDefault(require("./src/WrapRootElement"));
// import { getInitColorSchemeScript } from '@mui/material/styles';

var onRenderBody = function onRenderBody(_ref) {
  var setPreBodyComponents = _ref.setPreBodyComponents;
  setPreBodyComponents([(0, _joy.getInitColorSchemeScript)()]);
};
exports.onRenderBody = onRenderBody;
var wrapRootElement = _WrapRootElement.default;
exports.wrapRootElement = wrapRootElement;