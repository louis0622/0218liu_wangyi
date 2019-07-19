import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import 'amfe-flexible'

//消除一些警告
Vue.config.productionTip = false


//引入mint-ui
import { Tabbar, TabItem} from 'mint-ui';
//全局注册mint-ui组件
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);


//引入路由
import router from './router'
new Vue({
  render: h => h(App),
  router 
}).$mount('#app')
