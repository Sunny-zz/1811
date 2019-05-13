<template>
  <div v-if="topic">
    <h2>{{topic.title}}</h2>
    <div>
      <span>作者 {{topic.author.loginname}}</span>
      <span>浏览量 {{topic.visit_count}}</span>
      <span>来自 · {{ topic.tab ==='share'?'分享': topic.tab ==='ask'?'问答' :'招聘'}}</span>
      <article class="topic_content" v-html="topic.content">
        <!-- 后台获取的是 html 字符串 使用 v-html 指令解析 -->
      </article>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "topic",
  data() {
    return {
      topic: null
    };
  },
  created() {
    const { id } = this.$route.params;
    axios.get(`https://cnodejs.org/api/v1/topic/${id}`).then(res => {
      console.log(res.data.data);
      this.topic = res.data.data;
    });
  }
};
</script>

<style>
.preview h1,
.preview h2,
.preview h3,
.preview h4,
.preview h5,
.preview h6,
.reply_area h1,
.reply_area h2,
.reply_area h3,
.reply_area h4,
.reply_area h5,
.reply_area h6,
.topic_content h1,
.topic_content h2,
.topic_content h3,
.topic_content h4,
.topic_content h5,
.topic_content h6 {
  margin: 30px 0 15px;
  border-bottom: 1px solid #eee;
}
.topic_content {
  width: 60%;
  margin: 0 auto;
}
.topic_content h2 {
  font-size: 26px;
}
.topic_content img {
  width: 100%;
}
pre {
  word-break: break-all;
  word-wrap: break-word;
  white-space: pre-wrap;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.15);
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}
</style>
