import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// css
import '@/assets/css/reset.css'
import '@/assets/css/iconfont.css'

// js
// 阻止点击事件的300ms延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)

// mint UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
