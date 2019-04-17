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
      @close="close"
    >
      <p class="xxx">xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <p>xxx</p>
      <template #mid-title>
        <span>xxx</span>
      </template>
    </Modal>
  </div>
</template>

<script>
// 两个兄弟组件进行交互的话，将 data 提升到父组件内，使用 prop 传递个两个兄弟，如何修改 data
// 子组件修改父组件的 data ,在父组件内定义修改 data 的方法 ,把该方法当作 prop 传递给子组件执行
// 修改的data 的函数也可以使用 $emit 方案传递接收
// 1. 在父组件内 使用 v-on 指令传递 函数
// 2. 子组件内直接使用 $emit('名') 接收并使用
//  子组件内使用 $emit
// templete 中写法: $emit('名')
// js中 写法: this.$emit('名')
// 当我们想要传递给组件一些结构(标签) 让他展示，需要在父组件内使用子组件的时候，将这些结构写在两个组件名标签内，子组件内部使用 <slot></slot> 接收并使用
// slot 有两种使用方式
// 1.无名插槽
// 上述方式就属于无名插槽
// 2.具名插槽
// // 在父组件内写到 template 标签内并且需要使用 v-slot 指令
// 例如: <template v-slot:mid-title>
//         <span>xxx</span>
//       </template>
// 可以简写成 #mid-title
// 在子组件内使用 <slot name='mid-title'></slot>
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
