<template>
  <div>
    <h1 class="test">评论 Demo</h1>
    <CommentForm @addComment="addComment"/>
    <div v-if="!comments">请稍等...</div>
    <CommentList v-else :comments="comments" @delComment="delComment"/>
  </div>
</template>

<script>
// 插件  shortId
// 模块的导入
// 第三方模块导入方式
// import xxx from "模块名";
// 自定义模块 引入方式
// import 名  from '地址'

// 模块的导入方式有两种
// 第一种 默认导入  名字随便定义
// import xxx from "模块";
// 第二种 命名导入  名字必须和导出的一样
// import { 名 } from "module";

import shortId from "shortid";
import axios from "axios";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
export default {
  name: "app",
  data() {
    return {
      // 该数据需要刷新页面的时候就和服务器做交互，获取数据再展示
      // 组件的生命周期函数   渲染阶段  更新阶段(数据变化)  销毁
      // 从组件在页面渲染到销毁的过程
      // 现在我们的需求: 页面中出现这个组件的时候就会获取数据
      // null 代表的是请求未结束的 comments 的值 不写成 空数组，空数组判断不出来是否请求结束。
      // 请求结束之后 comments 肯定变成了 数组
      // 使用 该值是否是 数组或者 null 来区分请求是否结束
      comments: null
    };
  },
  beforeCreate() {
    // 标签什么的再页面中都没有内
    console.log("我是生命周期函数 beforeCreate 我在该组件要出现在页面前触发");
  },
  created() {
    // 这个生命周期内就可以更新 data 了
    // 发送请求获取数据更新 data
    // axios.get("地址").then(function(res) {成功的回调  res 代表请求的结果}).catch(function(err){失败的回调 err失败的消息})
    axios.get("http://localhost:3008/comments").then(res => {
      // console.log(res.data);
      setTimeout(() => {
        this.comments = res.data;
      }, 1000);
    });
    console.log(
      "我是生命周期函数 created 我是组件处理完虚拟 dom 以及组件的 data 之后执行的"
    );
  },
  beforeMount() {
    console.log("我是生命周期函数 beforeMount ");
  },
  mounted() {
    // 获取该组件内的真实 dom  原生dom结构  使用 jq 做一些事情
    console.log("我是生命周期函数 mounted 组件中的结构完全在浏览器中展示");
  },
  beforeUpdate() {
    // 进行判断阻止更新
    console.log("我是生命周期函数 beforeUpdate 组件更新数据的时候触发");
  },
  updated() {
    console.log("我是生命周期函数 updated 组件更新数据完毕的时候触发");
  },
  components: {
    CommentForm,
    CommentList
  },
  methods: {
    addComment(val) {
      // 页面添加一条评论，修改 comments 数组
      // console.log(new Date().getTime());
      // date  日期    格林威治时间

      // 添加评论
      // 1. 先更新网上的 请求
      // 2. 更新本地的 使用请求成功回来的数据更新本地   请求成功
      // 3. 删除输入框   请求成功
      console.log();
      if (val.trim()) {
        this.comments.unshift({
          id: shortId(),
          text: val
        });
      }
    },
    delComment(id) {
      // 页面删除一条评论，修改 comments 数组
      // splice(a,b,c)
      // 最好这种添加删除的操作要找到具体某一个元素的时候使用 id 最合适
      // console.log(index);
      // this.comments.splice(index, 1);
      // console.log(id);
      // filter 生成新的数组  xxx
      // 添加评论
      // 1. 先更新网上的 请求   axios.delete('地址/id')
      // 2. 更新本地的    请求成功
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
