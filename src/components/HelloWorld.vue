<template>
  <div class="hello" :style="{backgroundImage:'url('+picture+')'}">
    
    
    
  <div class="nav">
 
    <ul>
      <li><router-link to="/">home</router-link></li>
      <li><router-link to="/Article">article</router-link></li>
      <li><router-link to="/About">about</router-link></li>

    </ul>
  </div>
  <h1>{{ msg }}</h1>
  <p>
    {{  p  }}
  </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    p: String,
    picture: String
  }

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
}
li {
  display: inline-block;
  margin: 0 20px;
 
}
a {
  font-size: 20px;
  color: #fff;
  text-decoration: none;
}
.hello{
  background-color: #c1cbd7;
  height: 300px;
  width: 100%;

}
h1 {
  font-size: 50px;
  padding-top: 100px;
}
p{
  padding-top: 20px;
}
.nav{
  padding-top: 20px;
  float:right;

}
</style>
