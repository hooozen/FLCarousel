const merge = require('webpack-merge');
const resolve = require('path').resolve;

const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: './index',
  output: {
    library: 'FLCarousel',
    libraryTarget: 'umd',
    path: resolve(__dirname, 'dist'),
  }
});
