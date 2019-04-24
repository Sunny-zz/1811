import VueRouter from "vue-router"
import Vue from "vue"
import Home from "./components/Home.vue"
import Connect from "./components/Connect.vue"
import Help from "./components/Help.vue"
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/help",
      component: Help
    },
    {
      path: "/connect",
      component: Connect
    }
  ],
  mode: "history"
})
