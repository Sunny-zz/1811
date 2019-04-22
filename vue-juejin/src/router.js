import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./components/Home"
import Pins from "./components/Pins"
import Topics from "./components/Topics"
import Recommended from "./components/Recommended"
import List from "./components/List"
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Home,
    // children 是子路由 路由嵌套
    // 子路由的 path 不能写  / 直接写地址
    // 例如 http://localhost:8080/welcome/recommended  写成  welcome/recommended
    children: [
      //  子路由的 path 为空就相当于 父级路由匹配
      {
        path: "",
        component: Recommended
      },
      {
        path: "welcome/recommended",
        component: Recommended
      },
      {
        // 动态路由
        path: "welcome/:type",
        component: List
      }
    ]
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
