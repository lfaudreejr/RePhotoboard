import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  token: localStorage.getItem('rpbtoken') || false,
  status: false
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
