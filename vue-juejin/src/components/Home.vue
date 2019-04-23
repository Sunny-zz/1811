<template>
  <div class="home">
    <ul>
      <li>
        <!-- router-link 跳转页面因为 to 属性内写的地址 会被传递到 路由一个 push 方法内 -->
        <router-link to="/welcome/recommended" :class="isHome? 'router-link-active': ''">推荐</router-link>
      </li>
      <li>
        <router-link to="/welcome/backend">后端</router-link>
      </li>
      <li>
        <router-link to="/welcome/frontend">前端</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  computed: {
    isHome() {
      return this.$route.fullPath === "/";
    }
  }
};
</script>

<style>
.home > ul {
  display: flex;
  list-style: none;
  padding: 0;
}
.home > ul li a {
  text-decoration: none;
  color: darkgray;
  margin-right: 20px;
}

.home > ul li .router-link-active {
  color: aqua;
}
</style>
