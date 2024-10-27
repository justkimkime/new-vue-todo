<template>
  <div id="app">
   <AppHeader></AppHeader>
   <AppInput></AppInput>
   <AppList></AppList>
   <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppInput from './components/AppInput.vue'
import AppList from './components/AppList.vue'
import AppFooter from './components/AppFooter.vue'
export default {
  name: 'app',
  components: {
    AppHeader,
    AppInput,
    AppList,
    AppFooter
  }
}
</script>

<style>
#app {
  font-family: "Nanum Myeongjo", serif;
 text-align: center;
}
input{border:groove;width: 300px;font-size:30px; line-height: 1.5;box-sizing: border-box;}
button{border-style: groove;}
.shadow{box-shadow: 5px 10px 10px rgba(0,0,0,.04);}
</style>
