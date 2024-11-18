import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        message:'hello',
        num:1,
        headerText:'TODO it! 11'
    }
});