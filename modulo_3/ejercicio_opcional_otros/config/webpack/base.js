const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const helpers = require("./helpers");

module.exports = merge(
  {},
  {
    context: helpers.resolveFromRootPath("src"),
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
    },
    entry: {
      app: "./index.tsx",
      appStyles: ["./styles.scss"],
    },
    output: {
      path: helpers.resolveFromRootPath("dist"),
      filename: "[name].[chunkhash].js",
    },
    stats: "errors-only",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
            },
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass"),
              },
            },
          ],
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
            },
          ],
        },
        {
          test: /\.png$/,
          exclude: /node_modules/,
          loader: "url-loader?limit=5000",
        },
        {
          test: /\.html$/,
          loader: "html-loader",
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        filename: "index.html",
        template: "./index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
    ],
  }
);
