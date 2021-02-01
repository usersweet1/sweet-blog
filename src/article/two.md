#配置路由
1.安装 ...npm install vue-router --save-dev

2.main.js 配置路由

遇到个报错 [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
解决办法是将main.js中的代码修改成 new Vue({
  router,
  render: h => h(App)
}).$mount("#app")

配置路由必须两个地方都写上 ..import Article from './components/Article.vue'.. 

..routes:[]..