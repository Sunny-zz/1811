// 我们使用这个文件创建路由
// 1. 导入路由构造函数 通过这个函数帮助 vue 创建路由
import VueRouter from "vue-router"
// 2. 一般来说vue是没有路由功能,需要将路由功能添加到 vue 内
import Vue from "vue"
// 3. 创建路由组件 我们这个 article 组件就是路由组件 导入
import Home from "./components/Home.vue"
import Article from "./components/Article.vue"
// 给 vue 添加路由功能
Vue.use(VueRouter)
// 4. 定义路由
const routes = [
  // 每一个对象都代表一个路由规则
  // 当页面匹配到路由的 path 时，对应展示 路由组件(component 的值)
  {
    //  / 的意思就是 localhost:8080 根地址
    path: "/",
    component: Home
  },
  {
    // 地址随便命名，但是一般都是写  /xxx/xx
    // 第一个斜杠代表根地址 localhost:8080
    // 由于 Article 组件是展示文章内容组件，所以就需要有很多的地址能指向该组件
    // 此时 path 就要写成不固定的 设置成动态的
    // 动态路由  例如 /artcle/:xx    意思是只要是满足  /article/任何东西
    //  id 称为动态路由的参数
    path: "/article/:id",
    // component 指的是某个组件
    component: Article
  }
]
// 5. 根据定义好的路由 routes 使用 VueRouter 构造函数 创建一个 vue 路由实例,并导出

// 创建路由的时候 vueRouter 默认使用 hash 模式 这种模式地址栏会多 /#/ 比较难看
// 模式可以使用  mode 属性更改 改成 history 模式
//
const router = new VueRouter({
  routes: routes,
  mode: "history"
})
export default router
// 5. 将路由挂载到整个 vue 的所有组件上 挂载到根实例上 需要到 main.js 中
// 一般添加全局的功能的时候都需要在 main.js 中设置
