<template>
  <div class="clearAllContainer">
    <button class="clearAllBtn">clear all</button>
    <AlertPop v-if="showModal" @close="showModal = false">
        <h3 slot="header">정말로 삭제하시겠습니까?</h3>
        <button></button>
      </AlertPop>
  </div>
</template>

<script>
import AlertPop from "./common/ModalPop.vue";
export default {
  data:function(){
    return{
      showModal:false
    }
  },
  methods:{
        clearToDo:function(){
          this.$emit('clearAll')
        }
    },
    components:{
    AlertPop
  }
}
</script>

<style scoped>
.clearAllContainer {
  
  height: 50px;
  line-height: 50px;
  
  border-radius: 5px;
  text-align: center;margin-left: -20px;
}
.clearAllBtn {
  color: #e20303;  display: inline-block;   height:100%; line-height: 100%;border:0; background-color: white;text-transform: uppercase;font-weight: 800;cursor: pointer ;vertical-align: middle;margin-left: 20px;padding:0 20px 
}
</style>