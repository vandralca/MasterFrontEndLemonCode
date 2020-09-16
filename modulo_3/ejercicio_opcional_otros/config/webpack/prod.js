const Dotenv = require('dotenv-webpack');
const base = require("./base");
const { mergeWithCustomize, customizeObject } = require("webpack-merge");

module.exports = mergeWithCustomize({
  customizeObject: customizeObject({
    entry: "prepend",
  }),
})(base, {
  mode: "production",
  plugins: [
    new Dotenv({
      path: "prod.env",
    }),
  ],
});
