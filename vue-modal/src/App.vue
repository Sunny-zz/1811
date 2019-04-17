<template>
  <div>
    <div>假装这有一些需要处理的东西</div>
    <Button :clickEvent="open" text="弹窗"/>
    <Modal
      title="my title"
      :content="['a','b','c']"
      :cancleEvent="cancle"
      :confirmEvent="confirm"
      :show="show"
      :close="close"
    />
  </div>
</template>

<script>
// 两个兄弟组件进行交互的话，将 data 提升到父组件内，使用 prop 传递个两个兄弟，如何修改 data
// 子组件修改父组件的 data ,在父组件内定义修改 data 的方法 ,把该方法当作 prop 传递给子组件执行
import Modal from "./components/Modal";
import Button from "./components/Button";
export default {
  name: "app",
  data() {
    return {
      show: false
    };
  },
  components: {
    Modal,
    Button
  },
  methods: {
    cancle() {
      console.log("取消");
    },
    confirm() {
      console.log("确定");
    },
    open() {
      this.show = true;
      // console.log("sss");
    },
    close() {
      this.show = false;
    }
  }
};
</script>

<style>
</style>
