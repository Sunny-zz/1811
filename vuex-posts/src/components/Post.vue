<template>
  <div>
    <PostBody :post="post"/>
    <PostComment :comments="comments"/>
  </div>
</template>

<script>
import PostBody from "./PostBody";
import PostComment from "./PostComment";
import { mapGetters } from "vuex";
export default {
  name: "post",
  components: {
    PostBody,
    PostComment
  },
  computed: {
    post() {
      const { id } = this.$route.params;
      console.log(this.filterPost(id));
      return this.filterPost(id);
    },
    ...mapGetters(["filterPost"]),
    comments() {
      return this.$store.state.comments.all;
    }
  },
  created() {
    const { id } = this.$route.params;
    this.$store.dispatch("getComments", id);
  }
};
</script>

<style>
</style>
