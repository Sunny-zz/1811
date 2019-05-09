<template>
  <div>
    <span>{{activeTodoNum}} item{{activeTodoNum === 1? "": "s"}} left</span>
    <button @click="changeType('all')">all</button>
    <button @click="changeType('active')">active</button>
    <button @click="changeType('completed')">completed</button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "todofoot",
  methods: {
    ...mapMutations(["changeType"])
  },
  computed: {
    ...mapGetters(["activeTodoNum"])
  }
};
</script>

<style>
</style>
