/**
 * webpack.config.js webpack的配置文件
 *  作用：指示webpack干哪些活（当你运行webpack指令时，会加载里面的配置）
 * 
 *  所有构建工具都是基于nodejs平台运行的，模块化默认采用commonjs
 */

 const { resolve } = require('path'); 

module.exports = {
  // webpack配置
  // 入口起点
  entry: './src/index.js',
  // 输出
  output: {
    // 输出文件名
    filename: 'build.js',
    // 输出路径，__dirname nodejs变量，代表当前文件目录的绝对路径
    path: resolve(__dirname, 'build')
  },
  // loader配置
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
      }
    ]
  },
  // plugin配置
  plugins: [

  ],
  mode: 'development' // development 或 production
}