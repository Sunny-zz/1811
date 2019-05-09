<template>
  <ul v-if="todos">
    <li v-for="todo in todos" :key="todo.id">{{todo.todo}}</li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "todolist",
  computed: {
    ...mapState({
      todos: state => state.todos.all
    })
    // ...mapState(["todos"])
  }
};
</script>

<style>
</style>
