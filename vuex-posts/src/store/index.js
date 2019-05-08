import Vue from "vue"
import Vuex from "vuex"

import axios from "axios"
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    getPosts(state, posts) {
      state.posts = posts
    }
  },
  actions: {
    getPosts({ commit }) {
      axios.get("http://localhost:3008/posts").then(res => {
        commit("getPosts", res.data)
      })
    }
  }
})
