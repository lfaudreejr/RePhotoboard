export const LOGIN_REQUEST = (state) => {
  state.status = 'loading'
}

export const LOGIN_SUCCESS = (state, token) => {
  state.status = 'success'
  state.token = token
}

export const LOGIN_ERROR = (state) => {
  state.status = 'error'
}

export const LOGOUT_SUCCESS = (state) => {
  state.status = 'logged_out'
  state.token = ''
}

export default {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS
}
