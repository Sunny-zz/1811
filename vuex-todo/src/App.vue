<template>
  <div>
    <h2>Todos</h2>
    <TodoForm/>
    <TodoList v-if="todos.length"/>
    <TodoFoot v-if="todos.length"/>
  </div>
</template>

<script>
// todos.js   列表数据   state={all: []}    {id:'2ewq',todo:'xxxx',isCompleted: false}
// filter.js  筛选条件   state={filter: 'all'}
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFoot from "./components/TodoFoot";
import { mapState } from "vuex";
export default {
  name: "app",
  components: {
    TodoForm,
    TodoList,
    TodoFoot
  },
  computed: {
    ...mapState({
      todos: state => state.todos.all
    })
  }
};
</script>

<style>
</style>
