<template>
  <div>
    <nav>
      <router-link :to="`${$route.path}/all`">全部</router-link>
      <router-link :to="`${$route.path}/javascript`">javascript</router-link>
      <router-link :to="`${$route.path}/vue`">vue</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "list"
};
</script>

<style>
</style>
