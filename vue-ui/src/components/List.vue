<template>
  <div v-if="posts">
    <ul>
      <li v-for="post in showPosts" :key="posts.id">{{post.title}}</li>
    </ul>
    <!-- 分页器 -->
    <el-pagination
      background
      layout="prev,pager, next ,jumper"
      :total="posts.length"
      :page-size="10"
    ></el-pagination>
  </div>
  <div v-else>请稍等...</div>
</template>

<script>
import axios from "axios";

export default {
  name: "list",
  data() {
    return {
      posts: null
      // pageSize: 1
    };
  },
  computed: {
    showPosts() {
      // 0 - 10    10  20
      return this.posts.slice(0, 10);
    }
  },
  created() {
    // 发送请求获取数据

    axios.get("http://jsonplaceholder.typicode.com/posts").then(res => {
      this.posts = res.data;
    });
  }
};
</script>

<style>
</style>
