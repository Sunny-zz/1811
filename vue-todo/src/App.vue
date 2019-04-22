<template>
  <div>
    <h1>Todo</h1>
    <TodoHead @addTodo="addTodo"/>
    <!-- <TodoList
      @changeCompleted="changeCompleted"
      @deleteTodo="deleteTodo"
      :todos="todos"
      :filterType="filterType"
    />-->

    <TodoFooter
      :todos="todos"
      @changeFilterType="changeFilterType"
      @clearCompleted="clearCompleted"
    />
  </div>
</template>
<script>
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
export default {
  name: "app",
  components: {
    TodoHead,
    TodoList,
    TodoFooter
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          todo: 345,
          completed: false
        },
        {
          id: 2,
          todo: 12,
          completed: true
        },
        {
          id: 3,
          todo: 67,
          completed: false
        }
      ],
      filterType: "all"
    };
  },
  methods: {
    addTodo(todo, callBack) {
      if (todo.trim()) {
        const newTodo = {
          id: new Date().getTime(),
          todo,
          completed: false
        };
        this.todos.push(newTodo);
        callBack();
      }
    },
    changeCompleted(id) {
      // 已知数组内某个对象的一个属性的属性值，如何找到这个对象
      this.todos.find(todo => todo.id === id).completed = !this.todos.find(
        todo => todo.id === id
      ).completed;
      // 我们修改 data:   直接对 data 进行修改
      // 数组的 find 方法找到某一个对象, 和数组内的某个对象指向的是同一个地址,我们更改了 find 方法找到的对象，就相当于修改了数组内的对象，也就相当于修改了数组，那么数据就发生了变化，页面因此改变
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id != id);
    },
    changeFilterType(type) {
      this.filterType = type;
    },
    clearCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed);
    }
  }
};
</script>
