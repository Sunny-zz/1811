<template>
  <div v-if="posts">
    <ul class="list">
      <li v-for="post in showPosts" :key="posts.id">{{post.title}}</li>
    </ul>
    <!-- 分页器 -->
    <el-pagination
      background
      layout="prev,pager, next ,jumper"
      :total="posts.length"
      :page-size="10"
      @current-change="changePage"
    ></el-pagination>
  </div>
</template>

<script>
import axios from "axios";
import { Loading } from "element-ui";
export default {
  name: "list",
  data() {
    return {
      posts: null,
      pageSize: 1
    };
  },
  computed: {
    showPosts() {
      // 0 - 10    10  20
      return this.posts.slice((this.pageSize - 1) * 10, this.pageSize * 10);
    }
  },
  created() {
    // 发送请求获取数据
    // 执行 loading
    // service 后面的参数 相当给 loading 的配置(loading 的样子)
    let loadingInstance = Loading.service({
      text: "Loading...",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.7)"
    });

    axios.get("http://jsonplaceholder.typicode.com/posts").then(res => {
      setTimeout(() => {
        this.posts = res.data;
        // 关闭 loading
        loadingInstance.close();
      }, 1000);
    });
  },
  methods: {
    changePage(page) {
      this.pageSize = page;
    }
  }
};
</script>

<style>
.list li {
  margin-bottom: 20px;
}
</style>
