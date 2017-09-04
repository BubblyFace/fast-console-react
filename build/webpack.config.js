var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var conf = {
  devtool: '#source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  module: {
    loaders: [
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      ,{
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.js[x]?$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.css/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.html/,
        loader: "html-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: "./src/index.html",
      hash: false
    })
  ]
}

module.exports = conf;