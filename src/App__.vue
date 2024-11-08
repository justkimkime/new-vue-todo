<template>
  <div id="app">
    <ToDoHeader></ToDoHeader>
    <!--<ToDoInput v-on:이벤트명="상위 컴포넌트의 메서드명"></ToDoInput>-->
    <ToDoInput v-on:addToDoItem="addOneItem" ></ToDoInput>
    <!--<ToDoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></ToDoList>-->
    <ToDoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></ToDoList>

    <ToDoFooter v-on:clearAll="clearAllItem"></ToDoFooter>
  </div>
</template>

<script>
import ToDoHeader from "./components/ToDoHeader.vue";
import ToDoInput from "./components/ToDoInput.vue";
import ToDoList from "./components/ToDoList.vue";
import ToDoFooter from "./components/ToDoFooter.vue";


export default {
  data:function(){
    return{
      todoItems:[]
    }
  },
  methods:{
    addOneItem:function(TodoItem){
      //오브젝트 형태로 만들기
      const obj = {completed:false,item:TodoItem};
      //로컬스토리지에 추가
      localStorage.setItem(TodoItem,JSON.stringify(obj));
      //배열 끝에 요소 추가
      this.todoItems.push(obj);
    },
    removeOneItem:function(TodoItem,index){
      //로컬스토리지에서 삭제
      localStorage.removeItem(TodoItem.item);
      //배열에서 삭제
      this.todoItems.splice(index,1);
    },
    toggleOneItem:function(TodoItem , index){
      //해당 요소의 completed 를 반대로 변경
      this.todoItems[index].completed = !this.todoItems[index].completed
      //로컬스토리지의 데이터를 갱신, 저장된 값을 지움
      localStorage.removeItem(TodoItem.item);
      //completed가 false일 경우 true로, true일 경우 false로 변경된 채로 다시 추가 (JSON.stringify - 객체를 JSO으로 바꿔줌)
      localStorage.setItem(TodoItem.item, JSON.stringify(TodoItem));
    },
    clearAllItem:function(){
      //로컬스토리지 전체 값 삭제
      localStorage.clear();
      //배열 초기화
      this.todoItems = [];
    }
  },
  created:function(){
    //로컬스토리지에 있는 
      if(localStorage.length > 0){
        for(var i=0;i < localStorage.length; i ++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          //JSON.parse : JSON을 객체로 바꿔줌
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
