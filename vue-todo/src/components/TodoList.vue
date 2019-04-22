<template>
  <ul class="list" v-if="todos.length">
    <li v-for="todo in currentTodos" :key="todo.id">
      <!-- <span :class="{done: todo.completed}">{{todo.todo}}</span> -->
      <span
        @click="$emit('changeCompleted',todo.id)"
        :class="todo.completed?'done': ''"
      >{{todo.todo}}</span>
      <button @click="$emit('deleteTodo',todo.id)">删除</button>
    </li>
  </ul>
  <div v-else>请添加待办事项</div>
</template>

<script>
export default {
  name: "todolist",
  props: ["todos", "filterType"],
  computed: {
    currentTodos() {
      return this.filterType === "all"
        ? this.todos
        : this.filterType === "active"
        ? this.todos.filter(todo => !todo.completed)
        : this.todos.filter(todo => todo.completed);
    }
    // xiugai(){
    //   // axios.patch('xxxxx/id',{done: true}).then(res => {
    //   // })
    // }
  }
};
</script>

<style>
.list span {
  cursor: pointer;
  user-select: none;
}
.done {
  text-decoration: line-through;
}
</style>
