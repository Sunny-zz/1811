<template>
  <div>
    <!-- input事件 意思是只要内容发生变化就会触发 -->
    <!-- change事件 意思是失去焦点就会触发 -->
    <!-- <input type="text" :value="inputValue" @input="handleInput"> -->
    <!-- v-model 指令的修饰符 -->
    <!-- .lazy 修饰符 将事件类型从 input 替换成 change  意思就是更新 data 失去焦点的时候才更新-->
    <!-- .trim 修饰符 将字符串左右的空白符删除-->
    <!-- .number  -->
    <input type="number" name id>
    <input type="text" v-model.trim="inputValue">
    <p>{{inputValue}}</p>
    <br>
    <br>
    <textarea v-model="textAreaVal"></textarea>
    <br>
    <br>
    <div class="fruit">
      <p>你喜欢吃的水果?（可多选）</p>
      <input type="text">
      <label for="apple">苹果</label>
      <input type="checkbox" id="apple" value="apple" v-model="checkedNames">
      <label for="youzi">柚子</label>
      <input type="checkbox" id="youzi" value="youzi" v-model="checkedNames">
      <label for="liulian">榴莲</label>
      <input type="checkbox" id="liulian" value="liulian" v-model="checkedNames">
      <p>{{checkedNames}}</p>
    </div>
    <div id="radio-demo">
      <input type="radio" id="one" value="male" v-model="picked">
      <label for="one">男</label>
      <br>
      <input type="radio" id="two" value="female" v-model="picked">
      <label for="two">女</label>
      <br>
      <span>Picked: {{ picked }}</span>
    </div>
    <div id="select-demo">
      <select v-model="selected">
        <option disabled value>请选择</option>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>
    <input type="text" @change="test">
  </div>
</template>

<script>
// vue 的表单
export default {
  name: "app",
  data() {
    return {
      inputValue: "123",
      textAreaVal: "",
      checkedNames: ["liulian"],
      picked: "male",
      selected: "b"
    };
  },
  methods: {
    // handleInput(event) {
    //   // $(this).val()   this.value
    //   this.inputValue = event.target.value;
    // }
    test() {
      console.log("1");
    }
  }
};
</script>

<style>
.fruit label {
  user-select: none;
}
</style>
