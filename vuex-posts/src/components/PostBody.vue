<template>
  <div v-if="post">
    <h2>{{post.title}}</h2>
    <span>评论数{{num}}</span>
    <p>{{post.body}}</p>
  </div>
</template>

<script>
export default {
  name: "postbody",
  props: ["post"],
  computed: {
    num() {
      return this.$store.getters.commentNum;
    }
  }
};
</script>

<style>
</style>
