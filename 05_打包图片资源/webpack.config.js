const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: resolve(__dirname, 'build'),
    // 引入图片等资源的时候，使用该路径为访问路径
    // 加入引入图片的地方写了a.img，则实际生成的路径为 ./a.img
    // 就是在原先的相对路径前面加上publicPath，作为最终的路径
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 创建style标签，并将js里css的内容插入到该标签生效
          'style-loader',
          // 将css文件变成commosjs模块加载到js中，里面内容是样式字符串
          // 将css文件转化为js文件，这个js文件里有个字符串保存了css文件的内容
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          // 创建style标签，并将js里css的内容插入到该标签生效
          'style-loader',
          // 将css文件变成commosjs模块加载到js中，里面内容是样式字符串
          // 将css文件转化为js文件，这个js文件里有个字符串保存了css文件的内容
          'css-loader',
          // 需要安装less和less-loader
          'less-loader'
        ]
      },
      {
        // 处理图片资源
        // 处理不了html里的图片
        test: /\.(png|jpeg|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 图片大小小于10kb就会被base64处理
              // 有点：减少请求数量，减轻服务器压力
              // 缺点：basse64转换后图片体积会更大（文件请求速度更慢）
              limit: 10 * 1024,
              // 给输出资源重命名，hash取前10位，后缀不变
              name: '[hash:10].[ext]'
            }
          }
        ],
      },
      {
        test: /\.html$/,
        // 处理html文件里的图片（负责引入img，从而能被url-loader处理）
        loader: 'html-loader'
      }
    ]
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