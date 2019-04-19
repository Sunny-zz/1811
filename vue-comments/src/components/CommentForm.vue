<template>
  <div>
    <input type="text" v-model.lazy="val">
    <button @click="add">提交评论</button>
  </div>
</template>

<script>
export default {
  name: "commentform",
  data() {
    return {
      val: ""
    };
  },
  methods: {
    add() {
      this.$emit("addComment", this.val, this.clearInput);
    },
    // 子组件调用父组件方法的时候
    // 想要把子组件的方法传递给父组件
    // 当作函数的参数传递给父组件
    clearInput() {
      this.val = "";
    }
  }
};
</script>

<style>
</style>
