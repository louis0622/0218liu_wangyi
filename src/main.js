import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import 'amfe-flexible'

//消除一些警告
Vue.config.productionTip = false

//VuX Ui库
import{ Tabbar, TabbarItem } from 'vux'
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)

//引入路由
import router from './router'
new Vue({
  render: h => h(App),
  router 
}).$mount('#app')
