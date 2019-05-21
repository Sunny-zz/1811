<template>
  <div>
    <button @click="num--">-</button>
    <span class="hello">{{num}}</span>
    <button @click="num++">+</button>
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/about">关于</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      num: 10
    };
  }
};
</script>

<style scoped>
</style>
