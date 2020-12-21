const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(ttf|eot|woff|svg)$/,
        loader: 'file-loader', // 将资源移动到output对应的目录，不做其他处理
        options: {
          name: '[hash:10].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  mode: 'development',
  // 不会有任何输出，保存在内存中
  // webpack5启动命令 npx webpack serve
  devServer: {
    // 将output目录作为访问静态资源的目录（服务器的文件根目录）
    contentBase: resolve(__dirname, 'dist'),
    // gzip压缩
    compress: true,
    port: 3000,
    // 自动打开浏览器
    open: true
  }
}