<template>
  <div>
    <input v-model="val" type="text">
    <button>提交todo</button>
  </div>
</template>

<script>
export default {
  name: "todoform",
  data() {
    return {
      val: ""
    };
  }
};
</script>

<style>
</style>
