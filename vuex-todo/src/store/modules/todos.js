const todos = {
  state: {
    all: [
      { id: "2ewq", todo: "吃饭", isCompleted: false },
      { id: "2e11wq", todo: "睡觉", isCompleted: true },
      { id: "2e13wq", todo: "睡觉1", isCompleted: true },
      { id: "2ee1wq", todo: "睡觉2", isCompleted: true }
    ]
  },
  mutations: {
    change(state, id) {
      state.all.find(todo => todo.id === id).isCompleted = !state.all.find(
        todo => todo.id === id
      ).isCompleted
    },
    delTodo(state, id) {
      state.all = state.all.filter(todo => todo.id != id)
    }
  },
  getters: {
    currentTodos: state => type =>
      state.all.filter(todo =>
        type === "all"
          ? true
          : type === "active"
          ? !todo.isCompleted
          : todo.isCompleted
      ),
    activeTodoNum: state => state.all.filter(todo => !todo.isCompleted).length
  }
}
export default todos
