<template>
  <div>
    <CommentForm @addComment="addComment"/>
    <CommentList :comments="comments" @delComment="delComment"/>
  </div>
</template>

<script>
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
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
      ]
    };
  },
  components: {
    CommentForm,
    CommentList
  },
  methods: {
    addComment(val) {
      // 页面添加一条评论，修改 comments 数组
      // console.log(new Date().getTime());
      this.comments.unshift({
        // date  日期    格林威治时间
        id: new Date().getTime(),
        text: val
      });
    },
    delComment(id) {
      // 页面删除一条评论，修改 comments 数组
      // splice(a,b,c)
      // 最好这种添加删除的操作要找到具体某一个元素的时候使用 id 最合适
      // console.log(index);
      // this.comments.splice(index, 1);
      // console.log(id);
      // filter 生成新的数组  xxx
      this.comments = this.comments.filter(comment => comment.id != id);
      // this.comments = this.comments.reduce((newArr, comment) => {
      //   if (comment.id != id) {
      //     newArr.push(comment);
      //   }
      //   return newArr;
      // }, []);
      // indexOf 只能针对非对象数组
    }
  }
};
</script>

<style>
</style>
