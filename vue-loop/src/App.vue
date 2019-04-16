<template>
  <div class="show">
    <div class="pics">
      <img
        v-for="(pic,index) in pics"
        :class="ind===index ? 'show-img' : ''"
        :src="pic.imgSrc"
        :key="pic.id"
        alt
      >
    </div>
    <ul class="list">
      <li
        @mouseenter="changeImg(index)"
        v-for="(pic,index) in pics"
        :class="ind===index ? 'active' : ''"
        :key="pic.id"
      ></li>
    </ul>
    <div @click="prev" class="prev"><</div>
    <div @click="next" class="next">></div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      pics: [
        {
          id: 1,
          imgSrc:
            "https://img1.360buyimg.com/da/jfs/t1/26933/21/15251/101018/5cae9e2fEb2d18145/ce92ccee53fc3e62.jpg"
        },
        {
          id: 2,
          imgSrc:
            "https://img1.360buyimg.com/pop/jfs/t1/28168/27/14838/87189/5cab2642Ec339255f/4dfce26de1f22e54.jpg"
        },
        {
          id: 3,
          imgSrc:
            "https://m.360buyimg.com/babel/jfs/t1/34816/19/1708/82901/5cb3ff03Eba539dd1/377757cd4972c9c9.jpg"
        },
        {
          id: 4,
          imgSrc:
            "https://m.360buyimg.com/babel/jfs/t1/15891/2/15647/53256/5cb06119Ea4832411/487ead610f7e57f4.jpg"
        }
      ],
      ind: 0
    };
  },
  methods: {
    changeImg(index) {
      this.ind = index;
    },
    next() {
      this.ind++;
      if (this.ind === this.pics.length) {
        this.ind = 0;
      }
    },
    prev() {
      this.ind--;
      if (this.ind === -1) {
        this.ind = this.pics.length - 1;
      }
    }
  }
};
</script>

<style>
.show {
  width: 590px;
  height: 470px;
  margin: 50px auto;
  position: relative;
}
.show > .pics > img {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 0.5s;
}
.show > .pics > .show-img {
  z-index: 1;
  opacity: 1;
}
.show > .list {
  list-style: none;
  position: absolute;
  bottom: 30px;
  left: 80px;
  z-index: 2;
  display: flex;
}
.show > .list > li {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 3px solid rgba(218, 215, 215, 0.5);
  margin-right: 10px;
  cursor: pointer;
}
.show > .list > .active {
  background-color: #fff;
  border: 3px solid #fff;
  box-shadow: 0 0 0 4px rgba(226, 221, 221, 0.5);
}
.show > .next,
.show > .prev {
  width: 40px;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 50%;
  margin-top: -40px;
  z-index: 2;
  text-align: center;
  line-height: 80px;
  color: #fff;
  cursor: pointer;
}
.show > .next {
  right: 0;
}
.show > .prev {
  left: 0;
}
</style>
