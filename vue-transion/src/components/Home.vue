<template>
  <div>
    <button @click="show=!show">toggle</button>
    <!-- appear 初始渲染的时候就执行一次动画   -->
    <transition name="fade" appear>
      <p class="test" v-show="show">hello</p>
    </transition>
    <div>
      <input type="text" v-model="val">
      <button @click="add">添加</button>
      <button @click="del">删除</button>
      <button @click="shuffle">随机打乱</button>

      <!-- transition  以及 transition-group 组件 vue 本身自带的动画组件 -->
      <!-- 1. transition 不会渲染成标签 -->
      <!-- 2. transition-group 会默认渲染成 span 标签  使用 tag 属性更改-->
      <transition-group name="list" appear tag="ul">
        <li class="list-item" v-for="user in users" :key="user.id">{{user.username}}</li>
      </transition-group>
    </div>
  </div>
</template>

<script>
// 已知一个数组，将其顺序打乱
// const arr = [1, 2, 3, 4, 5];
// let newArr = [];
// // 0 1 2 3 4
// for (let index = 0; index < arr.length; index++) {
//   const num = Math.floor(Math.random() * arr.length);
//   const val = arr[num];
//   newArr.push(val);
//   index--;
//   arr.splice(num, 1);
//   console.log(val);
// }
// console.log(newArr);
import _ from "lodash";
export default {
  name: "home",
  data() {
    return {
      show: true,
      val: "",
      users: [
        {
          id: "12",
          username: "小花儿"
        },
        {
          id: "34",
          username: "小黑"
        }
      ]
    };
  },
  methods: {
    add() {
      const val = this.val;
      if (val.trim()) {
        this.users.splice(this.randomIndex(), 0, {
          id: new Date().getTime(),
          username: val
        });
        this.val = "";
      }
    },
    del() {
      // this.users = this.users.filter(user => user.id != id);
      this.users.splice(this.randomIndex() - 1, 1);
    },
    randomIndex() {
      return Math.floor(Math.random() * (this.users.length + 1));
    },
    shuffle() {
      this.users = _.shuffle(this.users);
    }
  }
};
</script>

<style>
/* .fade-enter-active, .fade-leave-active   设置进入离开时的过渡效果*/
/* .fade-enter 进入开始类名*/
/* .fade-leave-to 离开结束的类名 */
/* 进入结束以及离开开始都是默认的样式 */
.test {
  /* margin-left: 200px; */
  width: 100px;
  text-align: center;
  font-size: 30px;
}
/* .fade-enter-active,
.fade-leave-active {
  transition: all 1.5s;
}

.fade-leave-to,
.fade-enter {
  transform: scale(0.01) rotate(3600deg);
  opacity: 0;
} */
.fade-leave-active {
  animation: bounce 0.5s;
}
.fade-enter-active {
  animation: bounce 0.5s reverse;
}
@keyframes bounce {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}

/* .list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
} */
.list-item {
  transition: all 1s;
  /* display: inline-block; */
  /* margin-right: 20px; */
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  /* transform: translateY(30px); */
}
.list-leave-active {
  position: absolute;
}
</style>
