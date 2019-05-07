<template>
  <div>
    <h1>Vuex demo</h1>
    <span>{{$store.state.num}}</span>
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    console.log(this);
  }
};
</script>

<style>
</style>
