<template>
  <ul>
    <li v-for="item in goodsList" :key="item.id">
      <span style="margin-right: 20px;">{{item.goodsName}}</span>
      <span>￥{{item.price}}</span>
      <br>
      <button>add to cart</button>
      <br>
    </li>
  </ul>
</template>

<script>
export default {
  name: "goodslist",
  props: ["goodsList"]
};
</script>

<style>
</style>
