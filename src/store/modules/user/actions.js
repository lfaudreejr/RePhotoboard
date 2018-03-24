import { USER, API } from '@/utils/api'

const setUser = (context, user) => {
  context.commit('USER_UPDATED', user)
}

const setUserBoards = (context, boards) => {
  context.commit('USER_BOARDS_UPDATED', boards)
}

const setUserPins = (context, pins) => {
  context.commit('USER_PINS_UPDATED', pins)
}

const getUser = ({context, dispatch}, jwt) => {
  return USER({
    method: 'GET',
    url: '/me',
    headers: { 'Authorization': `Bearer ${jwt}` }
  }).then(response => {
    const { data } = response
    const userData = Object.assign({}, {
      username: data.username,
      email: data.email,
      role: data.role
    })
    const userBoards = data.boards
    const userPins = data.pins

    dispatch('setUser', userData)
    dispatch('loadUserBoards', { boards: userBoards, jwt: jwt })
    dispatch('setUserPins', userPins)
  }).catch((err) => {
    console.error(err)
  })
}

const loadUserBoards = ({context, dispatch}, payload) => {
  if (Array.isArray(payload.boards)) {
    let promiseArray = payload.boards.map(board => {
      return API({
        method: 'GET',
        url: `/board/${board.id}`,
        headers: { 'Authorization': `Bearer ${payload.jwt}` }
      })
    })
    let retreivedBoards = Promise.all(promiseArray)

    retreivedBoards.then(response => {
      const userBoards = response.map(r => r.data)
      dispatch('setUserBoards', userBoards)
    }).catch(err => {
      console.error(err)
    })
  }
}

const removeUser = ({context, dispatch}) => {
  dispatch('setUser', '')
  dispatch('setUserBoards', [])
  dispatch('setUserPins', [])
}

export default {
  getUser,
  setUser,
  removeUser,
  setUserBoards,
  setUserPins,
  loadUserBoards
}
