// webpack 的开发环境配置
// 入口entry(多入口)
// output(出口)
// module模块(非js模块)
// pulgin插件

// 服务配置  devServe
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const webpack = require("webpack")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
module.exports = {
  // 模式  开发模式
  mode: "development",
  // 选择 开发工具  开发环境中推荐使用  eval  eval-source-map
  devtool: "eval-source-map",
  devServer: {
    contentBase: "./dist",
    // 启用模块热替换，局部更新
    hot: true,
    // port: 8080,
    // 减少浏览器控制台的一些提示信息
    clientLogLevel: "none",
    // 将所有的 404 都指向 index.html
    historyApiFallback: true
  },
  entry: {
    app: "./src/main.js"
  },
  output: {
    filename: "[hash:5].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  // module 模块
  // 非js模块的导入需要 loader
  // css 模块需要 style-loader  css-loader
  // loader 的执行是有顺序的，由后往前

  // 所有的 非 js 模块都被打包到了 xxx.bundle.js (css  images  font )
  // 实现 css 分离
  module: {
    rules: [
      {
        // css 文件的规则
        test: /(\.css|\.scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        // vue 文件的规则
        test: /\.vue$/,
        use: ["vue-loader"]
      },
      // 图片当作模块引入
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  // 插件plugin 给webpack添加一些其他功能
  // HtmlWebpackPlugin 有可能你频繁的修改了入口文件或出口文件，导致 html 文件引入的 文件发生了改变，要频繁的修改
  // 自动新建 html 自动引入文件,让你提供一个 html 模板
  // clean-webpack-plugin 清理 dist 文件夹
  // mini-css-extract-plugin
  // 此插件将CSS提取到单独的文件中
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ],
  resolve: {
    // 模块解析的时候可以忽略的扩展名
    extensions: [".js", ".json", ".vue"]
  }
}
