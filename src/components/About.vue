<template>

  <div id="About">
    <HelloWorld msg="About" p="A good medicine tastes bitter."/>
    <div class="container">
      <div class="content">
          <h3>关于博主</h3>
          <p>小仙女，计算机科学与技术专业。XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
          <h3>联系博主</h3>
          <p>微博：听听起床啦</p>
      </div>
    </div>
  </div>

</template>

<script>
import HelloWorld from './HelloWorld.vue'

export default {
  name: 'About',
  components: {
    HelloWorld
  }
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
.container{
    height: 400px;
    width:750px;
    text-align: left;
    margin: 20px auto;
}
h3{
    color:#656565;
}
.container p{
    color: #000;
    margin: 10px 40px 40px;
    width: 600PX;
    display: inline-block;
    word-wrap:break-word;
    line-height: 30px;
}
</style>
