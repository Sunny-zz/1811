<template>
  <div>
    <div>假装这有一些需要处理的东西</div>
    <Modal title="my title" :content="['a','b','c']" :cancleEvent="cancle" :clickEvent="confirm"/>
  </div>
</template>

<script>
import Modal from "./components/Modal";
export default {
  name: "app",

  components: {
    Modal
  },
  methods: {
    cancle() {
      console.log("取消");
    },
    confirm() {
      console.log("确定");
    }
  }
};
</script>

<style>
</style>
