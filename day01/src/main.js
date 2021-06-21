import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

Vue.use(ElementUI);
Vue.prototype.axios = axios;
axios.defaults.baseURL = 'http://192.168.0.100:8022'

Vue.config.productionTip = false





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
