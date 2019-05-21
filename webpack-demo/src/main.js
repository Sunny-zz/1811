import Vue from "vue"
import App from "./App"
import router from "./router"
new Vue({
  // render  哪个组件需要渲染
  render: h => h(App),
  router
}).$mount("#app")
