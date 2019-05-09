<template>
  <div>
    <h2>Todos</h2>
    <TodoForm/>
    <TodoList/>
    <TodoFoot/>
  </div>
</template>

<script>
// todos.js   列表数据   state={all: []}    {id:'2ewq',todo:'xxxx',isCompleted: false}
// filter.js  筛选条件   state={filter: 'all'}
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFoot from "./components/TodoFoot";
export default {
  name: "app",
  components: {
    TodoForm,
    TodoList,
    TodoFoot
  }
};
</script>

<style>
</style>
