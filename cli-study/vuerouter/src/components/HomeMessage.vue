<template>
  <div class="hello">
    <ul>
      <li>news 1</li>
      <li>news 2</li>
      <li>news 3</li>
      <li>news 4</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeMessage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
