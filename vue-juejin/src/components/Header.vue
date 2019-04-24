<template>
  <div class="header">
    <img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" @click="returnHome" alt>
    <!-- 当链接为 welcome/xxx 的时候我的首页link的匹配规则需是不严格匹配，而其他情况需要严格匹配 -->
    <!-- 获取页面的当前路径 通过路由的一些属性 -->
    <!-- vue 路由我们有两种获取路由信息的属性 -->
    <!-- 1. 获取当前页面的路由信息 this.$route 在 template 内直接使用 $route -->
    <!-- 2. 获取整个路由的信息 this.$router 在 template 内直接使用 $router -->
    <router-link active-class="active-nav" to="/" :exact="isExact">首页</router-link>
    <router-link active-class="active-nav" to="/pins">沸点</router-link>
    <router-link active-class="active-nav" to="topics">话题</router-link>
    <!-- 链接激活时 就是页面的地址包含链接的地址时，就叫激活 可以使用 exact 将激活规则变成严格模式-->
    <!-- active-class prop 意思是设置激活状态下的类名 -->
  </div>
</template>

<script>
export default {
  name: "topheader",
  computed: {
    isExact() {
      return this.$route.path.indexOf("welcome") === -1 ? true : false;
    }
  },
  methods: {
    returnHome() {
      // router-link   to='/'
      // this.$route
      // this.$router
      // console.log(this.$route);
      // console.log(this.$router);
      // 路由本身自带一些历史纪录的跳转
      // back  go  push forward
      this.$router.push("/");
    }
  }
};
</script>

<style>
.header {
  display: flex;
  width: 400px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
}
.header a {
  text-decoration: none;
  color: darkgray;
}
.header .active-nav {
  color: cornflowerblue;
}
</style>
