import Vue from "vue"
import Vuex from "vuex"
import posts from "./modules/posts"
import comments from "./modules/comments"

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    // posts: [],
    // comments: []
  },
  // getters 是 store 的计算属性
  // getter 函数默认接受两个参数  state  getters(所有 store 内的 getter )
  // getter 函数要传递参数的话， getter 函数必须返回一个新的函数，返回的函数内传参，并且将计算的结果也在返回的函数内返回
  getters: {
    // 传参的 getter
    // filterPost: ({ posts }, getters) => id =>
    //   posts.find(post => post.id === id),
    // 不传参的 getter
    // commentNum: state => state.comments.length
  },
  mutations: {
    // getPosts(state, posts) {
    //   state.posts = posts
    // },
    // getComments(state, comments) {
    //   state.comments = comments
    // },
    // addComment(state, newComment) {
    //   state.comments.unshift(newComment)
    // }
  },
  actions: {
    // getPosts({ commit }) {
    //   axios.get("http://localhost:3008/posts").then(res => {
    //     commit("getPosts", res.data)
    //   })
    // },
    // getComments({ commit }, id) {
    //   axios.get(`http://localhost:3008/comments?postId=${id}`).then(res => {
    //     commit("getComments", res.data.reverse())
    //   })
    // },
    // // action 函数只能接受两个参数
    // addComment({ commit }, payload) {
    //   axios
    //     .post("http://localhost:3008/comments", payload.newComment)
    //     .then(res => {
    //       commit("addComment", res.data)
    //       payload.clearInput()
    //     })
    // }
  },
  modules: {
    posts,
    comments
  }
})
