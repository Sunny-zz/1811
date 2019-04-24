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
  watch: {
    // 监听的对象内 属性名加引号可以直接写 js 而且想要获取该组件相关的内容是不惜要加 this
    "$route.path": {
      // handler 代表事件
      handler: function() {
        this.getPosts();
      },
      // 就相当于组件created时候执行一次handler事件
      immediate: true
      // deep: true
    }
  },
  // created() {
  //   // get 方法传递参数
  //   // 一般都是传递给后台做筛选
  //   // 刷新页面的时候要获取推荐型的文章
  //   // 传参方式
  //   // 1. 写在地址后面 ？后

  //   // type 当切到 recommended 路由是没路有参数 获取的是 undefined
  //   // 当不是 undefined 时，请求的参数就需要 postType=${type}
  //   this.getPosts();
  // },
  methods: {
    getPosts() {
      const { type } = this.$route.params;
      axios
        .get(
          `http://localhost:3008/posts?${
            !type ? "isRecommended=true" : `postType=${type}`
          }`
        )
        .then(res => {
          this.posts = res.data;
        });
    }
  }
};
</script>

<style>
</style>
