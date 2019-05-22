<template>
  <div>
    <!-- <img :src="pic" alt> -->
    <h1>
      <img style="width:200px" src="./assets/timg.jpg" alt>
    </h1>
    <div class="box">第嘉</div>
    <button @click="num--">-</button>
    <span class="hello">{{num}}</span>
    <button @click="num++">+</button>
    <ul>
      <li>
        <router-link to="/">首页ww</router-link>
      </li>
      <li>
        <router-link to="/about">关于ww</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
// import pic from "./assets/timg.jpg";
// 需要安装 url-loader  以及 file-loader
export default {
  name: "app",
  data() {
    return {
      num: 10
      // pic: pic
    };
  },
  created() {
    console.log("111");
  }
};
</script>

<style scoped>
h1 {
}
.box {
  background-image: url("./assets/timg.jpg");
  text-indent: -999999px;
  width: 300px;
  height: 300px;
  border: 1px solid red;
  background-size: cover;
  background-position: center center;
}
</style>
