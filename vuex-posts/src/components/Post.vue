<template>
  <div>
    <PostBody/>
    <PostComment/>
  </div>
</template>

<script>
import PostBody from "./PostBody";
import PostComment from "./PostComment";
export default {
  name: "post",
  components: {
    PostBody,
    PostComment
  }
};
</script>

<style>
</style>
