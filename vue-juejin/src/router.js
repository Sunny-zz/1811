import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./components/Home"
import Pins from "./components/Pins"
import Topics from "./components/Topics"
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/pins",
    component: Pins
  },
  {
    path: "/topics",
    component: Topics
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
