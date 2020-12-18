import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// css
import '@/assets/css/reset.css'
import '@/assets/css/iconfont.css'

// js
// 阻止点击事件的300ms延迟
// import FastClick from 'fastclick'
// FastClick.attach(document.body)

// ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 过滤器
Vue.filter('timeFormat', timeVal => {
  let theTime = parseInt(timeVal / 1000)
  let result = '' //返回值
  let hour = parseInt(theTime / 3600) //小时
  let minute = parseInt((theTime / 60) % 60) //分
  let second = parseInt(theTime % 60) //秒
  // 小时
  if (hour > 0) {
    if (hour < 10) {
      result = '0' + hour + ':'
    } else {
      result = hour + ':'
    }
  }
  // 分
  if (minute > 0) {
    if (minute < 10) {
      result += '0' + minute + ':'
    } else {
      result += minute + ':'
    }
  } else {
    result += '00:'
  }
  // 秒
  if (second > 0) {
    if (second < 10) {
      result += '0' + second
    } else {
      result += second
    }
  } else {
    result += '00'
  }

  return result
})

Vue.filter('countFormat', countVal => {
  if (countVal >= 10000) {
    const result = parseInt(countVal / 10000)
    return result + '万'
  }
  return countVal
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
