import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./components/Home"
import Topic from "./components/Topic"
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/topic/:id",
      component: Topic
    }
  ],
  mode: "history"
})
