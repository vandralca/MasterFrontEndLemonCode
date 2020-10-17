const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
    alias : {
      api: path.resolve(__dirname, './src/api/'),
      assets: path.resolve(__dirname, './src/assets/'),
      layouts: path.resolve(__dirname, './src/layouts/'),
      core: path.resolve(__dirname, './src/core/'),
      scenes: path.resolve(__dirname, './src/scenes/'),
      pods: path.resolve(__dirname, './src/pods/'),
      common: path.resolve(__dirname, './src/common/'),
      models: path.resolve(__dirname, './src/models/'),
      contexts: path.resolve(__dirname, './src/contexts/'),
      pages: path.resolve(__dirname, './src/pages/'),
      services: path.resolve(__dirname, './src/services/'),
    },
    extensions: [".js", ".ts", ".tsx"],
  },
  devtool: "eval-source-map",
  entry: {
    app: ["./index.tsx", "./api/index.ts"],
  },
  stats: "errors-only",
  output: {
    filename: "[name].[chunkhash].js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpg)$/,
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
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "index.html", //Name of template in ./src
    }),
  ],
};
