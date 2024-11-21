import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const stoarge = {
    fetch(){
        const arr = [];
        if(localStorage.length > 0){
            for(var i=0;i < localStorage.length; i ++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    //JSON.parse : JSON을 객체로 바꿔줌
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
                    //this.todoItems.push(localStorage.key(i))
                }
            }
        }
        return arr;
    }
};

export const store = new Vuex.Store({
    state:{
        todoItems:stoarge.fetch()
    }
});