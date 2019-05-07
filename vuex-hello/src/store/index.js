import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
Vue.use(Vuex)

// 创建 store(存储共享状态的容器)
const store = new Vuex.Store({
  // 有一个属性 state 该属性就是存储共享数据的 数据类型是对象类型
  // 修改 store 的逻辑
  // 需要定义 mutation 更新 state
  // 需要使用 store 的 commit 方法触发 mutation 进而动态修改 store
  state: {
    obj: {
      num: 0
    },
    posts: []
  },
  mutations: {
    // 放的是修改 state 的函数(方法)
    // 函数默认第一个参数就是 state，直接对 state 下的数据进行修改，就是修改了 store
    add(state) {
      state.obj.num++
    },
    sub(state) {
      if (state.obj.num > 1) {
        state.obj.num--
      }
    },
    // mutation 接受额外的参数
    // commit 如何传递参数
    change(state, num) {
      state.obj.num = num
    },
    getPosts(state, posts) {
      state.posts = posts
    }
  },
  // actions 也是用来提交 mutation 的 也是使用 commit 提交的
  // 由于要异步获取数据修改 state
  actions: {
    // action 函数 默认接收一个参数  context 对象，该对象下有一个 commit 方法用来提交 mutation
    // 怎么触发 action
    getPosts(context) {
      axios.get("http://localhost:3000/posts").then(res => {
        context.commit("getPosts", res.data)
      })
    }
  }
})

export default store
