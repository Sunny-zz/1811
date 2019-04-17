<template>
  <button @click="clickEvent">{{text}}</button>
</template>

<script>
export default {
  name: "btn",
  props: {
    text: {
      type: String,
      default: "按钮"
    },
    clickEvent: {
      type: Function
    }
  }
};
</script>

<style>
</style>
