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
      <ul>
        <transition-group name="list" appear>
          <li v-for="user in users" :key="user.id">
            {{user.username}}
            <button @click="del(user.id)">删除</button>
          </li>
        </transition-group>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
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
        this.users.push({
          id: new Date().getTime(),
          username: val
        });
        this.val = "";
      }
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

.list-enter-active,
.list-leave-active {
  transition: all 2s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
}
</style>
