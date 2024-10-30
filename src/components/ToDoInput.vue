<template>
  <div class="inputBox">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addToDo"/>
    <button class="addContainer" v-on:click="addToDo"><i class="fas fa-plus addBtn"></i></button>
  </div>
</template>

<script>
export default {
  data:function(){
    return{
      //인풋에 입력되는 데이터
      newTodoItem:''
    }
  },
  methods:{
    addToDo:function(){
      //입력된 것이 없으면 동작하지 않음
      if(this.newTodoItem != ''){
        //app.vue 에서 정의 한 이벤트 발생
        this.$emit('addToDoItem',this.newTodoItem);
        //인풋 초기화
        this.clearInput();
      }
    },
    clearInput:function(){
      this.newTodoItem = '';
    }
  }
};
</script>

<style scoped>
input:focus{outline: none;}
.inputBox{background:#fff; height: 50px;line-height: 50px;border-radius: 5px;}
.inputBox input{border-style: none; font-size: 0.9rem;height: 50px;line-height: 50px;}
.addContainer{float: right;background:linear-gradient(to right, #6478fb,#8763fb);display: block;width: 3rem;border-radius: 0 5px 5px 0;border: 0;padding: 0;}
.addBtn{color:#fff; vertical-align: middle;font-size: 1.5rem;line-height: 50px;cursor: pointer;}
.addBtn i{border: 0;padding: 0;}
</style>