<template>
  <div>
    <input v-model="val" type="text" @keydown.enter="add">
    <button @click="add">提交todo</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "todoform",
  data() {
    return {
      val: ""
    };
  },
  methods: {
    ...mapMutations(["addTodo"]),
    add() {
      if (this.val.trim()) {
        this.addTodo({
          newTodo: {
            id: new Date().getTime(),
            todo: this.val,
            isCompleted: false
          },
          clear: this.clear
        });
      } else {
        alert("请输入有效字符");
      }
    },
    clear() {
      this.val = "";
    }
  }
};
</script>

<style scoped>
</style>
