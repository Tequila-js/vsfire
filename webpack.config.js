var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var PATHS = {
  src: path.join(__dirname, 'src'),
  scenes: path.join(__dirname, 'src/containers'),
  dist: path.join(__dirname, 'dist')
};

var config = {
  devtool: 'inline-source-map',

  entry: PATHS.src + '/index.jsx',

  output: {
    path: PATHS.dist,
    filename: "bundle.js"
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules!postcss'
      }
    ]
  },

  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.src + '/index.tmpl.html',
      inject: 'body',
      filename: 'index.html',
      title: 'My PhoneBook App',
    })
  ],

  devServer: {
    contentBase: PATHS.dist,
    colors: true,
    inline: true,
    historyApiFallback: true
  }
}

module.exports = config;
