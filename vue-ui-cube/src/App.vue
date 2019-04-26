<template>
  <div>
    <cube-button style="width: 100px">Button</cube-button>
    <cube-button @click="add" style="width: 100px">更新 picker</cube-button>
    <cube-button @click="showPicker">Picker</cube-button>
    <div class="swipe-wrapper">
      <cube-scroll>
        <cube-swipe
          @item-click="onItemClick"
          @btn-click="onBtnClick"
          :data="swipeData"
          :autoShrink="true"
        ></cube-swipe>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      heros: [{ title: "1" }, { title: "2" }, { title: "3" }],
      lists: [
        {
          id: "123",
          body: "吃饭了吗"
        },
        {
          id: "456",
          body: "在吗"
        },
        {
          id: "789",
          body: "嗯"
        }
      ]
    };
  },
  computed: {
    swipeData() {
      return this.lists.map(list => {
        return {
          item: {
            text: list.body,
            value: list.id
          },
          btns: [
            {
              action: "clear",
              text: "取消",
              color: "#c8c7cd"
            },
            {
              action: "delete",
              text: "删除",
              color: "#ff3a32"
            }
          ]
        };
      });
    }
  },
  created() {
    this.picker = this.$createPicker({
      title: "picker",
      data: [this.heros],
      alias: {
        text: "title",
        value: "title"
      },
      onSelect: this.selectHandle
    });
  },
  methods: {
    showPicker() {
      //
      // if (!this.picker) {
      // }
      this.picker.show();
    },
    selectHandle(a) {
      // selectHandle 函数默认接受三个参数  1.选择到的 value 值   2. 索引   3. text 值
      console.log(a);
    },
    add() {
      this.picker.$updateProps({
        title: "xxx"
      });
    },
    onItemClick(item) {
      console.log("click item:", item);
    },
    onBtnClick(btn, index) {
      if (btn.action === "delete") {
        this.lists.splice(index, 1);
        // this.$createActionSheet({
        //   title: "确认要删除吗",
        //   active: 0,
        //   data: [{ content: "删除" }],
        //   onSelect: () => {
        //   }
        // }).show();
      }
    }
  }
};
</script>

<style>
</style>
