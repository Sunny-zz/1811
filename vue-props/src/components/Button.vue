<template>
  <button @click="clickEvent" :style="`color:${color}`" :disabled="isDisabled">{{text}}</button>
</template>

<script>
export default {
  name: "btn",
  // 相当于创建了一个 data 里面写了一个 text 属性
  // 给属性(prop) 规定类型
  props: {
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "pink"
    },
    isDisabled: Boolean,
    clickEvent: {
      type: Function
    }
  },
  methods: {}
};
</script>

<style>
</style>
