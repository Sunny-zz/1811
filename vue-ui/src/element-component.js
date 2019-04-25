// 专门用来引入 element 组件
import Vue from "vue"
import { Button, Progress } from "element-ui"
Vue.component(Button.name, Button)
Vue.component(Progress.name, Progress)
