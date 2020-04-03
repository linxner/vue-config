import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/sprite.css'
import FastClick from 'fastclick'
Vue.config.productionTip = false
FastClick.attach(document.body)
window.addEventListener('touchmove', function (e) {
  e.stopPropagation()
  e.preventDefault();
}, { passive: false })
new Vue({
  render: h => h(App),
}).$mount('#app')
