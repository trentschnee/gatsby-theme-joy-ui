// import { GatsbyConfig } from "gatsby";
const defaultWebFontsConfig = {
  fonts: {
    google: [
      {
        family: `Roboto`,
        variants: [`300`, `400`, `500`],
      },
    ],
  },
};

const config = (themeOptions: {
  emotionPluginConfig: any;
  webFontsConfig: any;
}) => {
  const { emotionPluginConfig = {}, webFontsConfig = defaultWebFontsConfig } =
    themeOptions;
  return {
    plugins: [
      {
        resolve: `@trentschnee/gatsby-plugin-webfonts`,
        options: {
          ...webFontsConfig,
        },
      },
      {
        resolve: `gatsby-plugin-emotion`,
        options: {
          ...emotionPluginConfig,
        },
      },
    ],
  };
};

export default config;
