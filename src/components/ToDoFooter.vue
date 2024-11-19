<template>
  <div class="clearAllContainer">
    <button class="clearAllBtn" @click="clearToDo">clear all</button>

  </div>
</template>

<script>
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