import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

// 创建 store
const store = new Vuex.Store({
  // 有一个属性 state 该属性就是存储共享数据的 数据类型是对象类型
  state: {
    num: 10,
    a: 20
  }
})

export default store
