<template>
  <div>
    <h1>Todo</h1>
    <TodoHead @addTodo="addTodo"/>
    <TodoList :todos="todos"/>
    <TodoFooter/>
  </div>
</template>
<script>
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
export default {
  name: "app",
  components: {
    TodoHead,
    TodoList,
    TodoFooter
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          todo: 123,
          done: true
        }
      ]
    };
  },
  methods: {
    addTodo(todo, callBack) {
      if (todo.trim()) {
        const newTodo = {
          id: 2,
          todo
        };
        this.todos.push(newTodo);
        callBack();
      }
    }
  }
};
</script>
