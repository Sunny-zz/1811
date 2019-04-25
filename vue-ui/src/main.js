import Vue from "vue"
import App from "./App.vue"
import "./assets/global.css"
// import ElementUI from "element-ui"
// import "element-ui/lib/theme-chalk/index.css"
import "./element-component"
import router from "./router"
// 给 vue 添加一个全局的组件 组件名叫 Button，vue 的任何组件内都可以使用 Button 组件了，使用的时候需要 使用 el-button
// 相当于我们之前使用的 transition

// Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount("#app")
