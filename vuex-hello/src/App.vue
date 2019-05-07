<template>
  <div>
    <h1>Vuex demo</h1>
    <span>{{$store.state.num}}</span>
    <br>
    <button @click="$store.commit('add')">+</button>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
</style>
