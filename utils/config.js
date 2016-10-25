/**
 * Configurations
 */

var path = require('path');
var webpack = require('webpack');

var config = {};


/**
 * Webpack
 */

config.webpack = {};

var PROD = (process.env.NODE_ENV === 'production'); // Check if in production mode

// Options

config.webpack.option = {
  aggregateTimeout: 300,
  poll: true
};

// React
var SOURCE_DIR = path.resolve(__dirname, '../client');
var DEST_DIR = path.resolve(__dirname, '../public/dists');

config.webpack.react = {
  entry: path.resolve(SOURCE_DIR, './routes.jsx'),

  devtool: 'source-map',

  target: 'web',

  output: {
    path: DEST_DIR,
    filename: PROD ? 'bundle.min.js' : 'bundle.js'
  },

  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ] : [],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module : {
    loaders : [
      {
        test : /\.jsx?$/,
        include : SOURCE_DIR,
        loader : 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};

exports = module.exports = config;
