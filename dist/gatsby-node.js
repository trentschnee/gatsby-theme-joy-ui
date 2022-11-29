"use strict";

exports.__esModule = true;
exports.pluginOptionsSchema = void 0;
var pluginOptionsSchema = function pluginOptionsSchema(_ref) {
  var Joi = _ref.Joi;
  return Joi.object({
    emotionPluginConfig: Joi.object().unknown(true),
    webFontsConfig: Joi.object().unknown(true)
  }).optional();
};
exports.pluginOptionsSchema = pluginOptionsSchema;