<template>
  <div>
    <span></span>
    <button @click="$emit('changeFilterType','all')">all</button>
    <button @click="$emit('changeFilterType','active')">active</button>
    <button @click="$emit('changeFilterType','completed')">completed</button>
  </div>
</template>

<script>
export default {
  name: "todofooter"
};
</script>

<style>
</style>
