<template>
  <div id="main" style="height:400px"></div>
</template>

<script>
// import echarts from 'echarts'
// 1.引入 echarts 主模块
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/bar");
// 引入提示框和标题组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  name: "echartsdemo",
  mounted() {
    // 在页面dom渲染完毕之后初始化一个 echarts 在 #main 中 赋值给组件的全局变量
    this.myChart = echarts.init(document.getElementById("main"));
    // 对图表进行配置
    this.myChart.setOption({
      title: {
        text: "ECharts 入门示例"
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
  }
};
</script>

<style>
</style>
