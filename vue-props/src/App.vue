<template>
  <div class="wrap">
    <div class="login">
      <!-- 如何传递其他类型的数据 -->
      <!-- 因为正常的页面中写的属性的属性值都是字符串 我们需要使用 指令 v-bind -->
      <Button :clickEvent="login" text="登录" color="red" :isDisabled="false"/>
    </div>
    <div class="signup">
      <Button :clickEvent="signup" text="注册"/>
    </div>
    <!-- width:300px 给的是Card 最外层盒子 -->
    <div class="card-list">
      <Card
        style="width:240px;"
        imgSrc="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
      <Card
        style="width:240px;"
        imgSrc="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        title="哈哈哈哈"
      />
      <Card
        style="width:240px;"
        imgSrc="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
    </div>
  </div>
</template>

<script>
//  props     data
// 登录按钮  注册按钮 显示更多按钮  提交按钮
// vue 的组件可以复用 使用 prop 提高组件的复用性
// prop 如何使用
// 1. 在父组件内使用子组件的时候，可以给子组件传递参数(prop) 例如: <Button text='登录'/>
// 2. 在子组件内负责接收父组件传递过来的参数(prop),需要在导出的对象下写一个props 属性，属性值为数组或对象,数组内写的第传递过来的属性名
// 例如： props: ["text"] 或
// props: {
//   text: {
//     // type 类型
//     type: String,
//     // require 必须传递的属性
//     required: true
//   },
//   color: {
//     type: String,
//     //default 属性的默认值
//     default: "pink"
//   },
//   number: Number,
//   isDisabled: Boolean
// },
// 那么子组件就可以使用该 text 属性了，使用方法和 data 一样
//
//  如何传递其他类型的数据
//  因为正常的页面中写的属性的属性值都是字符串 我们需要使用 指令 v-bind
// prop 的验证
import Button from "./components/Button";
import Card from "./components/Card";
export default {
  name: "app",
  components: {
    Button,
    Card
  },
  methods: {
    login() {
      console.log("登录");
    },
    signup() {
      console.log("注册");
    }
  }
};
</script>

<style>
.card-list {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
</style>
