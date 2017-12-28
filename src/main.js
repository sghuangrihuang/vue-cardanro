// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import VueLazyLoad from 'vue-lazyload'

import store from 'storejs'

import './mock'

Vue.use(VueLazyLoad, {
  // loading: '/static/loading-svg/loading-bars.svg'
})
Vue.use(VueAxios, axios)

import './config/rem'
import './assets/css/font-awesome.css'
Vue.config.productionTip = false


Vue.prototype.$store = store
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
