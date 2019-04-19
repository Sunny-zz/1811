<template>
  <div>
    <div v-if="!article">请稍等....</div>
    <div v-else>
      <h2>{{article.title}}</h2>
    </div>
  </div>
</template>

<script>
// 展示对应的文章内容
// 1. 获取对应后台的数据   http://localhost:3008/articles/1  根据页面中的地址栏信息获取对应文章的 id
// vueRouter 如何获取页面中的 id(动态路由的参数)
import axios from "axios";
export default {
  name: "articleInfo",
  data() {
    return {
      article: null
    };
  },
  created() {
    // 获取 页面地址的 id
    // this.$route 获取当前地址的一些信息 包括动态参数
    // 使用 this.$route.params.参数名 访问
    const id = this.$route.params.id;
    axios.get(`http://localhost:3008/articles/${id}`).then(res => {
      this.article = res.data;
    });
  }
};
</script>

<style>
</style>
