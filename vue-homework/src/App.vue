<template>
  <div>
    <h1>
      <router-link to="/">首页</router-link>
    </h1>
    <router-view></router-view>
    <div>{{projectList.length}}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      projectList: []
    };
  },
  created() {
    // cors 策略      跨域资源共享策略
    // 跨域
    // http://localhost:8080/
    // https://wanandroid.com
    // 默认浏览是不允许跨域请求的 ，因为同源策略
    // 两种解决方案
    // 1. 后台处理  比如说 cnode中文社区   vue中文社区
    // 2. 前台自己处理 vue中  jquery中 react中

    // 在 vue 中 前台处理跨域请求 使用 proxy
    // proxy 是 webpack 的一个配置  代理配置
    //
    axios.get("/api/article/listproject/0/json").then(res => {
      console.log(res.data);
      this.projectList = res.data.data.datas;
    });
  }
};
</script>

<style>
</style>
