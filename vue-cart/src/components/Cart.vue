<template>
  <div v-if="cart.cartListId.length">
    <ul>
      <li v-for="item in cart.cartListId" :key="item">
        <span>{{goodsList.find(goods => goods.id === item ).goodsName}}</span>
        <span>&nbsp;{{goodsList.find(goods => goods.id === item ).price}}&nbsp;</span>
        <span>&nbsp;&nbsp;x&nbsp;&nbsp;</span>
        <button>-</button>
        <span>{{cart.cartQuantityById[item]}}</span>
        <button>+</button>
      </li>
    </ul>
    <p>total:￥{{total}}</p>
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
  props: ["goodsList", "cart"],
  computed: {
    total() {
      const { cartListId, cartQuantityById } = this.cart;
      // let total = 0;
      // cartListId.forEach(id => {
      //   total =
      //     total +
      //     this.goodsList.find(item => item.id === id).price *
      //       cartQuantityById[id];
      // });
      const total = cartListId.reduce(
        (result, id) =>
          result +
          this.goodsList.find(item => item.id === id).price *
            cartQuantityById[id],
        0
      );
      return total.toFixed(2);
    }
  }
};
</script>

<style>
</style>
