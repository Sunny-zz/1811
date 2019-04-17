import Vue from "vue"
// 导入第三方模块 vue
import App from "./App.vue"
// 导入自定义模块 app.vue
// 后缀名 .vue 的文件 跟我们之前的  js 文件很象，我们称这个文件叫 vue 的组件。其实整个 vue 项目就是由很多 vue 组件组成的。
// 组件的英文 component

Vue.config.productionTip = false

// new Vue 创建一个 vue 实例
// render 渲染
// 将 App 组件内的东西渲染到页面的 #app 标签内
// 所以说 可以理解为 App.vue 相当于 body
new Vue({
  render: h => h(App)
}).$mount("#app")

// webpack 帮我们将 main.js 编译了，然后引入到了 页面中
