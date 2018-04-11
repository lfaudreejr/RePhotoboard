import { auth } from '@/utils/api/index'
import { setJWT, getData, extractJWT } from '@/utils/utils'

export default {

  REGISTER_REQUEST ({ commit, dispatch }, user) {
    return auth['registerUser'](user)
      .then(extractJWT)
      .then(jwt => {
        setJWT(jwt)

        dispatch('user/getUser', jwt, {root: true})
        commit('LOGIN_SUCCESS', jwt)
      })
  },
  LOGIN_REQUEST ({ commit, dispatch }, user) {
    return auth['loginUser'](user)
      .then(getData)
      .then(extractJWT)
      .then(jwt => {
        setJWT(jwt)

        dispatch('user/getUser', jwt, {root: true}).then(() => {
          commit('LOGIN_SUCCESS', jwt)
        })
      })
  },
  OAUTH_LOGIN ({ commit, dispatch }, payload) {
    return auth['loginOAuth'](payload)
      .then(getData)
      .then(extractJWT)
      .then(jwt => {
        setJWT(jwt)

        dispatch('user/getUser', jwt, {root: true})

        commit('LOGIN_SUCCESS', jwt)
      })
  },
  LOGOUT ({ commit, dispatch }) {
    localStorage.clear()
    dispatch('user/removeUser', undefined, {root: true})
    commit('LOGOUT_SUCCESS')
  }

}
