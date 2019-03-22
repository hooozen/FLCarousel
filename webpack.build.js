const merge = require('webpack-merge');
const resolve = require('path').resolve;

const baseConfig = require('./webpack.base');

console.log(baseConfig);

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: './index',
  output: {
    path: resolve(__dirname, 'dist'),
  }
});
