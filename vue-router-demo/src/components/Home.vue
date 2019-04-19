<template>
  <!-- 文章列表 -->
  <div>
    <div v-if="!articles">请稍等。。。</div>
    <ul v-else>
      <li v-for="article in articles" :key="article.id">
        <router-link :to="`/article/${article.id}`">{{article.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      articles: null
    };
  },
  created() {
    axios.get("http://localhost:3008/articles").then(res => {
      setTimeout(() => {
        this.articles = res.data;
      }, 1000);
    });
  }
};
</script>

<style>
</style>
