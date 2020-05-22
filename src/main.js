import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/sprite.css'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import routes from './route'

const router = new VueRouter({
  routes,
  // mode: 'history'
})
Vue.use(VueRouter)

Vue.config.productionTip = false

//阻止click 300ms延迟
FastClick.attach(document.body)

//阻止浏览器窗口下拉
window.addEventListener('touchmove', function (e) {
  e.stopPropagation()
  e.preventDefault();
}, { passive: false })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
