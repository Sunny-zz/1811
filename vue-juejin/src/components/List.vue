<template>
  <div class="list">
    <nav>
      <router-link :to="`${path}/all`" :class="$route.path===path  ? 'router-link-active' : ''">全部</router-link>
      <router-link :to="`${path}/javascript`">javascript</router-link>
      <router-link :to="`${path}/vue`">vue</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
// localhost:8080/welcome/frontend/all
// localhost:8080/welcome/frontend/all/js

export default {
  name: "list",
  computed: {
    path() {
      return `/welcome/${this.$route.params.type}`;
    }
  }
};
</script>

<style>
.list > nav {
  display: flex;
  justify-content: space-between;
}
.list > nav > a {
  text-decoration: none;
  color: darkgray;
}
.list > nav > a.router-link-active {
  color: aquamarine;
}
</style>
