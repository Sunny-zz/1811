## 错误提示

```
Invalid component name: "realheader,section,footer". Component names should conform to valid custom element name in html5 specification
// 组件名称无效
```

```
Do not use built-in or reserved HTML elements as component id: nav
// 组件的 name 有问题
```

```
vue.runtime.esm.js?2b0e:619 [Vue warn]: Failed to mount component: template or render function not defined.

found in

---> <ReadMore> at src/components/ReadMore.vue
<Readmore> at src/components/SectionLeftTop.vue
<Sectionlefttop,sectionleftbottom> at src/components/SectionLeft.vue
<Sectionleft,sectionright> at src/components/SectionInner.vue
<Sectioninner> at src/components/Section.vue
<Realheader,section,footer> at src/components/Real.vue
<App> at src/App.vue
<Root>
// 组件未导出或者没有 complete
```

```
./src/components/Header.vue?vue&type=script&lang=js& (./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Header.vue?vue&type=script&lang=js&)
Module not found: Error: Can't resolve '../src/assets/2.png' in 'C:\Users\lenovo\Desktop\4.12\veu\vue-hello\src\components'
//文件路径错误
```
