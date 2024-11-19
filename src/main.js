import Vue from 'vue'
import App from './App__.vue'
import {store} from "./store/store"

Vue.config.productionTip = false

//import VueApexCharts from 'vue-apexcharts'
//Vue.use(VueApexCharts)

//Vue.component('apexchart', VueApexCharts)


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
