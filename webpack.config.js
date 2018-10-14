"use strict";
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const LiveReloadPlugin = require('webpack-livereload-plugin');

let plugins = [
  new CopyWebpackPlugin([
    {from: "./src/assets/css", to: "css"},
    {from: "./src/assets/fonts", to: "fonts"},
    {from: "./src/assets/img", to: "img"},
    {from: "./src/assets/js", to: "js"}
  ]),
  new ExtractTextPlugin("styles.css"),
  new HtmlWebpackPlugin({
    template: "./src/assets/index.html"
  })
];

if (process.env.NODE_ENV !== "production") {
  plugins.push(
    new LiveReloadPlugin({appendScriptTag: true})
  );
}

module.exports = {
  entry: path.resolve(__dirname, "./src/app/main.jsx"),
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("css-loader")
      }
    ]
  },
  plugins: plugins
};
