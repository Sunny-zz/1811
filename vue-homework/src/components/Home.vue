<template>
  <ul v-if="topics.length">
    <li v-for="topic in topics" :key="topic.id">
      <img style="width: 40px;" :src="topic.author.avatar_url" alt>
      <span>{{topic.reply_count}}</span>
      <span>/</span>
      <span>{{topic.visit_count}}</span>
      <!-- :class="{show: topic.top || topic.good,box: true}" -->
      <span
        :class=" (topic.top || topic.good) ? 'box show' : 'box'"
      >{{ topic.top ? '置顶' : topic.good ? '精华' : topic.tab ==='share'?'分享': topic.tab ==='ask'?'问答' :'招聘'}}</span>
      <router-link :to="`./topic/${topic.id}`">{{topic.title}}</router-link>
    </li>
  </ul>
  <div v-else>请稍等...</div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      topics: []
    };
  },
  created() {
    axios
      .get("https://cnodejs.org/api/v1/topics?page=1&limit=10&tab=all")
      .then(res => {
        console.log(res.data.data);
        this.topics = res.data.data;
      });
  }
};
</script>

<style>
.box {
  /* 初始样式 */
  background-color: #ccc;
  color: #000;
  border-radius: 4px;
  padding: 4px 8px;
}
.show {
  background-color: green;
  color: red;
}
</style>
