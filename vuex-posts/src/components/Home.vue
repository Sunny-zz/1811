<template>
  <div v-if="!posts.length">请稍等...</div>
  <ul v-else>
    <li v-for="post in posts" :key="post.id">
      <router-link :to="`/post/${post.id}`">{{post.title}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "home",
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  }
};
</script>

<style>
</style>


