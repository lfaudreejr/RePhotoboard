import { USER, API } from '@/utils/api'
import { getData, mapGetData } from '@/utils/utils'

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
  })
    .then(getData)
    .then(data => {
      const userData = Object.assign({}, {
        _id: data._id,
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
        url: `/boards/${board._id}`,
        headers: { 'Authorization': `Bearer ${payload.jwt}` }
      })
    })
    let retreivedBoards = Promise.all(promiseArray)

    retreivedBoards
      .then(mapGetData)
      .then(userBoards => {
      // const userBoards = response.map(e => e.data)
        console.log('userboards in loadboars ', userBoards)
        dispatch('setUserBoards', userBoards)
      }).catch(err => {
        console.error(err)
      })
  }
}

const createBoard = ({context, dispatch}, payload) => {
  const jwt = localStorage.getItem('rpbtoken')

  return API({
    method: 'POST',
    url: '/boards',
    headers: { 'Authorization': `Bearer ${jwt}` },
    data: payload
  }).then((results) => {
    console.log('created ', results)
    dispatch('getUser', jwt)
    return results
  }).catch((err) => {
    console.error(err)
  })
}

const updateBoard = ({context, dispatch}, payload) => {
  console.log(payload)
  const jwt = localStorage.getItem('rpbtoken')

  return API({
    method: 'PUT',
    url: '/boards/' + payload._id,
    headers: { 'Authorization': `Bearer ${jwt}` },
    data: payload
  }).then((results) => {
    console.log('updated ', results)
    dispatch('getUser', jwt)
    return results
  }).catch((err) => {
    console.error(err)
  })
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
  loadUserBoards,
  createBoard,
  updateBoard
}
