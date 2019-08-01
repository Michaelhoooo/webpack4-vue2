import Vue from 'vue'
import App from './App.vue'
import './index.scss'
let vm = new Vue({
  el: '#app',
  render: h => h(App),
})

Vue.use({
  vm
})