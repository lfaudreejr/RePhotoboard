import Vue from 'vue'
import Vuex from 'vuex'
import boardModule from './modules/boards'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    board: boardModule
  }
})
