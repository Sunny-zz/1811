import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./components/Home"
import List from "./components/List"
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/list",
      component: List
    }
  ],
  mode: "history"
})
