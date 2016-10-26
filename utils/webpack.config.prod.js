var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var SOURCE_DIR = path.resolve(__dirname, '../client');
var DEST_DIR = path.resolve(__dirname, '../public/dists');

module.exports = {
  entry: path.resolve(SOURCE_DIR, './routes.jsx'),

  target: 'web',

  output: {
    path: DEST_DIR,
    filename: 'bundle.js'
  },

  plugins: [
    new ExtractTextPlugin('bundle.css', { allChunks: true }),

    new webpack.NoErrorsPlugin(),

    new webpack.optimize.DedupePlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    })
  ],

  resolve: {
    alias: {
      'react': 'react-lite',
      'react-dom': 'react-lite'
    },
    extensions: ['', '.scss', '.css', '.js', '.jsx']
  },

  module : {
    loaders : [
      {
        test : /\.jsx?$/,
        loader : ['babel'],
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1!sass?sourceMap')
      }
    ]
  }
};
