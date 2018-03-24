import Vue from 'vue'
import Vuex from 'vuex'
import pinModule from './modules/pins'
import userModule from './modules/user'
import authModule from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pins: pinModule,
    user: userModule,
    auth: authModule
  }
})
