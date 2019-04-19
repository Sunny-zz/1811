import Vue from "vue"
import App from "./App.vue"
import router from "./router"
Vue.config.productionTip = false

// 如何将 定义好的路由挂载到所有vue 组件上
// 在 new Vue 的时候加上一个属性 router 值为创建好的路由
new Vue({
  render: h => h(App),
  router: router
}).$mount("#app")
