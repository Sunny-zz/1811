const filter = {
  state: {
    type: "all"
  },
  mutations: {
    changeType(state, type) {
      state.type = type
    }
  }
}
export default filter
