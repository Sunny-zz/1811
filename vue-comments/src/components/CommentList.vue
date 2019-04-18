<template>
  <div>
    <div v-if="!comments.length">空</div>
    <ul v-else>
      <li v-for="comment in comments" :key="comment.id">
        {{comment.text}}
        <!-- delComment 函数需要接收一个 id 参数 -->
        <!-- 针对 $emit 这种函数 传参 -->
        <!-- $emit('函数名',函数的参数) -->
        <button @click="$emit('delComment',comment.id)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
// 子组件修改父组件的数据
export default {
  name: "commentlist",
  props: {
    comments: {
      type: Array
    }
  }
};
</script>

<style>
</style>
