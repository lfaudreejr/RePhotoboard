const isAuthenticated = (state) => !!state.token
const authStatus = (state) => state.status
const jwt = (state) => state.token

export default {
  isAuthenticated,
  authStatus,
  jwt
}
