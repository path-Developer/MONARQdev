const webpack = require('webpack')
const path = require('path')
const { SourceMapDevToolPlugin } = require("webpack");
module.exports = {
  entry: path.resolve(__dirname, 'index'),
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  mode:'development',
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new SourceMapDevToolPlugin({
      filename: "[file].map"
    }),
  ],
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "*",
      https: true,
    },
  },
  
  module: {
    rules: [
        {
        test: /\.jsx?$/, // compilation to es6
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react'],
          },
        },
      },
      {
        test: /(\.css)$/, 
        use: ['style-loader', 'css-loader']}
    ]
  }
}