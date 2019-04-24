import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./components/Home"
import Pins from "./components/Pins"
import Topics from "./components/Topics"
import List from "./components/List"
import ListContent from "./components/ListContent"
import Error404 from "./components/Error404"
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
        component: ListContent
      },
      {
        path: "welcome/recommended",
        component: ListContent
      },
      {
        // 动态路由
        path: "welcome/:type",
        component: List,
        children: [
          {
            path: "",
            component: ListContent
          },
          {
            path: ":leibie",
            component: ListContent
          }
        ]
      }
    ]
  },
  {
    path: "/feidian",
    component: Pins
  },
  {
    path: "/pins",
    redirect: "/feidian"
  },
  {
    path: "/topics",
    component: Topics
  },
  {
    path: "/error",
    component: Error404
  },
  // /* 匹配所有地址
  {
    path: "/*",
    redirect: "/error"
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
