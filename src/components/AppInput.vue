<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo"/>
    <button v-on:click="addTodo"><i class="fas fa-plus"></i></button>
    <span class="addContainer"></span>
  </div>
</template>

<script>
export default {
    data:function(){
        return {
            newTodoItem:''
        }
    },
    methods:{
        addTodo:function(){
            
            localStorage.setItem(this.newTodoItem,this.newTodoItem);
            this.clearInput();
        },
        clearInput:function(){
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
input:focus{outline: none;}
.inputBox{border-radius: 5px;overflow: hidden;border: 1px solid #333;;margin: 0 auto;max-width: 347px;box-sizing: border-box;}
.inputBox input{border: none;font-size: 24px;}
.addContainer{float: right;background: #ddd;display: block;width: 2rem;border-radius: 0 5px 5px 0;;}
.inputBox button{color:#682fa4;vertical-align: middle;border: none;line-height: 45px;width: 45px;}
</style>