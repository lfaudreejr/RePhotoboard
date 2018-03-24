import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  user: JSON.parse(localStorage.getItem('user')) || undefined,
  pins: JSON.parse(localStorage.getItem('user_pins')) || [],
  boards: JSON.parse(localStorage.getItem('user_boards')) || []
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
