
import { testPluginOptionsSchema } from "gatsby-plugin-utils/test-plugin-options-schema";
import { pluginOptionsSchema } from "../src/gatsby-node";

describe(`plugin schema`, () => {
  it(`should provide meaningful errors when fields are invalid`, async () => {
    const expectedErrors = [
      `"emotionPluginConfig\" must be of type object`,
      `"webFontsConfig\" must be of type object`,
    ];

    const { errors } = await testPluginOptionsSchema(pluginOptionsSchema, {
      emotionPluginConfig: `this should be an object`,
      webFontsConfig: `this should be an object too`,
    });

    expect(errors).toEqual(expectedErrors);
  });
  it(`should provide pass validation when no options are passed`, async () => {
    const { isValid } = await testPluginOptionsSchema(pluginOptionsSchema, {});

    expect(isValid).toEqual(true);
  });
  it(`should validate the schema`, async () => {
    const { isValid } = await testPluginOptionsSchema(pluginOptionsSchema, {
      emotionPluginConfig: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    });
    expect(isValid).toBe(true);
  });
});
