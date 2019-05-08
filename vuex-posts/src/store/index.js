import Vue from "vue"
import Vuex from "vuex"

import axios from "axios"
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    posts: [],
    comments: []
  },
  mutations: {
    getPosts(state, posts) {
      state.posts = posts
    },
    getComments(state, comments) {
      state.comments = comments
    },
    addComment(state, newComment) {
      state.comments.push(newComment)
    }
  },
  actions: {
    getPosts({ commit }) {
      axios.get("http://localhost:3008/posts").then(res => {
        commit("getPosts", res.data)
      })
    },
    getComments({ commit }, id) {
      axios.get(`http://localhost:3008/comments?postId=${id}`).then(res => {
        commit("getComments", res.data)
      })
    },
    // action 函数只能接受两个参数
    addComment({ commit }, payload) {
      axios
        .post("http://localhost:3008/comments", payload.newComment)
        .then(res => {
          commit("addComment", res.data)
          payload.clearInput()
        })
    }
  }
})
