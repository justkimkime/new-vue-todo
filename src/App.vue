<template>
  <div id="app">
    <ToDoHeader></ToDoHeader>
    <ToDoInput v-on:addToDoItem="addOneItem"></ToDoInput>
    <ToDoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></ToDoList>
    <ToDoFooter v-on:clearAll="clearAllItem"></ToDoFooter>
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
      todoItems:[]
    }
  },
  methods:{
    addOneItem:function(TodoItem){
      var obj = {completed:false,item:TodoItem};
      localStorage.setItem(TodoItem,JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem:function(TodoItem,index){
      localStorage.removeItem(TodoItem.item);
      this.todoItems.splice(index,1);
    },
    toggleOneItem:function(TodoItem , index){
      this.todoItems[index].completed = !this.todoItems[index].completed
      //로컬스토리지의 데이터를 갱신
      localStorage.removeItem(TodoItem.item);
      localStorage.setItem(TodoItem.item, JSON.stringify(TodoItem));
    },
    clearAllItem:function(){
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created:function(){
      if(localStorage.length > 0){
        for(var i=0;i < localStorage.length; i ++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
          //this.todoItems.push(localStorage.key(i))
        }
      }
    }
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
