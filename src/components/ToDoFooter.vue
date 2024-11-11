<template>
  <div class="clearAllContainer">
    <button class="clearAllBtn" @click="clearToDo">clear all</button>
   <!-- <AlertPop v-if="showModal" @click="showModal = false">
      <h3 slot="header">경고!</h3>
      <template #body >
        정말로 삭제하시겠습니까?
      </template>
      <div slot="footer"><button class="yesBtn btn"  @click="clearToDo">예</button><button class="btn"  @click="showModal = false">아니오</button></div>
    </AlertPop>-->
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
button.btn{width: 60px;background: #ddd;line-height: 30px;margin-left: 15px;}
button.btn.yesBtn{background:  #e20303;margin-left: 0 ;}
</style>