<template>
  <ul v-if="currentTodos">
    <li v-for="todo in currentTodos" :key="todo.id">
      <span @click="change(todo.id)" :class=" todo.isCompleted ? 'is-completed' : '' ">{{todo.todo}}</span>
      <button @click="delTodo(todo.id)">删除</button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "todolist",
  computed: {
    ...mapState({
      // todos: state => state.todos.all,
      filter: state => state.filter.type
    }),
    currentTodos() {
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
  },
  methods: {
    ...mapMutations(["change", "delTodo"])
  }
};
</script>

<style scoped>
span {
  user-select: none;
  cursor: pointer;
}
.is-completed {
  text-decoration: line-through;
}
</style>
 