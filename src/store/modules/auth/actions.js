import { AUTH } from '@/utils/api'
import { getData, setJWT } from '@/utils/utils'

export default {

  REGISTER_REQUEST ({ commit, dispatch }, user) {
    return AUTH.post('local/register', user)
      .then(getData)
      .then((data) => {
        const { jwt } = data

        setJWT(jwt)

        dispatch('user/getUser', jwt, {root: true})
        commit('LOGIN_SUCCESS', jwt)
      })
  },
  LOGIN_REQUEST ({ commit, dispatch }, user) {
    return AUTH.post('local', { identifier: user.email, password: user.password })
      .then(getData)
      .then(data => {
        const { jwt } = data

        setJWT(jwt)

        dispatch('user/getUser', jwt, {root: true}).then(() => {
          commit('LOGIN_SUCCESS', jwt)
        })
      })
  },
  OAUTH_LOGIN ({ commit, dispatch }, payload) {
    return AUTH({ method: 'GET', url: `${payload.provider}/callback${payload.query}` })
      .then(getData)
      .then(data => {
        const { jwt } = data

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
