<template>
  <div>
    <input type="text" v-model="val" @keydown.enter="$emit('addTodo',val,clearVal)">
    <button @click="$emit('addTodo',val,clearVal)">添加</button>
  </div>
</template>

<script>
export default {
  name: "todoheader",
  data() {
    return {
      val: ""
    };
  },
  methods: {
    clearVal() {
      this.val = "";
    }
  }
};
</script>

<style>
</style>
