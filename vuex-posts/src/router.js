import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./components/Home.vue"
import Post from "./components/Post.vue"
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/post/:id",
      component: Post
    }
  ],
  mode: "history"
})
