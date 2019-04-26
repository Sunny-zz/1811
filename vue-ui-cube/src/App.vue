<template>
  <div>
    <cube-button style="width: 100px">Button</cube-button>
    <cube-button @click="add" style="width: 100px">更新 picker</cube-button>
    <cube-button @click="showPicker">Picker</cube-button>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      heros: [{ title: "1" }, { title: "2" }, { title: "3" }]
    };
  },
  created() {
    this.picker = this.$createPicker({
      title: "picker",
      data: [this.heros],
      alias: {
        text: "title",
        value: "title"
      },
      onSelect: this.selectHandle
    });
  },
  methods: {
    showPicker() {
      //
      // if (!this.picker) {
      // }
      this.picker.show();
    },
    selectHandle(a) {
      // selectHandle 函数默认接受三个参数  1.选择到的 value 值   2. 索引   3. text 值
      console.log(a);
    },
    add() {
      this.picker.$updateProps({
        title: "xxx"
      });
    }
  }
};
</script>

<style>
</style>
