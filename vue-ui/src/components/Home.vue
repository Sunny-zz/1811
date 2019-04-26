<template>
  <div class="wrap">
    <el-button>默认按钮</el-button>
    <el-progress :text-inside="true" :stroke-width="18" :percentage="percent"></el-progress>
    <button @click="handleClick">按钮</button>
    <Test>展示app的字</Test>
    <i class="el-icon-edit"></i>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <el-switch v-model="value1" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    <span v-if="value1">年付</span>
    <span v-else>月付</span>
    <el-pagination
      background
      layout="prev,pager, next ,jumper"
      :total="150"
      :page-size="15"
      :current-page="1"
      @current-change="changePage"
    ></el-pagination>
    <!-- 点击某一个的时候 必须得知道 点的是第几页，而且点击页码的时候做一些事情 -->
    <el-carousel
      :interval="4000"
      type="card"
      height="200px"
      style="width:1000px"
      :autoplay="false"
      trigger="click"
    >
      <el-carousel-item v-for="item in 10" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <h3>hello</h3>
  </div>
</template>

<script>
import Test from "./Test";
export default {
  name: "home",
  data() {
    return {
      percent: 0,
      value1: true
    };
  },
  components: {
    Test
  },
  created() {
    // 如何在 vue 的组件中设置一个全局(该组件)的变量
    // 直接  this.xxx = xxx
    this.changePercent = setInterval(() => {
      console.log("1");
      if (this.percent < 50) {
        this.percent++;
      } else {
        // 停止定时器
        clearInterval(this.changePercent);
      }
    }, 10);
  },
  methods: {
    handleClick() {
      // 停止定时器
      clearInterval(this.changePercent);
    },
    changePage(val) {
      console.log("点了页码" + val);
      // 根据页码发请求获取数据更新页面
    }
  }
};
/* 在 vue 的项目中使用 sass */
// 1. 安装 sass-loader  node-sass    npm i sass-loader  node-sass -D
/* 在 style 标签内写上一个属性  */
</script>


<style lang="scss" scoped>
// scoped 样式变成局部的  给当前组建的所有标签都加上 data-v-xxx 属性 样式写成 h3[data-v-xxx]
@import "../assets/color.scss";

.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: teal;
  color: pink;
}
.el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: brown;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: $color;
}
h3 {
  color: red;
  &:hover {
    color: blue;
  }
}
</style>



