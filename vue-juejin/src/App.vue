<template>
  <div>
    <Header/>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
.content {
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;
  margin: 50px auto;
}
</style>
