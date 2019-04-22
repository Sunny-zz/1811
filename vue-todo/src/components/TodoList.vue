<template>
  <ul v-if="todos.length">
    <li v-for="todo in todos" :key="todo.id">
      <!-- <span :class="{done: todo.completed}">{{todo.todo}}</span> -->
      <span
        @click="$emit('changeCompleted',todo.id)"
        :class="todo.completed?'done': ''"
      >{{todo.todo}}</span>
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
span {
  cursor: pointer;
  user-select: none;
}
.done {
  text-decoration: line-through;
}
</style>
