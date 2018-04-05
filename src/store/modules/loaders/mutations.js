const TOGGLE_LOADING = (state, loading) => {
  state.loading = loading
}
const SET_MESSAGE = (state, message) => {
  state.message = message
}

export default {
  TOGGLE_LOADING,
  SET_MESSAGE
}
