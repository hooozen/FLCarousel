const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: './demo/index.js',
  devtool: 'inline-source-map',

  devServer: {
    port: 8881,
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './demo/index.html',
    }),
  ],
});
