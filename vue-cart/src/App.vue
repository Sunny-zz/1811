<template>
  <div>
    <h1>vue shopping cart</h1>
    <hr>
    <GoodsList :goodsList="goodsList"/>
    <hr>
    <Cart :goodsList="goodsList" :cart="cart"/>
  </div>
</template>

<script>
import Cart from "./components/Cart";
import GoodsList from "./components/GoodsList";
export default {
  name: "app",
  components: {
    Cart,
    GoodsList
  },
  data() {
    return {
      goodsList: [
        {
          id: "1",
          goodsName: "iphone XX",
          price: 9999.99,
          inventory: 10
        },
        {
          id: "2",
          goodsName: "meta 50",
          price: 999.99,
          inventory: 5
        },
        {
          id: "3",
          goodsName: "oppo X",
          price: 99.99,
          inventory: 12
        }
      ],
      cart: {
        // cartListId 代表的是买了的商品的 id 数组
        // cartQuantityById 对应 id 商品的购买数量
        cartListId: ["2", "1"],
        cartQuantityById: {
          "1": 4,
          "2": 3
        }
      }
    };
  }
};
</script>

<style>
</style>
