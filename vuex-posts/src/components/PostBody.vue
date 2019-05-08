<template>
  <div>
    <h2>{{post.title}}</h2>
    <p>{{post.body}}</p>
  </div>
</template>

<script>
export default {
  name: "postbody",
  props: ["post"]
};
</script>

<style>
</style>
