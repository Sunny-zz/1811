<template>
  <div v-if="todos.length">
    <span>{{activeNum}} {{ activeNum === 1? 'item' : 'items'}} left</span>
    <button @click="$emit('changeFilterType','all')">all</button>
    <button @click="$emit('changeFilterType','active')">active</button>
    <button @click="$emit('changeFilterType','completed')">completed</button>
    <button v-if="isHasCompleted !=-1" @click="$emit('clearCompleted')">clear compeleted</button>
  </div>
</template>

<script>
export default {
  name: "todofooter",
  props: ["todos"],
  computed: {
    activeNum() {
      return this.todos.filter(todo => !todo.completed).length;
    },
    isHasCompleted() {
      return this.todos.findIndex(todo => todo.completed);
    }
  }
};
</script>

<style>
</style>
                