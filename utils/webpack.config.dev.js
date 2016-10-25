var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var PROCESS_DIR = path.resolve(__dirname, '../');
var SOURCE_DIR = path.resolve(__dirname, '../client');
var DEST_DIR = path.resolve(__dirname, '../public/dists');

module.exports = {
  entry: [
    path.resolve(SOURCE_DIR, './routes.jsx'),
    'webpack-hot-middleware/client'
  ],

  devtool: 'cheap-module-eval-source-map',

  target: 'web',

  output: {
    path: DEST_DIR,
    filename: 'bundle.js',
    publicPath: '/dists/'
  },

  eslint: {
    configFile: path.resolve(PROCESS_DIR, './.eslintrc')
  },

  plugins: [
    new ExtractTextPlugin('bundle.css', { allChunks: true }),

    new webpack.HotModuleReplacementPlugin(),

    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.scss', '.css', '.js', '.jsx']
  },

  module : {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
    ],

    loaders : [
      {
        test : /\.jsx?$/,
        loader : ['babel'],
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          "env": {
            "development": {
              "presets": ["react-hmre"]
            }
          }
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1!sass?sourceMap')
      }
    ]
  }
};
