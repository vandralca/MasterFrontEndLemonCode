const Dotenv = require('dotenv-webpack');
const base = require("./base");
const { mergeWithCustomize, customizeObject } = require("webpack-merge");

module.exports = mergeWithCustomize({
  customizeObject: customizeObject({
    entry: "prepend",
  }),
})(base, {
  mode: "development",
  plugins: [
    new Dotenv({
      path: "dev.env",
    }),
  ],
});
