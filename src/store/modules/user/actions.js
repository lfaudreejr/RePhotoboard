import { user, boards } from '@/utils/api/index'
import {
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
  return user['getUserData'](jwt)
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
    }).catch(handleError)
}

const loadUserBoards = ({context, dispatch}, payload) => {
  console.log('load boards payload ', payload)

  if (Array.isArray(payload.boards)) {
    let promiseArray = payload.boards.map(board => {
      return boards['getUserBoards'](board._id, payload.jwt)
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

  return boards['postBoard'](payload, jwt)
    .then((results) => {
      console.log('created ', results)
      dispatch('getUser', jwt)
      return results
    }).catch(handleError)
}

const updateBoard = ({context, dispatch}, payload) => {
  console.log(payload)
  const jwt = getJWT()

  return boards['putBoard'](payload, jwt)

    .then((results) => {
      console.log('updated ', results)
      dispatch('getUser', jwt)
      return results
    }).catch(handleError)
}

const deleteBoard = ({context, dispatch}, payload) => {
  const jwt = getJWT()

  return boards['delBoard'](payload._id, jwt)
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
