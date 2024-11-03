<template>
  <div>
    <ul>
        <li class="shadow" >
            <span class="ckeckBtn"><i class="fas fa-check"></i></span>
            <p ></p>
            <button class="removeBtn"><i class="fa-solid fa-trash-can"></i></button>
        </li>
    </ul>
  </div>
</template>

<script>
export default {

  methods:{
 
  }
    
}
</script>

<style scoped>
ul{list-style:none;padding-left: 0;margin-top: 0;text-align: left;}
li{display: flex;min-height: 50px; height: 50px;line-height: 50px;margin: 0.5rem 0;padding:0 0.9rem;background: #fff;border-radius: 5px;}
li p{margin: 0;;}
li i{line-height: 50px;}
.ckeckBtn{line-height: 50px;color:#62acde;margin-right: 15px;}
.checkBtnCompleted{color:#b3adad}
.textCompleted{text-decoration: line-through;color:#b3adad}
.removeBtn{margin-left: auto;color: #de4343;border: 0;background: #fff;cursor: pointer;}
</style>