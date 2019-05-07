<template>
  <div>
    <h1>Vuex demo</h1>
    <span>{{$store.state.obj.num}}</span>
    <br>
    <!-- 使用 mapMutations 简化后的方式-->
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="change(1000)">替换</button>
    <!-- $store.commit 的对象类型的提交 mutation -->
    <!-- <button @click="$store.commit({type:'add'})">+</button>
    <button @click="$store.commit({type:'sub'})">-</button>
    <button @click="$store.commit({type:'change',newNum: 10000})">替换</button>-->
    <!-- $store.commit 的普通类型的提交 mutation -->
    <!-- <button @click="$store.commit('add')">+</button>
    <button @click="$store.commit('sub')">-</button>
    <button @click="$store.commit('change',1000)">替换</button>-->
    <ul class="list" v-if="posts.length">
      <li v-for="post in posts" :key="post.id">{{post.title}}</li>
    </ul>
  </div>
</template>
<script>
// 使用 mapMutations 简化  $store.commit()
import { mapMutations } from "vuex";

export default {
  name: "app",
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  methods: {
    // 将 store 中的 mutation 映射成组件的方法
    // 1.对象形式可以重命名
    // ...mapMutations({
    //   addX: "add",
    //   sub: "sub",
    //   change: "change"
    // }),
    // 2.数组形式，名字必须一致
    ...mapMutations(["add", "sub", "change"])
  },
  created() {
    // 执行 action
    this.$store.dispatch("getPosts");
  }
};
</script>

<style>
</style>
