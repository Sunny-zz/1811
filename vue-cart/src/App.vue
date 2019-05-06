<template>
  <div>
    <h1>vue shopping cart</h1>
    <h2>测试</h2>
    <p>
      <span v-for="(item,j) in test" :key="j">{{j+item}}</span>
    </p>
    <button @click="$set(test,'name','222')">按钮</button>
    <hr>
    <GoodsList :goodsList="goodsList" @addToCart="addToCart"/>
    <hr>
    <Cart :goodsList="goodsList" :cart="cart"></Cart>
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
      test: {
        title: "111"
      },
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
        cartListId: [],
        cartQuantityById: {}
      }
    };
  },
  methods: {
    addToCart(id) {
      const { cartListId, cartQuantityById } = this.cart;
      // indexOf  includes
      // vue 更新对象的时候，更新已有属性的属性值，虽然能改，但是页面不更新
      if (cartListId.indexOf(id) === -1) {
        cartListId.push(id);
        cartQuantityById[id] = 1;
      } else {
        cartQuantityById[id]++;
        this.cart = {
          cartListId,
          cartQuantityById
        };
      }
    }
  }
};
</script>

<style>
</style>
