<template>
  <div class="header">
    <img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt>
    <router-link active-class="active-nav" to="/" exact>首页</router-link>
    <router-link active-class="active-nav" to="/pins">沸点</router-link>
    <router-link active-class="active-nav" to="topics">话题</router-link>
    <!-- 链接激活时 就是页面的地址包含链接的地址时，就叫激活 可以使用 exact 将激活规则变成严格模式-->
    <!-- active-class prop 意思是设置激活状态下的类名 -->
  </div>
</template>

<script>
export default {
  name: "topheader"
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
