"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
// import { GatsbyConfig } from "gatsby";
var defaultWebFontsConfig = {
  fonts: {
    google: [{
      family: "Roboto",
      variants: ["300", "400", "500"]
    }]
  }
};
var config = function config(themeOptions) {
  var _themeOptions$emotion = themeOptions.emotionPluginConfig,
    emotionPluginConfig = _themeOptions$emotion === void 0 ? {} : _themeOptions$emotion,
    _themeOptions$webFont = themeOptions.webFontsConfig,
    webFontsConfig = _themeOptions$webFont === void 0 ? defaultWebFontsConfig : _themeOptions$webFont;
  return {
    plugins: [{
      resolve: "@trentschnee/gatsby-plugin-webfonts",
      options: (0, _extends2.default)({}, webFontsConfig)
    }, {
      resolve: "gatsby-plugin-emotion",
      options: (0, _extends2.default)({}, emotionPluginConfig)
    }]
  };
};
var _default = config;
exports.default = _default;