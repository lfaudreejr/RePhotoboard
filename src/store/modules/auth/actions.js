import { AUTH } from '@/utils/api'

export default {

  REGISTER_REQUEST ({ commit, dispatch }, user) {
    return AUTH.post('local/register', user).then((response) => {
      const { jwt } = response.data
      localStorage.setItem('token', jwt)
      dispatch('user/getUser', jwt, {root: true})
      commit('LOGIN_SUCCESS', jwt)
    })
  },
  LOGIN_REQUEST ({ commit, dispatch }, user) {
    return AUTH.post('local', { identifier: user.email, password: user.password })
      .then(response => {
        const { jwt } = response.data
        localStorage.setItem('token', jwt)
        dispatch('user/getUser', jwt, {root: true})
        commit('LOGIN_SUCCESS', jwt)
      })
  },
  OAUTH_LOGIN ({ commit, dispatch }, payload) {
    return AUTH({ method: 'GET', url: `${payload.provider}/callback${payload.query}` }).then(response => {
      const { user, jwt } = response.data

      localStorage.setItem('token', jwt)
      dispatch('user/setUser', user, {root: true})
      dispatch('user/setUserBoards', user.boards, {root: true})
      dispatch('user/setUserPins', user.pins, {root: true})

      commit('LOGIN_SUCCESS', jwt)
    })
  },
  LOGOUT ({ commit, dispatch }) {
    localStorage.clear()
    dispatch('user/removeUser', undefined, {root: true})
    commit('LOGOUT_SUCCESS')
  }

}
