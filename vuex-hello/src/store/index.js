import Vue from "vue"
import Vuex from "vuex"
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
    }
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
    }
  }
})

export default store
