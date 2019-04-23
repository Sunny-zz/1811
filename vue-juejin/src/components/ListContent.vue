<template>
  <div v-if="!posts">请稍等一哈...</div>
  <div v-else>
    <ul>
      <li v-for="post in posts" :key="post.id">{{post.title}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "listcontent",
  data() {
    return {
      posts: null
    };
  },
  created() {
    // get 方法传递参数
    // 一般都是传递给后台做筛选
    // 刷新页面的时候要获取推荐型的文章
    // 传参方式
    // 1. 写在地址后面 ？后
    axios.get("http://localhost:3008/posts?isRecommended=true").then(res => {
      this.posts = res.data;
    });
  }
};
</script>

<style>
</style>
