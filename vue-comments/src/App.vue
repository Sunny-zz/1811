<template>
  <div>
    <h1 class="test">评论 Demo</h1>
    <CommentForm @addComment="addComment"/>
    <div v-if="!comments">请稍等...</div>
    <!-- 使用复制的数组进行颠倒展示  -->
    <!-- 如何复制一个数组 -->
    <!-- 数组的 slice(0) -->
    <!-- 使用 es6 的 扩展运算符 ... -->
    <!-- vue 组件将 template 称作渲染函数，该渲染函数组件出现在页面就会执行，当组件更新 data 的时候也会重新执行跟 data 相关的部分页面,所以我们在 template 中不能对 data 进行修改，如果修改了 -->
    <!-- vue 提倡不需要 template 中对数据进行处理操作,template 中写的就是展示数据 -->
    <!-- 需要针对data生成一个新的展示的数据 vue 提供了一个属性 computed 在导出的对象内,帮助我们处理这类事情  computed 叫做计算属性 -->
    <CommentList v-else :comments="reverseComments" @delComment="delComment"/>
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
// arr 是对象类型

// let arr = [1, 2, 3];
// let arr1 = [...arr];
// arr1.push(4);
// console.log(arr);

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
  computed: {
    // computed 属性是一个对象类型，对象下写的都是方法，每一个方都需要返回值当作计算之后的属性 ，方法函数只能写成普通函数
    // 也就是相当于另一种 data
    reverseComments() {
      return [...this.comments].reverse();
    }
  },
  beforeCreate() {
    // 标签什么的再页面中都没有内
    // console.log("我是生命周期函数 beforeCreate 我在该组件要出现在页面前触发");
  },
  created() {
    // 这个生命周期内就可以更新 data 了
    // 发送请求获取数据更新 data
    // axios.get("地址").then(function(res) {成功的回调  res 代表请求的结果}).catch(function(err){失败的回调 err失败的消息})
    // 获取后台数据时间顺序是时间早的在前面
    // 页面中展示的话需要把最新的数据展示到最前面
    //  reverse 颠倒数组
    // let arr = [1, 2, 3];
    // let newArr = arr.reverse();
    // console.log(arr);
    // console.log(newArr);
    axios.get("http://localhost:3008/comments").then(res => {
      // console.log(res.data);
      setTimeout(() => {
        this.comments = res.data;
      }, 1000);
    });
    // console.log(
    //   "我是生命周期函数 created 我是组件处理完虚拟 dom 以及组件的 data 之后执行的"
    // );
  },
  beforeMount() {
    // console.log("我是生命周期函数 beforeMount ");
  },
  mounted() {
    // 获取该组件内的真实 dom  原生dom结构  使用 jq 做一些事情
    // console.log("我是生命周期函数 mounted 组件中的结构完全在浏览器中展示");
  },
  beforeUpdate() {
    // 进行判断阻止更新
    // console.log("我是生命周期函数 beforeUpdate 组件更新数据的时候触发");
  },
  updated() {
    // console.log("我是生命周期函数 updated 组件更新数据完毕的时候触发");
  },
  components: {
    CommentForm,
    CommentList
  },
  methods: {
    addComment(val, callback) {
      // 页面添加一条评论，修改 comments 数组
      // console.log(new Date().getTime());
      // date  日期    格林威治时间

      // 添加评论
      // 1. 先更新网上的 请求
      // 2. 更新本地的 使用请求成功回来的数据更新本地   请求成功
      // 3. 删除输入框   请求成功
      // console.log();
      if (val.trim()) {
        // this.comments.unshift({
        //   id: shortId(),
        //   text: val
        // });
        axios
          .post("http://localhost:3008/comments", { text: val })
          .then(res => {
            console.log("请求成功");
            this.comments.push(res.data);
            console.log("清空");
            callback();
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
      axios
        .delete(`http://localhost:3008/comments/${id}`)
        .then(res => {
          console.log(res.data);
          this.comments = this.comments.filter(comment => comment.id != id);
        })
        .catch(function() {
          // 请求的地址出错
          console.log("出错了");
        });
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
