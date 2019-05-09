const todos = {
  state: {
    all: [
      { id: "2ewq", todo: "吃饭", isCompleted: false },
      { id: "2e1wq", todo: "睡觉", isCompleted: true }
    ]
  },
  getters: {
    currentTodos: state => type =>
      state.all.filter(todo =>
        type === "all"
          ? true
          : type === "active"
          ? !todo.isCompleted
          : todo.isCompleted
      )
  }
}
export default todos
