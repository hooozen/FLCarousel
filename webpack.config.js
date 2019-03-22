const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  devtool: 'inline-source-map',

  devServer: {
    port: 8881,
  },

  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
    }),
    new VueLoaderPlugin(),
  ],
};
