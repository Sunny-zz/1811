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
</script>
<style>
.wrap .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: teal;
  color: pink;
}
.wrap .el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: brown;
}
</style>
