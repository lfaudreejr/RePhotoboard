import { USER, API } from '@/utils/api'
import {
  getData,
  mapGetData,
  getNewObject,
  getJWT,
  handleError,
  flatten,
  uniqueById,
  mapGetBoardPins
} from '@/utils/utils'

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
      const userData = getNewObject({
        _id: data._id,
        username: data.username,
        email: data.email,
        role: data.role
      })

      console.log('DATA ', data)
      const userBoards = data.boards
      const userPins = data.pins

      dispatch('setUser', userData)
      dispatch('loadUserBoards', { boards: userBoards, pins: userPins, jwt: jwt })
      // dispatch('setUserPins', userPins)
    }).catch(handleError)
}

const loadUserBoards = ({context, dispatch}, payload) => {
  console.log('load boards payload ', payload)

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
        const boardPins = mapGetBoardPins(userBoards)
        const allPinsFlattened = flatten(boardPins.concat(payload.pins))
        const allUniq = uniqueById(allPinsFlattened)

        dispatch('setUserBoards', userBoards)
        dispatch('setUserPins', allUniq)
      }).catch(handleError)
  }
}

const createBoard = ({context, dispatch}, payload) => {
  const jwt = getJWT()

  return API({
    method: 'POST',
    url: '/boards',
    headers: { 'Authorization': `Bearer ${jwt}` },
    data: payload
  }).then((results) => {
    console.log('created ', results)
    dispatch('getUser', jwt)
    return results
  }).catch(handleError)
}

const updateBoard = ({context, dispatch}, payload) => {
  console.log(payload)
  const jwt = getJWT()

  return API({
    method: 'PUT',
    url: '/boards/' + payload._id,
    headers: { 'Authorization': `Bearer ${jwt}` },
    data: payload
  }).then((results) => {
    console.log('updated ', results)
    dispatch('getUser', jwt)
    return results
  }).catch(handleError)
}

const deleteBoard = ({context, dispatch}, payload) => {
  const jwt = getJWT()

  return API({
    method: 'DELETE',
    url: '/boards/' + payload._id,
    headers: { 'Authorization': `Bearer ${jwt}` }
  })
    .then((data) => {
      console.log('deleted data ', data.data)
      dispatch('getUser', jwt)
    })
    .catch(handleError)
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
  updateBoard,
  deleteBoard
}
