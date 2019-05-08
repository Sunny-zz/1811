import axios from "axios"
const comments = {
  state: { all: [] },
  getters: {
    commentNum: state => state.comments.length
  },
  mutations: {
    getComments(state, comments) {
      state.all = comments
    },
    addComment(state, newComment) {
      state.all.unshift(newComment)
    }
  },
  actions: {
    getComments({ commit }, id) {
      axios.get(`http://localhost:3008/comments?postId=${id}`).then(res => {
        commit("getComments", res.data.reverse())
      })
    },
    addComment({ commit }, payload) {
      axios
        .post("http://localhost:3008/comments", payload.newComment)
        .then(res => {
          commit("addComment", res.data)
          payload.clearInput()
        })
    }
  }
}

export default comments
