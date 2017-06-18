"use strict";

const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: path.resolve(__dirname, "./src/app/main.jsx"),
  output: {
    path: path.resolve(__dirname, "./dist/public/"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist/public/"),
    port: 8001
  },
  resolve: {
    alias: {
      "package": path.resolve(__dirname, "./src/package")
    },
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
  plugins: [
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
  ]
};
