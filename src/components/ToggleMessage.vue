<template>
  <div class="hello bangle">
    <p>{{ msg }}</p>
    
    <button id="toggle-message" @click="toggleMessage">
   Change message
  </button>

  </div>
</template>

<script>
export default {
  name: 'ToggleMessage',
  data: () => ({
    msg: 'default message'
  }),
  methods: {
    toggleMessage () {
      this.msg = this.msg === 'message' ? 'toggled message' : 'message'
    }
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
