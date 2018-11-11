const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");
const path = require("path");
const buildFolder = path.resolve(__dirname, "../build");
const srcFolder = path.resolve(__dirname, "../src");

module.exports = {
  entry: srcFolder + "/index.js",
  mode: "development",
  output: {
    path: buildFolder,
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([buildFolder], {
      allowExternal: true
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      filename: "./index.html"
    }),
    new ServiceWorkerWebpackPlugin({
      entry: srcFolder + "/service-worker.js"
    })
  ]
};
