## Vue 框架

之前使用 jquery 写页面,是直接操作了 dom 去处理页面的交互。vue react 等框架不是直接操作 dom，而是虚拟一个 dom 去操作，然后把最终结果渲染到页面。

### 单页面应用(SPA)

现在一些基础的框架默认都是制作单页面应用的。

### 安装 vue 环境

我们使用的是 vue-cli3 版本搭建 vue 的开发环境

```
  npm i -g @vue/cli
```

工具安装好之后，可以使用该工具搭建 vue 的环境了，使用

```
  vue create vue-hello
```

创建了一个项目叫 vue-hello 里面搭建好了 vue 环境
创建的时候，你会被提示选取一个 preset。

1. default(babel,eslint) 默认
2. Manually select features 自选

我们直接选择第一项，默认就会创建一个 vue-hello 项目，vue 会自动给做好一个 demo，我们自己手动修改一下这个 demo，在页面中展示一个 hello world

src 下有一个 main.js 文件，这个文件是入口文件
