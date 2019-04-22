<template>
  <div>
    <ul>
      <li>
        <router-link to="/welcome/recommended">推荐</router-link>
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
  name: "home"
};
</script>

<style>
</style>
