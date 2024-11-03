<template>
  <div id="app">
    <ToDoHeader></ToDoHeader>
    <ToDoInput></ToDoInput>
    <ToDoList ></ToDoList>
    <ToDoFooter ></ToDoFooter>
  </div>
</template>

<script>
import ToDoHeader from "./components/ToDoHeader.vue";
import ToDoInput from "./components/ToDoInput_.vue";
import ToDoList from "./components/ToDoList_.vue";
import ToDoFooter from "./components/ToDoFooter_.vue";


export default {
  data:function(){
    return{
    }
  },
  methods:{

  },
  created:function(){

  },
  components: {
    ToDoHeader,
    ToDoInput,
    ToDoList,
    ToDoFooter
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  max-width: 300px;
  margin: 0 auto;
}
body {
  text-align: center;
  background-color: #f6f6f6;
  padding: 60px 0;
}
input {
  border-style: none;
  width: calc(100% - 3rem);
  float: left;
  box-sizing: border-box;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
