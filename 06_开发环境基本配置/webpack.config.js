const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/build.js',
    path: resolve(__dirname, 'build'),
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|png|gif)/,
        loader: 'url-loader',
        options: {
          limit: 10 * 1024,
          // 可以指定输出到imgs目录下
          name: '[hash:10].[ext]',
          outputPath: 'imgs'
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        // 处理其它资源
        exclude: /\.(html|js|css|less|jpe?g|png|gif)/,
        loader: 'file-loader',
        options: {
          name: 'otherSource/[hash:10].[ext]',
          outputPath: 'media'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
  devServer: {
    // 这个目录是作为访问静态资源的目录，一般和output里的path保持一致
    contentBase: resolve(__dirname, 'build'),
    // gzip压缩
    compress: true,
    // 端口号3000
    port: 3000,
    // 自动打开浏览器
    open: true
  }
}