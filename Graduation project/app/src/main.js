import Vue from 'vue'//引入vue框架
import App from './App.vue'//引入根组件
import router from './router'//引入路由设置
import axios from 'axios'//引入axios（相当于ajax）

Vue.prototype.$axios = axios;//把axios赋值到vue的原型上
//关闭生产模式下给出的提示
Vue.config.productionTip = false;

new Vue({//实例化
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
