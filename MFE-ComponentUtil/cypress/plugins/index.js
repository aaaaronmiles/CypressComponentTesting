//making a change that should really show up and be copied over on build...
// because for some reason this file is going missing.
const wp = require("cypress-webpack-preprocessor-v5");
const path = require("path");

module.exports = (on, config) => {
  config.defaultCommandTimeout = 30000;
  config.execTimeout = 60000;
  config.pageLoadTimeout = 120000;
  config.viewportHeight = 1100;
  config.viewportWidth = 1920;
  const WPOptions = {
    webpackOptions: {
      resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
          "~": path.resolve(__dirname, "../../src"),
        },
      },
      module: {
        rules: [
          {
            test: /\.(ts|tsx|js|jsx)$/,
            exclude: [/node_modules/],
            use: {
              loader: "ts-loader",
              options: {
                transpileOnly: "true",
              },
            },
          },
          {
            // when bundling application's own source code
            // transpile using and instrument code using babel-plugin-istanbul
            test: /\.(ts|tsx|js)$/,
            exclude: [/node_modules/],
            use: {
              loader: "babel-loader?plugins=babel-plugin-rewire",
              options: {
                presets: ["@babel/preset-typescript"],
                plugins: ["istanbul"],
              },
            },
          },
        ],
      },
    },
  };
  require("cypress-react-unit-test/plugins/react-scripts")(on, config);
  on("file:preprocessor", wp(WPOptions));

  return config;
};
