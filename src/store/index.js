import Vue from 'vue'
import Vuex from 'vuex'
import boardModule from './modules/boards'
import pinModule from './modules/pins'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    boards: boardModule,
    pins: pinModule
  }
})
