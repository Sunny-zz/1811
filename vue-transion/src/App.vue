<template>
  <div>
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/help">帮助</router-link>
      </li>
      <li>
        <router-link to="/connect">联系</router-link>
      </li>
    </ul>
    <transition name="test">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
.test-enter,
.test-leave-to {
  opacity: 0;
}
.test-enter-active,
.test-leave-active {
  transition: all 2s;
}
</style>
