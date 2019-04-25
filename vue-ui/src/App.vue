<template>
  <div>
    <el-button>默认按钮</el-button>
    <el-progress :text-inside="true" :stroke-width="18" :percentage="percent"></el-progress>
    <button @click="handleClick">按钮</button>
    <Test>展示app的字</Test>
  </div>
</template>

<script>
import Test from "./components/Test";
export default {
  name: "app",
  data() {
    return {
      percent: 0
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
    }
  }
};
</script>
<style>
</style>
