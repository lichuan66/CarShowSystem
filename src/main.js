import Vue from 'vue'
import App from './App.vue'
import './assets/css/global.less'

// 将全局的echarts对象挂载到Vue的原型对象上
Vue.prototype.$echarts = window.echarts

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
