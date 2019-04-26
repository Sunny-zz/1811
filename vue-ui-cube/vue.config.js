// 给 vue-cli 3 添加的配置
// 以后修改配置可以在这里面修改
module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: []
      }
    }
  },
  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: false
    }
  }
}
