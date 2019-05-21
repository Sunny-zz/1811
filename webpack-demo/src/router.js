import Vue from "vue"
import VueRouter from "vue-router"
import Hello from "./components/Hello.vue"
import About from "./components/About.vue"
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Hello
    },
    {
      path: "/about",
      component: About
    }
  ],
  mode: "history"
})
