<template>
  <ul v-if="todos.length">
    <li v-for="todo in todos" :key="todo.id">
      <!-- <span :class="{done: todo.done}">{{todo.todo}}</span> -->
      <span :class="todo.done?'done': ''">{{todo.todo}}</span>
      <button>删除</button>
    </li>
  </ul>
  <div v-else>请添加待办事项</div>
</template>

<script>
export default {
  name: "todolist",
  props: ["todos"]
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
