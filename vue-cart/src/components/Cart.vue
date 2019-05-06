<template>
  <div v-if="cart.cartListId.length">
    <ul>
      <li v-for="item in cart.cartListId" :key="item">
        <span>{{goodsList.find(goods => goods.id === item ).goodsName}}</span>
        <span>&nbsp;{{goodsList.find(goods => goods.id === item ).price}}&nbsp;</span>
        <span>&nbsp;&nbsp;x&nbsp;&nbsp;</span>
        <span>{{cart.cartQuantityById[item]}}</span>
      </li>
    </ul>
    <p>total:0</p>
  </div>
  <div v-else>买点吧...</div>
</template>

<script>
// const obj = {
//   name: "zzt"
// };
// const a = "name";
// 这样写 会把 a 作为属性名 并不会把 name 当成属性名解析
// console.log(obj.a);
// console.log(obj[a]);
export default {
  name: "cart",
  props: ["goodsList", "cart"]
};
</script>

<style>
</style>
