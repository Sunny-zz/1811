<template>
  <div>
    <h1>hello world11</h1>
    <h2>我是{{ a > 5 ? "小黑" : "小花"}}</h2>
    <span :class=" a < 5 ? 'active' : ''">xxxx</span>
    <br>
    <div>
      <button @click="sub">-</button>
      <span>{{a}}</span>
      <button @click="add">+</button>
    </div>
    <!-- <div :class="color ? 'box bg' : 'box'"></div> -->
    <!-- 看 color 是 true 还是 false  是 true 的话 class='active' -->
    <div :class="{box: true,bg:color}"></div>
    <!-- <div class="box" :style="`background-color:${ color? 'red': 'teal'};`"></div> -->
    <!-- <div class="box" :style="{backgroundColor: color ? 'red' : 'teal'}">123</div> -->
    <button @click="change">颜色切换</button>
    <div>
      <!-- 当 img 为 false 的时候  v-if 的元素出现 -->
      <!-- 对应的  v-else 元素不出现 (必须紧跟着 v-if 元素 基本上是同级关系)-->
      <span v-if="!img">请稍等...</span>
      <span v-else>展示后台的图片</span>
    </div>
    <div>
      <span v-if="num === 1">星期一</span>
      <span v-else-if="num === 2">星期二</span>
      <span v-else>星期三</span>
    </div>
    <div>
      <span v-show="show">我是一会就会出现的图片</span>
    </div>
    <div @click="test">
      <button @click="say('Hi')">sayHi</button>
      <button @click="say('GoodBye')">sayGoodbye</button>
      <!-- 框架内不提倡使用 href='javascript:;' 阻止 a 跳转 -->
      <a href @click="say('Hi',$event)">sayHi</a>
      <button @click.stop="say('stop')">事件修饰符之 .stop</button>
      <input @keydown.enter="userInput" type="text" class="username">
    </div>
    <div>
      <div v-if="users.length === 0">没人啊</div>
      <ul v-else>
        <!-- user in users     users 就是下面的数组数据  遍历数组 users    user代表的是数组内的元素-->
        <!-- 使用列表渲染的时候会提示每一个元素 缺少 key ，给每一个新建的元素加上一个 key 属性,并确保每一个 key 的属性值是唯一的,一般的 key 的值都是 id -->
        <li v-for="( user, index ) in users" :key="user.id">
          {{user.username}}
          <span>{{index}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//  模版语法   vue 的 template 内可以写 js
// 1. 在标签之间使用双花括号   一般写变量或者三目运算符
// 2. 在开始标签内使用js，要使用 v-bind 指令，在引号内写 js(要注意单双引号)
// vue 的指令   v-bind 指令   当一个标签的某个属性需要写js去控制的话 那么这个属性名必须加上 v-bind 指令 该指令可以简写成 : ,之后就可以在属性值的 引号内写 js 了
// 所有指令后的引号内可以直接写 js
// data vue 把跟页面变化相关的数据称作为 data(状态)
// data 写在导出的对象内，作为一个属性，属性值是一个函数，该函数必须返回一个对象，该对象下的属性即为我们要定义的数据
// 作为 vue 的 data 在 templete 可以直接使用
// 对 data 进行操作那么页面对应的部分会自动更新
// 虚拟 dom 结构
// 如何修改 data
// 如何进行事件绑定  直接使用 v-on 指令  简写 @  绑定事件  例如  <button @click="函数名即可">+</button>
// 函数声明哪里  导出的对象下的 methods 属性内，该属性的属性值是一个对象，该对象下的方法就是声明的函数
// 数据在函数内需要使用 this.数据名 获取，前提是该函数不能是 es6 的箭头函数,只能是普通函数
// 如何修改数据呢  重新给数据赋值就是修改
// 条件渲染   页面中的某个元素在不同的条件下有可能存在或不存在
// 1. 针对一些只存在一次的元素来说的， 使用 v-if 指令 如何使用:
// 例如   <span v-if="!img">请稍等...</span>  <span v-else>展示后台的图片</span>
// 2. 根据不同数据反复出现消失， 使用 v-show 指令

// 事件处理   使用 v-on 指令进行事件绑定   一般来说 @ 简写
// 例如:  <button @click='add'>按钮</button> 事件函数定义在导出的对象下的 methods 对象内。
// 事件传参  直接在绑定事件的时候  写成 @click="say(实参)"
// 参数还可以传递一个  $event  代表事件对象 可以根据事件对象获取一些值，或者执行一些操作
// 事件指令的修饰符  加载事件名称后 例如: @click.stop='say()'
// .stop 阻止事件冒泡
// .prevent 阻止默认行为
// .once 事件只执行一次
// .passive 绑定滚动条事件的时候最好加上，提升性能
// 按键修饰符 一般都是键盘事件
// .enter 按了 enter 才触发事件

// 列表渲染  将数组类型的数组展示到页面(展示文章列表，展示评论)
// 使用 v-for 指令 使用方法
// 例如:  <li v-for="user in users" :key="user.id">{{user.username}}</li>

export default {
  name: "app",
  data() {
    return {
      a: 1,
      // 一般两种情况的数据定义成布尔值
      color: true,
      img: true,
      num: 2,
      show: false,
      users: [
        {
          id: 1,
          username: "小张",
          imgSrc: ""
        },
        {
          id: 2,
          username: "小张1"
        },
        {
          id: 3,
          username: "小张2"
        }
      ],
      index: 0
    };
  },
  methods: {
    add() {
      // console.log(this.a);
      this.a += 1;
      // this.a = this.a + 1
      // this.a ++
    },
    sub() {
      if (this.a > 1) {
        this.a -= 1;
      }
    },
    test() {
      console.log("大事件");
    },
    change() {
      this.color = !this.color;
    },
    say(msg, event) {
      if (event) {
        // 因为其他元素点击的时候没有传递 $event 参数，就接收不到那么 event 就不存在
        event.preventDefault();
      }
      alert(msg);
    },
    userInput() {
      console.log("11");
    }
  }
};
</script>

<style>
.active {
  color: aqua;
}
.box {
  width: 100px;
  height: 100px;
  background-color: teal;
}
.bg {
  background-color: red;
  display: flex;
}
</style>
