
<template>
  <div class="inputBox">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addToDo"/>
    <button class="addContainer " v-on:click="addToDo"><i class="fas fa-plus addBtn"></i></button>
  </div>
</template>

<script>
export default {
    data:function(){
        return{
            newTodoItem:''
        }
    },
    methods:{
        addToDo:function(){
            if(this.newTodoItem != ''){
                this.$emit('addToDoItem',this.newTodoItem);
                this.clearInput();
            }
        },
        clearInput:function(){
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
input:focus{outline: none;}
.inputBox{background:#fff; height: 50px;line-height: 50px;border-radius: 5px;}
.inputBox input{border-style: none; font-size: 0.9rem;height: 50px;line-height: 50px;padding: 0 0.9rem;}
.addContainer{float: right;background:linear-gradient(to right, #6478fb,#8763fb);display: block;width: 3rem;border-radius: 0 5px 5px 0;border: 0;padding: 0;}
.addBtn{color:#fff; vertical-align: middle;font-size: 1.5rem;line-height: 50px;cursor: pointer;}
.addBtn i{border: 0;padding: 0;}
</style>