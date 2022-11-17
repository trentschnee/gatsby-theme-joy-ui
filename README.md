# gatsby-theme-joy-ui

A joy-ui [gatsby theme plugin ](https://www.gatsbyjs.com/docs/themes/what-are-gatsby-themes/) with plug and play functionality. Simply install this plugin to your gatsby project and you are ready to go.

## Motivation

For far too long, there have been themes that just require you to figure it out yourself. [gatsby-theme-joy-ui](https://github.com/trentschnee/gatsby-theme-joy-ui) is designed to help alleviate those concerns and has been carefully crafted to help beginners with [Gatsby](https://www.gatsbyjs.com/) & [Joy-UI](https://mui.com/joy-ui/getting-started/overview/)

## Installation

1. Install gatsby-theme-joy-ui with npm or yarn within your gatsby site alongside of @mui/joy

```bash
  npm install gatsby-theme-joy-ui @mui/joy
```

2. Configure your theme within the `gatsby-config(.js|.ts)` file of your project

```javascript
//gatsby-config.js
module.exports = {
  plugins: {
    resolve: `gatsby-theme-joy-ui`,
    options: {
      //configure your options here. Leave blank if there are none
      //webFontsConfig:{}
      //emotionPluginConfig:{}
    },
  },
};
```

## Configuration Options

`Note: If you do not know how to configure theme options, refer to this guide ->` [ theme-api congiuration](https://www.gatsbyjs.com/docs/theme-api/#configuration)

### Setting Up A Custom Font

1. Refer to [gatsby-plugin-webfonts](https://www.gatsbyjs.com/plugins/gatsby-plugin-webfonts/) for up to date configuration options
2. Create your custom font configuration within the `gatsby-theme-joy-ui.webFontsConfig` configuration property in `gatsby-config.js`
   Example:

```javascript
webFontsConfig:{
    fonts: {
      google: [
        {
          family: `Roboto`, // your font name here
          variants: [`300`, `400`, `500`],
        },
      ],
    },
}
```

### Configuring Emotion

1. Refer to [gatsby-plugin-emotion](https://www.gatsbyjs.com/plugins/gatsby-plugin-emotion/) for up to date configuration options
2. Create your custom emotion configuration within the `gatsby-theme-joy-ui.emotionPluginConfig` configuration property in `gatsby-config.js`
   Example:

```javascript
     emotionPluginConfig:{
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,

}

```

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Issues

If you see any issues such as missing features/bugs, please refer to [gatsby-joy-ui-theme's issue page](https://github.com/trentschnee/gatsby-theme-joy-ui/issues)

## Inspired From

- [gatsby-theme-material-ui](https://github.com/hupe1980/gatsby-theme-material-ui)
- [Awesome README](https://github.com/matiassingers/awesome-readme)

## Authors

- @trentschnee [https://www.github.com/trentschnee](https://www.github.com/trentschnee) | [https://www.linkedin.com/in/trentschnee/)](https://www.linkedin.com/in/trentschnee/))
