<template>
  <div>
    <ul>
      <li class="shadow" v-for="(TodoItem , index) in propsdata" v-bind:key="TodoItem.item">
         <span class="ckeckBtn" v-bind:class="{checkBtnCompleted:TodoItem.completed}" v-on:click="toggleTodo(TodoItem,index)"><i class="fas fa-check"></i></span>
          <p v-bind:class="{textCompleted:TodoItem.completed}">{{TodoItem.item}}</p>
          <button class="removeBtn" v-on:click="removeTodo(TodoItem,index)"><i class="fa-solid fa-trash-can"></i></button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['propsdata'],
  methods:{
    removeTodo:function(TodoItem,index){
      //app.vue 에서 정의 한 이벤트 발생
      this.$emit('removeItem',TodoItem, index);
    },
    toggleTodo:function(TodoItem,index){
      //app.vue 에서 정의 한 이벤트 발생
      this.$emit('toggleItem', TodoItem, index);
    }
  },
  
};
</script>

<style scoped>
ul{list-style:none;padding-left: 0;margin-top: 0;text-align: left;}
li{display: flex;min-height: 50px; height: 50px;line-height: 50px;margin: 0.5rem 0;padding:0 0.9rem;background: #fff;border-radius: 5px;}
li p{margin: 0;;}
.ckeckBtn{line-height: 45px;color:#62acde;margin-right: 15px;}
.checkBtnCompleted{color:#b3adad}
.textCompleted{text-decoration: line-through;color:#b3adad}
.removeBtn{margin-left: auto;color: #de4343;border: 0;background: #fff;}
</style>