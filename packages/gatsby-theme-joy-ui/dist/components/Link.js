"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var React = _interopRequireWildcard(require("react"));
var _joy = require("@mui/joy");
var _gatsby = require("gatsby");
var _excluded = ["to", "replace"],
  _excluded2 = ["activeClassName", "className", "to", "noLinkStyle", "replace", "target"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Anchor = (0, _joy.styled)('a')({});
var GatsbyLinkComposed = /*#__PURE__*/React.forwardRef(function GatsbyLinkComposed(props, ref) {
  var to = props.to,
    replace = props.replace,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  return /*#__PURE__*/React.createElement(_gatsby.Link, (0, _extends2.default)({
    to: to,
    replace: replace
  }, other));
});
var Link = /*#__PURE__*/React.forwardRef(function Link(props, ref) {
  var _props$activeClassNam = props.activeClassName,
    activeClassName = _props$activeClassNam === void 0 ? 'active' : _props$activeClassNam,
    className = props.className,
    to = props.to,
    noLinkStyle = props.noLinkStyle,
    replace = props.replace,
    target = props.target,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded2);
  var isExternal = function isExternal(path) {
    return (path === null || path === void 0 ? void 0 : path.startsWith("http://")) || (path === null || path === void 0 ? void 0 : path.startsWith("https://")) || (path === null || path === void 0 ? void 0 : path.startsWith("//"));
  };
  var file = /\.[0-9a-z]+$/i.test(to);

  // check if link is external or a file
  if (isExternal(to) || file) {
    // better readability because we know the link is external
    var href = to;
    if (noLinkStyle) {
      return /*#__PURE__*/React.createElement(Anchor, (0, _extends2.default)({
        className: className,
        href: href,
        ref: ref
      }, other));
    }
    return /*#__PURE__*/React.createElement(_joy.Link, (0, _extends2.default)({
      className: className,
      href: href,
      ref: ref
    }, other));
  }
  var GLinkPropsSpread = {
    to: to,
    replace: replace
  };
  if (noLinkStyle) {
    return /*#__PURE__*/React.createElement(GatsbyLinkComposed, (0, _extends2.default)({
      className: className,
      ref: ref
    }, GLinkPropsSpread, other));
  }
  return /*#__PURE__*/React.createElement(_joy.Link, (0, _extends2.default)({
    component: GatsbyLinkComposed,
    className: className,
    ref: ref
  }, GLinkPropsSpread, other));
});
var _default = Link;
exports.default = _default;