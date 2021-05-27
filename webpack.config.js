/* eslint-disable no-dupe-keys */
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: path.resolve(__dirname, "index"),
  output: {
    path: path.join(__dirname, "foo.js"),
    publicPath: "/",
    filename: "bundle.js",
  },
  mode: "development",
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "*",
      https: true,
    },
  },
  node: {
    __dirname: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // compilation to es6
        enforce: "pre",
        use: ["source-map-loader"],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/react"],
          },
        },
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
