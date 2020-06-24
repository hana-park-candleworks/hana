import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'   //vuex
import './assets/tailwind.css'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

new Vue({   //vue인스턴스 생성
  router,
  store,
  render: h => h(App)  //app.vue 추가  
}).$mount('#app')

