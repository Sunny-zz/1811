<template>
  <div>
    <input v-model="val" type="text">
    <button @click="handleClick">评论</button>
    <ul>
      <li v-for="comment in comments" :key="comment.id">{{comment.text}}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "postcomment",
  props: ["comments"],
  data() {
    return {
      val: ""
    };
  },
  methods: {
    handleClick() {
      if (this.val.trim()) {
        const { id } = this.$route.params;
        this.addComment({
          newComment: {
            text: this.val,
            postId: id
          },
          clearInput: this.clearInput
        });
      }
    },
    ...mapActions(["addComment"]),
    clearInput() {
      this.val = "";
    }
  }
};
</script>

<style>
</style>
