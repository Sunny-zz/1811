<template>
  <div>
    <h1>
      <router-link to="/">vue router</router-link>
    </h1>
    <!-- 这是一个组件我们创建好的路由组件，该组件展示什么内容呢，根据页面的地址展示不同的内容，实现了页面跳转 -->
    <!-- 当页面地址变成  /home 是路由规则就能匹配成功对应展示 Home 组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
</style>

