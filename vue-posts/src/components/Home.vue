<template>
  <div v-if="posts.length">
    <div>文章列表</div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{post.title}}</router-link>
      </li>
    </ul>
  </div>
  <div v-else>请稍等...</div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      posts: []
    };
  },
  created() {
    axios
      .get("http://localhost:3008/posts")
      .then(res => {
        this.posts = res.data;
      })
      .catch(err => {
        // 错误处理
      });
  }
};
</script>

<style>
</style>
