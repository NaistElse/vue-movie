import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import Router from './router.js'
import Axios from 'axios'
import VueAxios from 'vue-axios'

Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/json'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueAxios, Axios)


new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
