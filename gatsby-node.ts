export const pluginOptionsSchema = ({ Joi }: { Joi: any }) =>
  Joi.object({
    emotionPluginConfig: Joi.object().unknown(true),
    webFontsConfig: Joi.object().unknown(true),
  }).optional();
