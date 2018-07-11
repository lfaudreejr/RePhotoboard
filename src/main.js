// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueDisqus from 'vue-disqus'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'
import '@/assets/styles/main.scss'

import SocialButton from '@/components/SocialButton'
import ReDialog from '@/components/ReDialog'
import RePinSaveButton from '@/components/RePinSaveButton'
import ReSnackbar from '@/components/ReSnackbar'

Vue.use(VueDisqus)
Vue.use(Vuetify, {
  theme: {
    primary: '#1abc9c',
    secondary: '#16a085',
    tertiary: '#EEEEEE',
    accent: '#f1c40f',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50'
  }
})

Vue.component('social-button', SocialButton)
Vue.component('re-dialog', ReDialog)
Vue.component('re-pin-save-button', RePinSaveButton)
Vue.component('re-snackbar', ReSnackbar)

Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
