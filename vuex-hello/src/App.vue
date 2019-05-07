<template>
  <div>
    <h1>Vuex demo</h1>
    <span>{{$store.state.obj.num}}</span>
    <br>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="change(1000)">替换</button>
    <!-- 对象类型的提交 mutation -->
    <!-- <button @click="$store.commit({type:'add'})">+</button>
    <button @click="$store.commit({type:'sub'})">-</button>
    <button @click="$store.commit({type:'change',newNum: 10000})">替换</button>-->
  </div>
</template>

<script>
// 使用 mapMutations 简化  $store.commit()

import { mapMutations } from "vuex";
export default {
  name: "app",
  methods: {
    // 将 store 中的 mutation 映射成组件的方法
    // ...mapMutations({
    //   addX: "add",
    //   sub: "sub",
    //   change: "change"
    // }),
    ...mapMutations(["add", "sub", "change"])
  }
};
</script>

<style>
</style>
