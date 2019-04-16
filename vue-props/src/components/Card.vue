<template>
  <div class="card">
    <img :src="imgSrc" alt>
    <h3 :style="{color: titleColor}">{{title}}</h3>
    <p :style="{color: descriptionColor}">{{description}}</p>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: "Europe Street beat"
    },
    description: {
      type: String,
      default: "www.instagram.com"
    },
    titleColor: {
      type: String,
      default: "black"
    },
    descriptionColor: {
      type: String,
      default: "#ccc"
    }
  }
};
</script>

<style>
.card {
  border: 1px solid #ccc;
  text-align: center;
  transition: box-shadow 0.3s;
}
.card:hover {
  box-shadow: 0 1px 5px 1px #ccc;
}
.card > img {
  width: 100%;
  display: block;
}
.card h3 {
  font-size: 16px;
  margin: 0;
  margin-bottom: 8px;
}
.card p {
  font-size: 14px;
  margin: 0;
  margin-bottom: 8px;
}
</style>
