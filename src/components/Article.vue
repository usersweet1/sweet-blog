<template>

  <div id="Article">
    
    <HelloWorld msg="sweet-article" p="No weal without woe."/>
    <my-markdown></my-markdown>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
export default {
  name: 'Article',
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
</style>
