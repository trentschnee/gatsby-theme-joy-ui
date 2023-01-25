"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _joy = require("@mui/joy");
var _Link = _interopRequireDefault(require("../components/Link"));
var _default = (0, _joy.extendTheme)({
  components: {
    JoyLink: {
      defaultProps: {
        component: _Link.default
      }
    }
  }
});
exports.default = _default;