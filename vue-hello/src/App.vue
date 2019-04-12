<template>
  <div class="wrap">
    <h1>hello world</h1>
    <img src="https://vuejs.bootcss.com/images/logo.png" alt>
    <a href="http://baidu.com">百度</a>
    <HelloWorld/>
  </div>
</template>
<script>
// .vue 组件  组件名字首字母必须大写  也有这种写法 comment-list(评论列表组件)
// 组件的组成
// 1. template 模版(html标签和我们之前的有点点区别)   这里面这能容纳一个子元素
// 错误 Errors compiling template  编译 template 失败
// 2. script  每一个组件必须默认导出一个对象，导出的对象下可以对该组件进行一些设置。而且导出的对象向下，需要有一个 name 属性属性值一般都是小写的组件名
// 3. style 样式 可以做一系列的设置
// sass  less
// 所有其他的组件都是需要直接或间接的引入到 App.vue 内
// 新建一个 HelloWorld 组件，引入到 App.vue 并展示到页面
// 一般来说其他的组件都新建到 components 文件夹下
// 一个组件内如何引入另外一个组件
// 1. 在父组件的 script 内使用 import 引入子组件 后缀名可以省略
// 2. 在父组件的导出对象内添加一个 components 属性,属性值是一个对象,对象内写上引入的子组件
// 3. 在父组件的 template 内直接使用 <组件名 /> 就可以展示了
// 所有样式都是全局的 因为我们只有一个页面
import HelloWorld from "./components/HelloWorld";
export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
.wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.wrap img {
  width: 100px;
}
</style>


