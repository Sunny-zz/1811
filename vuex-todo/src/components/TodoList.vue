<template>
  <ul v-if="currentTodos">
    <li v-for="todo in currentTodos" :key="todo.id">{{todo.todo}}</li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "todolist",
  computed: {
    ...mapState({
      // todos: state => state.todos.all,
      filter: state => state.filter.type
    }),
    currentTodos() {
      //
      // return this.todos.filter(todo =>
      //   this.filter === "all"
      //     ? true
      //     : this.filter === "active"
      //     ? !todo.isCompleted
      //     : todo.isCompleted
      // );
      // 通过 todos 模块的 getter 获取正确的展示 todo
      return this.$store.getters.currentTodos(this.filter);
    }
    // ...mapState(["todos"])
  }
};
</script>

<style>
</style>
 