const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
  // 模式  生产模式
  mode: "production",
  devtool: "none",
  entry: "./src/main.js",
  output: {
    filename: "js/[hash:5].bundle.js",
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        // css 文件的规则
        test: /(\.css|\.scss)$/,
        // use: ["style-loader", "css-loader", "sass-loader"]
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
            }
          },
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              // autoprefixer 自动添加浏览器厂商前缀
              // 从webpack高版本之后 autoprefixer 就必须带配置才能生效
              // cssnano 压缩css
              plugins: [
                require("autoprefixer")({
                  browsers: [
                    "> 1%",
                    "last 2 versions",
                    "not ie <= 8",
                    "ios >= 8",
                    "android >= 4.0"
                  ]
                }),
                require("cssnano")
              ]
            }
          },
          "sass-loader"
        ]
      },
      {
        // vue 文件的规则
        test: /\.vue$/,
        use: ["vue-loader"]
      },
      // 图片当作模块引入
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              // 图片小于 8kb 自动转化为 base64 编码
              //
              limit: 8192,
              name: "images/[hash:8].[name].[ext]",
              publicPath: "/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[hash:5].[name].css",
      chunkFilename: "[id].css",
      publicPath: "/css"
    })
  ],
  resolve: {
    // 模块解析的时候可以忽略的扩展名
    extensions: [".js", ".json", ".vue"]
  }
}
