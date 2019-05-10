<template>
  <div>
    <h1>hello</h1>
    <button @click="num--">-</button>
    <span>{{num}}</span>
    <button @click="num++">+</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      num: 0
    };
  }
};
</script>

<style>
</style>
