<template>
  <div>
    <ul>
      <li v-for="item in cart.cartListId" :key="item">
        <span>{{goodsList.find(goods => goods.id === item ).goodsName}}</span>
      </li>
    </ul>
    <p>total:0</p>
  </div>
</template>

<script>
export default {
  name: "cart",
  props: ["goodsList", "cart"]
};
</script>

<style>
</style>
