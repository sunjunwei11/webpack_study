const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: []
  },
  plugins: [
    // html-webpack-plugin
    // 默认会创建一个空的HTML，自动引入打包输出的所有资源js/css
    new HtmlWebpackPlugin({
      // 复制'./src/index.html'文件，并且自动引入打包输出的所有资源js/css
      template: './src/index.html'
    })
  ],
  mode: 'development'
}