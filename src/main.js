import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Article from './components/Article.vue'
import Home from './components/Home.vue'
import About from './components/About'

Vue.config.productionTip = false
Vue.use(VueRouter)

//配置路由
const router=new VueRouter({
  routes:[
    {path:"/",component:Home},
    {
      path:"/Article",
      component:Article,
      children:[
        {
        path:"/Article/one",
        component:require('./article/one.md').default,
        }
      ]
    },
    {path:"/About",component:About}
  ],
  mode:"history"
})
new Vue({
  router,
  render: h => h(App)
}).$mount("#app")