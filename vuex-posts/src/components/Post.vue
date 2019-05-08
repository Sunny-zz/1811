<template>
  <div>
    <PostBody :post="post"/>
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
  },
  computed: {
    post() {
      const { id } = this.$route.params;
      return this.$store.state.posts.find(post => post.id === id);
    }
  }
};
</script>

<style>
</style>
