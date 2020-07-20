import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import axios from './axios/axios'
import { Lazyload,Button } from 'mint-ui'
Vue.config.productionTip = false
Vue.component(Button.name, Button);
Vue.use(Lazyload );

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
