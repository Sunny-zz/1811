<template>
  <div>
    <h1>Vuex demo</h1>
    <span>{{$store.state.num}}</span>
    <br>
    <!-- <button @click="$store.commit('add')">+</button>
    <button @click="$store.commit('sub')">-</button>
    <button @click="$store.commit('change',10000)">替换</button>-->
    <!-- 对象类型的提交 mutation -->
    <button @click="$store.commit({type:'add'})">+</button>
    <button @click="$store.commit({type:'sub'})">-</button>
    <button @click="$store.commit({type:'change',newNum: 10000})">替换</button>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
</style>
