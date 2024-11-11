<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addToDo" />
    <button class="addContainer" v-on:click="addToDo" ><i class="fas fa-plus addBtn"></i></button>
    <!-- app -->
    <div id="app">
      <!-- use the modal component, pass in the prop -->
      <AlertPop v-if="showModal" >
        <h3 slot="header">warning !</h3>
        <p slot="body">내용을 입력해주셈</p>
        <template #footer><i class="fas fa-times closeModalBtn"  @click="showModal = false"></i></template>
      </AlertPop>
    </div>
  </div>
</template>

<script>
import AlertPop from "./common/ModalPop.vue";
export default {
  data(){
    return{
      //인풋에 입력되는 데이터
      newTodoItem:'',
      showModal:false
    }
  },
  methods:{
    addToDo(){
      //입력된 것이 없으면 동작하지 않음
      if(this.newTodoItem != ''){
        
        //app.vue 에서 정의 한 이벤트 발생
        this.$emit('addToDoItem',this.newTodoItem);
        //인풋 초기화
        this.clearInput();
      }else{
        this.showModal = !this.showModal;
      }
    },
    clearInput(){
      this.newTodoItem = '';
    }
  },
  components:{
    AlertPop
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
.closeModalBtn{color: #42b983;font-size: 30px;}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>