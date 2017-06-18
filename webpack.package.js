"use strict";

const fs = require("fs");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


let name = JSON.parse(fs.readFileSync("./package.json")).name + (process.env.MIN ? ".min" : "");

let config = {
  entry: path.resolve(__dirname, `./src/package/index.js`),
  output: {
    path: path.resolve(__dirname, "./dist/package/"),
    filename: `zzz.js`
  },
  devtool: process.env.MIN ? "source-map" : undefined,
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
  plugins: [
    new ExtractTextPlugin(`${name}.css`)
  ],
  target: "node"
};

module.exports = config;
