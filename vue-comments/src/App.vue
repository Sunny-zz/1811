<template>
  <div>
    <input type="text" v-model="val">
    <button @click="addComment">提交评论</button>
    <div v-if="!comments.length">空</div>
    <ul v-else>
      <li v-for="(comment,index) in comments" :key="comment.id">
        {{comment.text}}
        <button @click="delComment(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      comments: [
        {
          id: 1,
          text: "sasda"
        },
        {
          id: 2,
          text: "sasda1"
        },
        {
          id: 3,
          text: "sasda2"
        },
        {
          id: 4,
          text: "sasda3"
        }
      ],
      val: ""
    };
  },
  methods: {
    addComment() {
      // 页面添加一条评论，修改 comments 数组
      console.log(this.val);
      this.comments.unshift({
        id: this.comments.length + 1,
        text: this.val
      });
      this.val = "";
    },
    delComment(index) {
      // 页面删除一条评论，修改 comments 数组
      // splice(a,b,c)
      // 最好这种添加删除的操作要找到具体某一个元素的时候使用 id 最合适
      console.log(index);
      this.comments.splice(index, 1);
    }
  }
};
</script>

<style>
</style>
