import axios from "axios"
const posts = {
  state: { all: [] },
  getters: {
    filterPost: ({ all }, getters) => id => all.find(post => post.id === id)
  },
  mutations: {
    getPosts(state, posts) {
      state.all = posts
    }
  },
  actions: {
    getPosts({ commit }) {
      axios.get("http://localhost:3008/posts").then(res => {
        commit("getPosts", res.data)
      })
    }
  }
}

export default posts
