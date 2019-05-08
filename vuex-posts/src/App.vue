<template>
  <div>
    <router-link to="/">首页{{$store.state.num}}</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    this.$store.dispatch("getPosts");
  }
};
</script>

<style>
</style>
