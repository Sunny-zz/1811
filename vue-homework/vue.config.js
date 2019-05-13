module.exports = {
  devServer: {
    proxy: {
      //    /api  是发送请求的一个代理
      // 比如 我们之前 axios.get('https://wanandroid.com/article/listproject/0/json')
      //  代理之后请求写成     '/api/article/listproject/0/json'
      "/api": {
        //对应自己的接口
        target: "https://wanandroid.com/",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
}
