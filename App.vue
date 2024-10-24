<template>
  <div id="app">
    <ToDoHeader></ToDoHeader>
  </div>
</template>

<script>
import ToDoHeader from './components/ToDoHeader.vue'

export default {
  components: {
    'ToDoHeader':ToDoHeader,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
