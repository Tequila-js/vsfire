var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
   devtool: 'inline-source-map',
   entry: [
     './src/index.js'
   ],
   output: {
     path: __dirname + '/dist',
     filename: 'bundle.js'     
   },
   module: {
     loaders: [
       { test: /\.js$/, loader: 'babel-loader', exclude: [/node_modules/]  }
      ]
   },
   plugins: [HtmlWebpackPluginConfig]
};