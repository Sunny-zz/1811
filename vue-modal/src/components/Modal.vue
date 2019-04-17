<template>
  <div class="modal-warp">
    <button @click="open">处理</button>
    <div class="modal-cover" v-show="show" @click="close">
      <!-- 可以使用事件修饰符  .stop 阻止事件冒泡(写到弹窗元素上)  也可以使用 .self(写到最大盒蒙层上) 该事件只是点击了事件绑定元素本体才出发 -->
      <div class="modal" @click.stop>
        <div class="modal-header">
          <h3>{{title}}</h3>
          <span @click="close">X</span>
        </div>
        <div class="modal-content">
          <p>{{content[0]}}</p>
          <p>{{content[1]}}</p>
          <p>{{content[2]}}</p>
        </div>
        <div class="modal-btn">
          <button @click="cancle">取消</button>
          <button @click="confirm">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  data() {
    return {
      show: false
    };
  },
  props: {
    title: {
      type: String,
      default: "title"
    },
    content: {
      type: Array,
      default: ["Some contents...", "Some contents...", "Some contents..."]
    },
    cancleEvent: {
      type: Function,
      required: true
    },
    clickEvent: {
      type: Function,
      required: true
    }
  },
  methods: {
    close() {
      this.show = false;
    },
    open() {
      this.show = true;
    },
    cancle() {
      this.cancleEvent();
      this.close();
    }
  }
};
</script>

<style>
/* .modal-wrap > button{

  } */
.modal-cover {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal {
  /* position 定位的参照 子元素写了 absolute 找最近的 祖先级 position 参照 */
  position: absolute;
  width: 500px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 8px;
  left: 50%;
  margin-left: -250px;
  top: 10%;
  display: flex;
  flex-direction: column;
}
.modal .modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;
}
.modal .modal-header h3 {
  margin: 0;
}
.modal .modal-header span {
  cursor: pointer;
  padding: 4px;
}
.modal .modal-content {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;
}
.modal .modal-content p {
  margin: 6px 0;
}
.modal .modal-btn {
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
}
.modal .modal-btn button {
  cursor: pointer;
}
.modal .modal-btn button:first-child {
  margin-right: 8px;
}
</style>
