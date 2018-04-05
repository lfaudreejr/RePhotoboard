const toggleLoading = (context, loading) => {
  context.commit('TOGGLE_LOADING', loading)
}

const setMessage = (context, message) => {
  context.commit('SET_MESSAGE', message)
}

export default {
  toggleLoading,
  setMessage
}
