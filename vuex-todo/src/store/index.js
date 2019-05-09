import Vue from "vue"
import Vuex from "vuex"
import todos from "./modules/todos"
import filter from "./modules/filter"
import createLogger from "vuex/dist/logger"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todos,
    filter
  },
  plugins: [createLogger()],
  strict: process.env.NODE_ENV !== "production"
})
