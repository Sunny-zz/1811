<template>
  <div>
    <input type="text" v-model="val">
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
      this.$emit("addComment", this.val);
      this.val = "";
    }
  }
};
</script>

<style>
</style>
