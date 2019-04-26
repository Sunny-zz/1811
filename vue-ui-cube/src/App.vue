<template>
  <div>
    <cube-button style="width: 100px">Button</cube-button>
    <cube-button @click="showPicker">Picker</cube-button>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      heros: [{ text: "1" }, { text: "2" }, { text: "3" }]
    };
  },
  created() {
    this.picker = this.$createPicker({
      title: "Picker",
      data: [this.heros]
    });
  },
  methods: {
    showPicker() {
      //
      // if (!this.picker) {
      // }
      this.picker.show();
    }
  }
};
</script>

<style>
</style>
