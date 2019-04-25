<template>
  <div>
    <el-button>默认按钮</el-button>
    <el-progress :text-inside="true" :stroke-width="18" :percentage="percent"></el-progress>
    <button @click="percent = 50">按钮</button>
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
    setInterval(() => {
      if (this.percent < 50) {
        this.percent++;
      }
    }, 10);
  }
};
</script>
<style>
</style>
