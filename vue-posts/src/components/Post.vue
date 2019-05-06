<template>
  <div v-if="post">
    <h1>{{post.title}}</h1>
    <p>{{post.body}}</p>
    <div class="comment-box">
      <h3>评论</h3>
      <input type="text" v-model="val">
      <button @click="add">添加</button>
      <ul v-if="comments.length">
        <li v-for="comment in comments" :key="comment.id">{{comment.text}}</li>
      </ul>
      <div v-else>评论为空</div>
    </div>
  </div>
  <div v-else>请稍等...</div>
</template>

<script>
import axios from "axios";
export default {
  name: "post",
  data() {
    return {
      post: null,
      val: "",
      comments: []
    };
  },
  created() {
    // 获取 id
    // this.$route
    // this.$router
    const { id } = this.$route.params;
    axios.get(`http://localhost:3008/posts/${id}`).then(res => {
      this.post = res.data;
    });
    // get 请求传递参数
    axios.get(`http://localhost:3008/comments?postId=${id}`).then(res => {
      this.comments = res.data;
    });
  },
  methods: {
    add() {
      // 更新后台，成功后依据后台返回的数据更新前台
      if (this.val.trim()) {
        const { id } = this.$route.params;
        axios
          .post("http://localhost:3008/comments", {
            text: this.val,
            postId: id
          })
          .then(res => {
            this.comments.push(res.data);
            this.val = "";
          });
      }
    }
  }
};
</script>

<style>
</style>
