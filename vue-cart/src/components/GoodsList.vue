<template>
  <ul>
    <li v-for="item in goodsList" :key="item.id">
      <span style="margin-right: 20px;">{{item.goodsName}}</span>
      <span>￥{{item.price}}</span>
      <br>
      <button
        @click="addToCart(item.id)"
        :disabled="item.inventory <= cart.cartQuantityById[item.id]"
      >add to cart</button>
      <br>
    </li>
  </ul>
</template>

<script>
export default {
  name: "goodslist",
  props: ["goodsList", "cart"],
  methods: {
    addToCart(id) {
      this.$emit("addToCart", id);
    }
  }
};
</script>

<style>
</style>
