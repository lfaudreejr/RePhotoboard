// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import { VueMasonryPlugin } from 'vue-masonry'
import axios from 'axios'
import App from './App'
import router from './router'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, { theme: {
  primary: '#03A9F4',
  secondary: '#0091EA',
  accent: '#18FFFF',
  error: '#f44336',
  warning: '#ffeb3b',
  info: '#2196f3',
  success: '#4caf50'
}})
Vue.use(VueMasonryPlugin)

Vue.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
