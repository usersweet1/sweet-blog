<template>

  <div id="Article">
    
    <HelloWorld msg="sweet-article" p="No weal without woe."/>
    <div class="router">
       <router-view></router-view>
    </div>
    <div class="list" v-if=isArticleList>
      <div class="title">
        <a href="./Article/one">学习前端的漫漫长路（一）</a>
      </div>
      <div class="title">
        <a href="./Article/two">学习前端的漫漫长路（二）</a>
      </div>
      <div class="title">
        <a href="./Article/three">学习前端的漫漫长路（三）</a>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
export default {
  name: 'Article',
  components: {
    HelloWorld
  },
  computed: {
    isArticleList: function () {
      return this.$route.path === '/Article'
    }
  }
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
}
a{
  color:#404040;
  text-decoration:none;
}
.router{
    width:750px;
    text-align: left;
    margin: 30px auto;
}
.list{
    height: 400px;
    width:750px;
    text-align: left;
    margin: 30px auto;
}
.title{
  border-top: 1px solid #AFB0B2;
  height: 60px;
}
.title a{
  display: block;
  margin: 20px 2px;
  height: 30px;
}
</style>
